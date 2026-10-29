import type { NextApiRequest, NextApiResponse } from 'next';
import net from 'node:net';

type Response = { country: string; source: 'edge-header'|'ip-lookup'|'unknown' };

const COUNTRY_HEADERS = ['x-vercel-ip-country','cf-ipcountry','cloudfront-viewer-country','x-country-code'] as const;

function firstHeader(value: string|string[]|undefined){ return Array.isArray(value)?value[0]:value; }
function isPrivateIp(ip:string){
  const clean=ip.replace(/^::ffff:/,'').trim();
  if(net.isIPv4(clean)){
    const p=clean.split('.').map(Number);
    return p[0]===10||p[0]===127||p[0]===0||(p[0]===169&&p[1]===254)||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===100&&p[1]>=64&&p[1]<=127);
  }
  if(net.isIPv6(clean)){
    const x=clean.toLowerCase();
    return x==='::1'||x==='::'||x.startsWith('fc')||x.startsWith('fd')||/^fe[89ab]/.test(x);
  }
  return true;
}
function requestIp(req:NextApiRequest){
  const forwarded=firstHeader(req.headers['x-forwarded-for']);
  const real=firstHeader(req.headers['x-real-ip']);
  const socketIp=String((req as any)?.socket?.remoteAddress||'');
  const candidate=(forwarded?.split(',')[0]||real||socketIp||'').trim().replace(/^::ffff:/,'');
  return candidate && net.isIP(candidate) && !isPrivateIp(candidate) ? candidate : '';
}

export default async function handler(req:NextApiRequest,res:NextApiResponse<Response>){
  res.setHeader('Cache-Control','private, no-store, max-age=0');
  for(const name of COUNTRY_HEADERS){
    const value=String(firstHeader(req.headers[name])||'').trim().toUpperCase();
    if(/^[A-Z]{2}$/.test(value)) return res.status(200).json({country:value,source:'edge-header'});
  }

  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),2200);
  try{
    const ip=requestIp(req);
    const endpoint=ip?`https://ipwho.is/${encodeURIComponent(ip)}?fields=success,country_code`:'https://ipwho.is/?fields=success,country_code';
    const response=await fetch(endpoint,{signal:controller.signal,headers:{accept:'application/json'},cache:'no-store'});
    if(response.ok){
      const data=await response.json() as {success?:boolean;country_code?:string};
      const country=String(data?.country_code||'').toUpperCase();
      if(data?.success!==false&&/^[A-Z]{2}$/.test(country)) return res.status(200).json({country,source:'ip-lookup'});
    }
  }catch{} finally{clearTimeout(timer)}
  return res.status(200).json({country:'ZZ',source:'unknown'});
}
