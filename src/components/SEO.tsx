import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import { DEFAULT_LANGUAGE, getAbsoluteUrl, getLanguageConfig, normalizePath, SITE_URL, SUPPORTED_LANGUAGES, type SupportedLanguageCode } from '@/lib/site';

type PageMetadata = {
  titles: Partial<Record<SupportedLanguageCode, string>>;
  descriptions: Partial<Record<SupportedLanguageCode, string>>;
  supportedLanguages: SupportedLanguageCode[];
  breadcrumbLabel?: Partial<Record<SupportedLanguageCode, string>>;
  includeAttractionSchema?: boolean;
};

export function SEO() {
  const { i18n, t } = useTranslation();
  const [location] = useLocation();
  const normalizedPath = normalizePath(location);
  const currentLanguage = getLanguageConfig(i18n.language).code;
  const currentHtmlLang = getLanguageConfig(currentLanguage).htmlLang;

  const sharedDescriptions: Record<SupportedLanguageCode, string> = {
    fr: "Préparez votre visite à la plage d'Étretat : accès, marées, parking, baignade, falaises d'Aval et d'Amont, conseils sécurité et meilleurs points de vue.",
    en: "Plan your visit to Étretat Beach with practical information on cliffs, tides, parking, viewpoints, swimming, and visitor tips.",
    de: "Planen Sie Ihren Besuch am Strand von Étretat mit Tipps zu Klippen, Gezeiten, Parken, Aussichtspunkten und Sicherheit.",
    nl: "Bereid uw bezoek aan Étretat voor met praktische tips over strand, kliffen, getijden, parkeren en uitzichtpunten.",
    it: "Organizza la visita a Étretat con informazioni pratiche su spiaggia, falesie, maree, parcheggio e punti panoramici.",
    es: "Planifica tu visita a Étretat con información práctica sobre playa, acantilados, mareas, parking y miradores.",
    "zh-TW": "規劃埃特雷塔海灘之旅：懸崖、潮汐、停車、觀景點、步行與安全提醒一次看懂。",
  };

  const pageMetadata: Record<string, PageMetadata> = {
    "/": {
      titles: {
        fr: "Plage d'Étretat : accès, marées, parking et falaises",
        en: "Étretat Beach: Cliffs, Tides, Parking & Visitor Guide",
        de: "Étretat Strand: Klippen, Gezeiten & Parken | Guide",
        nl: "Étretat strand: kliffen, getijden & parkeren | Gids",
        it: "Étretat: spiaggia, falesie, maree e parcheggio | Guida",
        es: "Étretat: playa, acantilados, mareas y parking | Guía",
        "zh-TW": "埃特雷塔海灘：懸崖、潮汐、停車與遊覽指南",
      },
      descriptions: sharedDescriptions,
      supportedLanguages: SUPPORTED_LANGUAGES.map((language) => language.code),
      breadcrumbLabel: {
        fr: "Plage d'Étretat",
        en: "Étretat Beach",
        de: "Étretat Strand",
        nl: "Étretat strand",
        it: "Spiaggia di Étretat",
        es: "Playa de Étretat",
        "zh-TW": "埃特雷塔海灘",
      },
      includeAttractionSchema: true,
    },
    "/about/": {
      supportedLanguages: SUPPORTED_LANGUAGES.map((language) => language.code),
      titles: {
        fr: `${t("about.title")} | Plage d'Étretat`,
        en: `${t("about.title")} | Étretat Beach`,
        de: `${t("about.title")} | Étretat Strand`,
        nl: `${t("about.title")} | Étretat strand`,
        it: `${t("about.title")} | Étretat`,
        es: `${t("about.title")} | Étretat`,
        "zh-TW": `${t("about.title")} | 埃特雷塔海灘`,
      },
      descriptions: {
        fr: t("about.content1"),
        en: t("about.content1"),
        de: t("about.content1"),
        nl: t("about.content1"),
        it: t("about.content1"),
        es: t("about.content1"),
        "zh-TW": t("about.content1"),
      },
    },
    "/privacy/": {
      supportedLanguages: SUPPORTED_LANGUAGES.map((language) => language.code),
      titles: {
        fr: `${t("privacy.title")} | Plage d'Étretat`,
        en: `${t("privacy.title")} | Étretat Beach`,
        de: `${t("privacy.title")} | Étretat Strand`,
        nl: `${t("privacy.title")} | Étretat strand`,
        it: `${t("privacy.title")} | Étretat`,
        es: `${t("privacy.title")} | Étretat`,
        "zh-TW": `${t("privacy.title")} | 埃特雷塔海灘`,
      },
      descriptions: {
        fr: t("privacy.section1_content"),
        en: t("privacy.section1_content"),
        de: t("privacy.section1_content"),
        nl: t("privacy.section1_content"),
        it: t("privacy.section1_content"),
        es: t("privacy.section1_content"),
        "zh-TW": t("privacy.section1_content"),
      },
    },
    "/terms/": {
      supportedLanguages: SUPPORTED_LANGUAGES.map((language) => language.code),
      titles: {
        fr: `${t("terms.title")} | Plage d'Étretat`,
        en: `${t("terms.title")} | Étretat Beach`,
        de: `${t("terms.title")} | Étretat Strand`,
        nl: `${t("terms.title")} | Étretat strand`,
        it: `${t("terms.title")} | Étretat`,
        es: `${t("terms.title")} | Étretat`,
        "zh-TW": `${t("terms.title")} | 埃特雷塔海灘`,
      },
      descriptions: {
        fr: t("terms.section1_content"),
        en: t("terms.section1_content"),
        de: t("terms.section1_content"),
        nl: t("terms.section1_content"),
        it: t("terms.section1_content"),
        es: t("terms.section1_content"),
        "zh-TW": t("terms.section1_content"),
      },
    },
    "/cookies/": {
      supportedLanguages: SUPPORTED_LANGUAGES.map((language) => language.code),
      titles: {
        fr: `${t("cookies.title")} | Plage d'Étretat`,
        en: `${t("cookies.title")} | Étretat Beach`,
        de: `${t("cookies.title")} | Étretat Strand`,
        nl: `${t("cookies.title")} | Étretat strand`,
        it: `${t("cookies.title")} | Étretat`,
        es: `${t("cookies.title")} | Étretat`,
        "zh-TW": `${t("cookies.title")} | 埃特雷塔海灘`,
      },
      descriptions: {
        fr: t("cookies.section1_content"),
        en: t("cookies.section1_content"),
        de: t("cookies.section1_content"),
        nl: t("cookies.section1_content"),
        it: t("cookies.section1_content"),
        es: t("cookies.section1_content"),
        "zh-TW": t("cookies.section1_content"),
      },
    },
    "/que-faire-etretat/": {
      titles: {
        fr: "Que faire à Étretat ? 12 lieux à voir et conseils de visite",
      },
      descriptions: {
        fr: "Organisez votre journée à Étretat avec 12 lieux à voir, les meilleures vues sur les falaises, des idées d'itinéraire, des conseils parking et marées.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Que faire à Étretat",
      },
    },
    "/marees-etretat/": {
      titles: {
        fr: "Marées à Étretat : horaires, sécurité et meilleur moment pour la plage",
      },
      descriptions: {
        fr: "Comprenez les marées à Étretat avant votre visite : quand aller sur la plage, quelles précautions prendre et pourquoi la basse mer change toute l'expérience.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Marées à Étretat",
      },
    },
    "/parking-etretat/": {
      titles: {
        fr: "Parking à Étretat : où se garer et comment éviter de perdre du temps",
      },
      descriptions: {
        fr: "Préparez votre stationnement à Étretat avec les bons réflexes : arriver tôt, viser les parkings extérieurs et garder du temps pour la plage et les falaises.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Parking à Étretat",
      },
    },
    "/falaises-etretat/": {
      titles: {
        fr: "Falaises d'Étretat : points de vue, promenade et meilleurs panoramas",
      },
      descriptions: {
        fr: "Découvrez quelles falaises voir à Étretat, où monter pour les plus belles vues et comment organiser votre promenade entre Amont, Aval et la plage.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Falaises d'Étretat",
      },
    },
    "/etretat-en-1-jour/": {
      titles: {
        fr: "Étretat en 1 jour : itinéraire, plage, falaises et conseils pratiques",
      },
      descriptions: {
        fr: "Préparez une journée à Étretat avec un itinéraire simple : parking, marées, plage, falaises et rythme de visite réaliste.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Étretat en 1 jour",
      },
    },
    "/points-photo-etretat/": {
      titles: {
        fr: "Points photo à Étretat : meilleurs spots, lumière et conseils de cadrage",
      },
      descriptions: {
        fr: "Repérez les meilleurs points photo à Étretat : falaises, plage à marée basse, lumière de fin de journée et vues panoramiques.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Points photo à Étretat",
      },
    },
    "/etretat-avec-enfants/": {
      titles: {
        fr: "Étretat avec enfants : conseils pratiques, rythme de visite et points d'attention",
      },
      descriptions: {
        fr: "Organisez une visite d'Étretat avec des enfants grâce à des conseils simples sur les galets, les marées, le parking et le rythme de promenade.",
      },
      supportedLanguages: ["fr"],
      breadcrumbLabel: {
        fr: "Étretat avec enfants",
      },
    },
  };

  const routeMetadata = pageMetadata[normalizedPath];
  const supportsCurrentLanguage = routeMetadata?.supportedLanguages?.includes(currentLanguage) ?? true;
  const metadataLanguage = supportsCurrentLanguage ? currentLanguage : DEFAULT_LANGUAGE;
  const title = routeMetadata?.titles?.[metadataLanguage] ?? "Plage d'Étretat";
  const description = routeMetadata?.descriptions?.[metadataLanguage] ?? sharedDescriptions[metadataLanguage];
  const canonicalUrl = getAbsoluteUrl(metadataLanguage, normalizedPath);
  const robots = routeMetadata && !supportsCurrentLanguage ? "noindex, follow" : undefined;
  const alternateLanguages = routeMetadata?.supportedLanguages ?? SUPPORTED_LANGUAGES.map((language) => language.code);

  const structuredData: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Plage d'Étretat Guide",
      url: `${SITE_URL}/`,
      inLanguage: currentHtmlLang,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      inLanguage: getLanguageConfig(metadataLanguage).htmlLang,
    },
  ];

  if (routeMetadata?.includeAttractionSchema) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "@id": `${SITE_URL}/#tourist-attraction`,
      name: "Plage d'Étretat",
      description: sharedDescriptions.fr,
      isAccessibleForFree: true,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Pl. Victor Hugo",
        postalCode: "76790",
        addressLocality: "Étretat",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.708333,
        longitude: 0.199257,
      },
      sameAs: [
        "https://fr.wikipedia.org/wiki/Site_d%27%C3%89tretat",
        "https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/la-plage-detretat/",
        "https://maps.app.goo.gl/sw5m78auZzjF1r61A",
      ],
    });
  }

  if (
    normalizedPath === "/que-faire-etretat/" ||
    normalizedPath === "/marees-etretat/" ||
    normalizedPath === "/parking-etretat/" ||
    normalizedPath === "/falaises-etretat/" ||
    normalizedPath === "/etretat-en-1-jour/" ||
    normalizedPath === "/points-photo-etretat/" ||
    normalizedPath === "/etretat-avec-enfants/"
  ) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Plage d'Étretat",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: routeMetadata?.breadcrumbLabel?.fr ?? "Plage d'Étretat",
          item: `${SITE_URL}${normalizedPath}`,
        },
      ],
    });
  }

  return (
    <Helmet>
      <html lang={currentHtmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {robots ? <meta name="robots" content={robots} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      {SUPPORTED_LANGUAGES.filter((language) => alternateLanguages.includes(language.code)).map((language) => (
        <link
          key={language.code}
          rel="alternate"
          hrefLang={language.hreflang}
          href={getAbsoluteUrl(language.code, normalizedPath)}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={getAbsoluteUrl(DEFAULT_LANGUAGE, normalizedPath)} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
