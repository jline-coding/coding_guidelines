const assert = require('assert');
const http = require('http');
const handler = require('./.api-build/pages/api/scan-site.js').default;
const countryHandler = require('./.api-build/pages/api/detect-country.js').default;

process.env.ALLOW_PRIVATE_AUDIT_TARGETS='true';
process.env.ALLOW_INSECURE_BASIC_AUTH='true';

function page(label, withLink=true){
  return `<!doctype html><html><head><meta charset="utf-8"><title>${label}</title><link rel="stylesheet" href="/site.css"></head><body><header></header><main><h1>${label}</h1><h2>A</h2><h3>B</h3>${withLink?'<a href="/about/">About</a>':''}</main><footer></footer><script src="/app.js" defer></script></body></html>`;
}
function createSite(label,{protectedSite=false}={}){
  const expected='Basic '+Buffer.from('reviewer:secret').toString('base64');
  return http.createServer((req,res)=>{
    if(protectedSite && req.headers.authorization!==expected){res.writeHead(401,{'content-type':'text/html'});return res.end('unauthorized');}
    res.writeHead(200,{'content-type':'text/html'});
    return res.end(req.url==='/about/'?page(`${label} About`,false):page(label,true));
  });
}
function listen(server){return new Promise(resolve=>server.listen(0,'127.0.0.1',()=>resolve(server.address().port)));}
function close(server){return new Promise(resolve=>server.close(resolve));}
function invoke(body){
  return new Promise((resolve,reject)=>{
    const req={method:'POST',body};
    const state={statusCode:200,headers:{}};
    const res={
      setHeader(k,v){state.headers[k]=v;},
      status(code){state.statusCode=code;return this;},
      json(payload){resolve({status:state.statusCode,body:payload,headers:state.headers});return this;}
    };
    Promise.resolve(handler(req,res)).catch(reject);
  });
}
function invokeCountry(headers){
  return new Promise((resolve,reject)=>{
    const req={method:'GET',headers};
    const state={statusCode:200,headers:{}};
    const res={
      setHeader(k,v){state.headers[k]=v;},
      status(code){state.statusCode=code;return this;},
      json(payload){resolve({status:state.statusCode,body:payload,headers:state.headers});return this;}
    };
    Promise.resolve(countryHandler(req,res)).catch(reject);
  });
}

