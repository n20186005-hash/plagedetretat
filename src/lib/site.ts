export const SITE_URL = "https://www.plagedetretat.com";

export const SUPPORTED_LANGUAGES = [
  { code: "fr", label: "Français", prefix: "", hreflang: "fr-FR", htmlLang: "fr" },
  { code: "en", label: "English", prefix: "/en", hreflang: "en", htmlLang: "en" },
  { code: "de", label: "Deutsch", prefix: "/de", hreflang: "de-DE", htmlLang: "de" },
  { code: "nl", label: "Nederlands", prefix: "/nl", hreflang: "nl-NL", htmlLang: "nl" },
  { code: "it", label: "Italiano", prefix: "/it", hreflang: "it-IT", htmlLang: "it" },
  { code: "es", label: "Español", prefix: "/es", hreflang: "es-ES", htmlLang: "es" },
  { code: "zh-TW", label: "繁體中文", prefix: "/zh", hreflang: "zh-TW", htmlLang: "zh-Hant" },
] as const;

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: SupportedLanguageCode = "fr";

export const LANGUAGE_PREFIXES = SUPPORTED_LANGUAGES
  .filter((language) => language.prefix)
  .map((language) => language.prefix.slice(1));

export function normalizePath(pathname: string) {
  const cleanPath = pathname.split("?")[0].split("#")[0] || "/";

  if (cleanPath === "/") {
    return "/";
  }

  return cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
}

export function getLanguageConfig(languageCode: string) {
  return (
    SUPPORTED_LANGUAGES.find((language) => language.code === languageCode) ??
    SUPPORTED_LANGUAGES.find((language) => language.code === DEFAULT_LANGUAGE)!
  );
}

export function buildLocalizedPath(languageCode: string, pathname: string) {
  const normalizedPath = normalizePath(pathname);
  const { prefix } = getLanguageConfig(languageCode);

  if (!prefix) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `${prefix}/` : `${prefix}${normalizedPath}`;
}

export function getAbsoluteUrl(languageCode: string, pathname: string) {
  return `${SITE_URL}${buildLocalizedPath(languageCode, pathname)}`;
}
