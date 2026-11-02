import { allRoutes } from './lib/routes';
interface Env { ASSETS: { fetch(request: Request): Promise<Response> } }
const routes = new Set(allRoutes);
const canonicalHost = 'www.plagedetretat.com';
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const target = new URL(url);
    if (url.hostname === 'plagedetretat.com' || (url.hostname === canonicalHost && url.protocol !== 'https:')) {
      target.hostname = canonicalHost;
      target.protocol = 'https:';
    }
    if (target.pathname === '/com' || target.pathname.startsWith('/com/')) target.pathname = target.pathname.slice(4) || '/';
    if (target.pathname.endsWith('/index.html')) target.pathname = target.pathname.slice(0, -10);
    const normalPath = target.pathname.endsWith('/') ? target.pathname : target.pathname + '/';
    if (routes.has(normalPath)) target.pathname = normalPath;
    if (target.href !== url.href) return Response.redirect(target.href, 308);
    if (routes.has(url.pathname)) {
      const asset = new URL(url);
      asset.pathname += 'index.html';
      return env.ASSETS.fetch(new Request(asset, request));
    }
    if (/^\/assets\/[A-Za-z0-9._-]+$/.test(url.pathname) || ['/robots.txt', '/sitemap.xml', '/ads.txt'].includes(url.pathname)) return env.ASSETS.fetch(request);
    const error = await env.ASSETS.fetch(new Request(new URL('/404.html', url), request));
    const headers = new Headers(error.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(error.body, { status: 404, headers });
  }
};
