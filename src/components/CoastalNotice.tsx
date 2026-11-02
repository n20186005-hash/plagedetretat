import { useTranslation } from 'react-i18next';

export function CoastalNotice() {
  const { t } = useTranslation();
  return (
    <aside className="mx-auto my-6 max-w-5xl rounded-2xl border border-amber-700/40 bg-card px-5 py-5 text-sm leading-relaxed">
      <h2 className="font-semibold">{t('coastal.title')}</h2>
      <p className="mt-2">{t('coastal.body')}</p>
      <p className="mt-2 text-muted-foreground">{t('coastal.advice')}</p>
      <p className="mt-3 text-xs"><a className="underline" href="https://etretat.fr/arrete-municipal-de-promenade/">{t('coastal.source')}</a> · <a className="underline" href="https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/les-falaises-detretat/">{t('sources.item2_title')}</a> · {t('coastal.checked')}</p>
    </aside>
  );
}
