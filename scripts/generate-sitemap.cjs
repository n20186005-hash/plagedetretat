const fs = require('fs');

const domain = 'https://www.plagedetretat.com';
const languages = [
  { code: 'fr-FR', internalCode: 'fr', prefix: '' },
  { code: 'en', internalCode: 'en', prefix: '/en' },
  { code: 'de-DE', internalCode: 'de', prefix: '/de' },
  { code: 'nl-NL', internalCode: 'nl', prefix: '/nl' },
  { code: 'it-IT', internalCode: 'it', prefix: '/it' },
  { code: 'es-ES', internalCode: 'es', prefix: '/es' },
  { code: 'zh-TW', internalCode: 'zh-TW', prefix: '/zh' }
];

const routes = [
  {
    path: '/',
    priority: '1.0',
    freq: 'weekly',
    languages: ['fr', 'en', 'de', 'nl', 'it', 'es', 'zh-TW'],
  },
  {
    path: '/que-faire-etretat/',
    priority: '0.9',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/marees-etretat/',
    priority: '0.8',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/parking-etretat/',
    priority: '0.8',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/falaises-etretat/',
    priority: '0.8',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/etretat-en-1-jour/',
    priority: '0.8',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/points-photo-etretat/',
    priority: '0.8',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/etretat-avec-enfants/',
    priority: '0.8',
    freq: 'weekly',
    languages: ['fr'],
  },
  {
    path: '/about/',
    priority: '0.4',
    freq: 'monthly',
    languages: ['fr', 'en', 'de', 'nl', 'it', 'es', 'zh-TW'],
  },
  {
    path: '/privacy/',
    priority: '0.2',
    freq: 'yearly',
    languages: ['fr', 'en', 'de', 'nl', 'it', 'es', 'zh-TW'],
  },
  {
    path: '/terms/',
    priority: '0.2',
    freq: 'yearly',
    languages: ['fr', 'en', 'de', 'nl', 'it', 'es', 'zh-TW'],
  },
  {
    path: '/cookies/',
    priority: '0.2',
    freq: 'yearly',
    languages: ['fr', 'en', 'de', 'nl', 'it', 'es', 'zh-TW'],
  },
];

function buildUrl(prefix, path) {
  if (path === '/') {
    return prefix ? `${domain}${prefix}/` : `${domain}/`;
  }

  return prefix ? `${domain}${prefix}${path}` : `${domain}${path}`;
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

routes.forEach(({ path, priority, freq, languages: routeLanguages }) => {
  const availableLanguages = languages.filter((language) => routeLanguages.includes(language.internalCode));

  availableLanguages.forEach(({ prefix }) => {
    const loc = buildUrl(prefix, path);
    xml += `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n`;

    availableLanguages.forEach(({ code, prefix: altPrefix }) => {
      xml += `    <xhtml:link rel="alternate" hreflang="${code}" href="${buildUrl(altPrefix, path)}" />\n`;
    });
    
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${buildUrl('', path)}" />\n  </url>\n`;
  });
});

xml += '</urlset>';
fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated successfully with canonical www URLs and trailing slashes.');
