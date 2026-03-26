import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useHashLocation } from 'wouter/use-hash-location';

export function SEO() {
  const { i18n } = useTranslation();
  const [location] = useHashLocation();

  const domain = 'https://plagedetretat.com';
  
  // Format the path correctly. We map hash routing paths to normal paths for SEO.
  // For instance, /#/about becomes /about
  // Note: For true SEO indexing, standard URL paths are better than hash routing.
  const path = location === '/' ? '' : location;

  const getUrl = (lang: string) => {
    let langPrefix = '';
    if (lang === 'en') langPrefix = '/en';
    if (lang === 'de') langPrefix = '/de';
    if (lang === 'nl') langPrefix = '/nl';
    if (lang === 'zh-TW') langPrefix = '/zh'; // Using zh for Chinese
    // fr is default, so no prefix.
    
    let fullPath = `${langPrefix}${path}`;
    if (fullPath === '') fullPath = '/';
    
    return `${domain}${fullPath}`;
  };

  const currentLang = i18n.language || 'fr';
  const canonicalUrl = getUrl(currentLang);

  return (
    <Helmet>
      {/* Set HTML lang attribute */}
      <html lang={currentLang} />
      
      {/* Self-referencing canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Bidirectional hreflang tags */}
      <link rel="alternate" hrefLang="fr" href={getUrl('fr')} />
      <link rel="alternate" hrefLang="en" href={getUrl('en')} />
      <link rel="alternate" hrefLang="de" href={getUrl('de')} />
      <link rel="alternate" hrefLang="nl" href={getUrl('nl')} />
      <link rel="alternate" hrefLang="zh" href={getUrl('zh-TW')} />
      <link rel="alternate" hrefLang="x-default" href={getUrl('fr')} />
    </Helmet>
  );
}
