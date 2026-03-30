const fs = require('fs');
const domain = 'https://plagedetretat.com';
const paths = [
  { path: '', priority: '1.0', freq: 'weekly' },
  { path: '/about', priority: '0.8', freq: 'monthly' },
  { path: '/privacy', priority: '0.5', freq: 'yearly' },
  { path: '/terms', priority: '0.5', freq: 'yearly' },
  { path: '/cookies', priority: '0.5', freq: 'yearly' },
];
const langs = [
  { code: 'fr', prefix: '' },
  { code: 'en', prefix: '/en' },
  { code: 'de', prefix: '/de' },
  { code: 'nl', prefix: '/nl' },
  { code: 'zh', prefix: '/zh' }
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

paths.forEach(({ path, priority, freq }) => {
  langs.forEach(({ prefix }) => {
    let loc = `${domain}${prefix}${path}`;
    if (loc === domain) loc = `${domain}/`;

    xml += `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n`;

    langs.forEach(({ code: altCode, prefix: altPrefix }) => {
      let altLoc = `${domain}${altPrefix}${path}`;
      if (altLoc === domain) altLoc = `${domain}/`;
      xml += `    <xhtml:link rel="alternate" hreflang="${altCode}" href="${altLoc}" />\n`;
    });
    
    let defLoc = `${domain}${path}`;
    if (defLoc === domain) defLoc = `${domain}/`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defLoc}" />\n  </url>\n`;
  });
});

xml += '</urlset>';
fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated successfully without trailing slashes for subpaths.');
