import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { render, allRoutes } from '../dist-ssr/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
for (const path of [...allRoutes, '/404/']) {
  const { body, head, htmlAttributes } = await render(path);
  const html = template.replace(/<html[^>]*>/, `<html ${htmlAttributes}>`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*\/>/, '')
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (!html.includes('<h1') || !html.includes('rel="canonical"')) throw new Error(`Incomplete render: ${path}`);
  const output = path === '/404/' ? 'dist/404.html' : join('dist', path, 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}
console.log(`Prerendered ${allRoutes.length} valid routes and a noindex error page.`);
