import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function ReviewsSection() {
  const { t } = useTranslation();
  return <section id="reviews" className="scroll-mt-24 border-y bg-card/35">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <h2 className="text-3xl font-semibold">Google Maps</h2>
      <p className="mt-3 text-sm text-muted-foreground">{t('sources.item1_desc')}</p>
      <Button asChild variant="outline" className="mt-5"><a href="https://maps.app.goo.gl/sw5m78auZzjF1r61A" target="_blank" rel="noreferrer">{t('reviews.cta_button')}<ExternalLink className="ml-2 h-4 w-4" /></a></Button>
    </div>
  </section>;
}
