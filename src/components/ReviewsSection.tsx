import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const themes = [
  {
    id: 1,
    titleKey: "reviewer1_title",
    contentKey: "reviewer1_content",
  },
  {
    id: 2,
    titleKey: "reviewer2_title",
    contentKey: "reviewer2_content",
  },
  {
    id: 3,
    titleKey: "reviewer3_title",
    contentKey: "reviewer3_content",
  },
  {
    id: 4,
    titleKey: "reviewer4_title",
    contentKey: "reviewer4_content",
  },
  {
    id: 5,
    titleKey: "reviewer5_title",
    contentKey: "reviewer5_content",
  },
];

export function ReviewsSection() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="scroll-mt-24 border-y bg-card/35">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
            {t('reviews.kicker')}
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            {t('reviews.title')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t('reviews.desc')}
          </p>
        </div>

        <div className="mb-6 px-2">
          <p className="text-xs text-muted-foreground text-center sm:text-left leading-relaxed">
            {t('reviews.disclaimer')}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className="hairline rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-base font-semibold">{t(`reviews.${theme.titleKey}`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`reviews.${theme.contentKey}`)}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="mx-auto">
            <a
              href="https://maps.app.goo.gl/sw5m78auZzjF1r61A"
              target="_blank"
              rel="noreferrer"
            >
              {t('reviews.cta_button')} <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
