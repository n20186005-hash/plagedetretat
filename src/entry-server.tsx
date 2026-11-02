import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'wouter';
import { AppRouter } from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { TooltipProvider } from './components/ui/tooltip';
import i18n from './i18n';
import { allRoutes } from './lib/routes';

export { allRoutes };
export async function render(path: string) {
  const prefix = path.split('/')[1];
  const lang = prefix === 'zh' ? 'zh-TW' : ['en', 'de', 'nl', 'it', 'es'].includes(prefix) ? prefix : 'fr';
  await i18n.changeLanguage(lang);

  const body = renderToString(<HelmetProvider><ThemeProvider><TooltipProvider><Router ssrPath={path}><AppRouter /></Router></TooltipProvider></ThemeProvider></HelmetProvider>);
  const headTags: string[] = [];
  const cleanBody = body.replace(/<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>|<script type="application\/ld\+json">[\s\S]*?<\/script>/g, tag => { headTags.push(tag); return ''; });
  if (!headTags.some(tag => tag.includes('rel="canonical"'))) throw new Error(`No canonical rendered for ${path}`);
  return { body: cleanBody, head: headTags.join(''), htmlAttributes: `lang="${lang === 'zh-TW' ? 'zh-Hant' : lang}"` };
}
