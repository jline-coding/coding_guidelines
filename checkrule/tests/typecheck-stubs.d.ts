declare namespace JSX { interface IntrinsicElements { [elemName: string]: any } }
declare module 'react' {
  export type FormEvent = any;
  export function useEffect(...args:any[]):any;
  export function useMemo<T>(fn:()=>T,deps:any[]):T;
  export function useRef<T>(value:T|null):{current:T|null};
  export function useState<T>(value:T):[T,(v:T|((p:T)=>T))=>void];
}
declare module 'next/head' { const Head:any; export default Head; }
declare module 'next' { export type NextApiRequest=any; export type NextApiResponse<T=any>=any; }
declare module 'next/app' { export type AppProps=any; }
declare module 'jszip' { const JSZip:any; export default JSZip; }
declare module 'node:dns/promises' { const dns:any; export default dns; }
declare module 'node:net' { const net:any; export default net; }
declare const Buffer:any;
declare const process:{env:Record<string,string|undefined>};