(async()=>{
  const protectedSite=createSite('PROTECTED',{protectedSite:true});
  const public1=createSite('PUBLIC1');
  const public2=createSite('PUBLIC2');
  const pp=await listen(protectedSite), p1=await listen(public1), p2=await listen(public2);
  try{
    const secureBase=`http://127.0.0.1:${pp}`;
    const publicBase1=`http://127.0.0.1:${p1}`;
    const publicBase2=`http://127.0.0.1:${p2}`;

    // 1. Basic Auth + multiple explicit pages on one origin + crawl.
    let r=await invoke({
      urls:[`${secureBase}/`,`${secureBase}/about/`],
      maxPages:2,
      crawlInternal:true,
      basicAuth:{enabled:true,username:'reviewer',password:'secret'}
    });
    assert.strictEqual(r.status,200,'same-origin basic auth batch failed');
    assert.strictEqual(r.body.targets.length,2,'did not retain both seed URLs');
    assert.strictEqual(r.body.sites.length,1,'same-origin batch should have one site summary');
    assert.strictEqual(r.body.pagesScanned,2,'explicit protected pages were not both scanned');
    assert(!JSON.stringify(r.body).includes('secret'),'password leaked into response');
    assert.strictEqual(r.headers['Cache-Control'],'no-store, max-age=0','response should be no-store');

    // 2. Multiple public origins can be audited in one batch.
    r=await invoke({
      urls:[`${publicBase1}/`,`${publicBase2}/`],
      maxPages:2,
      crawlInternal:true,
      basicAuth:{enabled:false,username:'',password:''}
    });
    assert.strictEqual(r.status,200,'multi-origin public batch failed');
    assert.strictEqual(r.body.sites.length,2,'did not summarize both public origins');
    assert.strictEqual(r.body.pagesScanned,4,'did not crawl internal link on each public origin');

    // 3. Crawl disabled means only explicit URLs are checked.
    r=await invoke({
      urls:[`${publicBase1}/`,`${publicBase1}/about/`],
      maxPages:20,
      crawlInternal:false,
      basicAuth:{enabled:false,username:'',password:''}
    });
    assert.strictEqual(r.status,200,'exact multi-url scan failed');
    assert.strictEqual(r.body.pagesScanned,2,'crawl disabled should scan only explicit URLs');

    // 4. Wrong Basic Auth must fail clearly if no protected page can be read.
    r=await invoke({
      urls:[`${secureBase}/`],
      maxPages:1,
      crawlInternal:false,
      basicAuth:{enabled:true,username:'reviewer',password:'wrong'}
    });
    assert.strictEqual(r.status,400,'wrong credentials should fail when no pages can be read');
    assert(/401/.test(r.body.error),'wrong credentials should surface HTTP 401');

    // 5. Do not send one credential to multiple origins.
    r=await invoke({
      urls:[`${secureBase}/`,`${publicBase1}/`],
      maxPages:1,
      crawlInternal:false,
      basicAuth:{enabled:true,username:'reviewer',password:'secret'}
    });
    assert.strictEqual(r.status,400,'multi-origin Basic Auth must be rejected');
    assert(/1 origin/.test(r.body.error),'multi-origin Basic Auth rejection should explain origin scope');

    // 6. Basic Auth over HTTP is denied by default even when the private target itself is allowed.
    process.env.ALLOW_INSECURE_BASIC_AUTH='false';
    r=await invoke({
      urls:[`${secureBase}/`],
      maxPages:1,
      crawlInternal:false,
      basicAuth:{enabled:true,username:'reviewer',password:'secret'}
    });
    assert.strictEqual(r.status,400,'insecure HTTP Basic Auth should be rejected by default');
    assert(/HTTP/.test(r.body.error),'HTTP Basic Auth rejection should explain transport requirement');
    process.env.ALLOW_INSECURE_BASIC_AUTH='true';

    // 7. Embedded URL credentials must never be accepted.
    r=await invoke({
      urls:[`http://reviewer:secret@127.0.0.1:${pp}/`],
      maxPages:1,
      crawlInternal:false,
      basicAuth:{enabled:false,username:'',password:''}
    });
    assert.strictEqual(r.status,400,'embedded credentials in URL must be rejected');
    assert(/username\/password/.test(r.body.error),'embedded credential rejection should direct user to Basic Authentication fields');

    // 8. Input batch limit protects staging from accidental overload.
    r=await invoke({
      urls:Array.from({length:21},(_,i)=>`${publicBase1}/page-${i}/`),
      maxPages:1,
      crawlInternal:false,
      basicAuth:{enabled:false,username:'',password:''}
    });
    assert.strictEqual(r.status,400,'more than 20 seed URLs must be rejected');
    assert(/20 URL/.test(r.body.error),'seed limit rejection should explain the 20 URL limit');

    // 9. Country header detects Japan without external lookup.
    let geo=await invokeCountry({'x-vercel-ip-country':'JP'});
    assert.strictEqual(geo.body.country,'JP','JP country header not detected');
    assert.strictEqual(geo.body.source,'edge-header','country header should take precedence');

    // 10. Country header detects Vietnam without external lookup.
    geo=await invokeCountry({'cf-ipcountry':'VN'});
    assert.strictEqual(geo.body.country,'VN','VN country header not detected');

    console.log('API_REGRESSION_OK 10/10');
  } finally {
    await close(protectedSite); await close(public1); await close(public2);
  }
})().catch(e=>{console.error(e);process.exit(1)});
