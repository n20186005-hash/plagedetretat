import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

const reviewers = [
  {
    id: 1,
    nameKey: "reviewer1_name",
    titleKey: "reviewer1_title",
    contentKey: "reviewer1_content",
    dateKey: "reviewer1_date",
    rating: 5,
  },
  {
    id: 2,
    nameKey: "reviewer2_name",
    titleKey: "reviewer2_title",
    contentKey: "reviewer2_content",
    dateKey: "reviewer2_date",
    rating: 5,
  },
  {
    id: 3,
    nameKey: "reviewer3_name",
    titleKey: "reviewer3_title",
    contentKey: "reviewer3_content",
    dateKey: "reviewer3_date",
    rating: 5,
  },
  {
    id: 4,
    nameKey: "reviewer4_name",
    titleKey: "reviewer4_title",
    contentKey: "reviewer4_content",
    dateKey: "reviewer4_date",
    rating: 5,
  },
  {
    id: 5,
    nameKey: "reviewer5_name",
    titleKey: "reviewer5_title",
    contentKey: "reviewer5_content",
    dateKey: "reviewer5_date",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted"}`}
        />
      ))}
    </div>
  );
}

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
          {reviewers.map((reviewer) => (
            <Card
              key={reviewer.id}
              className="hairline rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                    {t(`reviews.${reviewer.nameKey}`).charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {t(`reviews.${reviewer.nameKey}`)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t(`reviews.${reviewer.titleKey}`)}
                    </div>
                  </div>
                </div>
                <StarRating rating={reviewer.rating} />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-4">
                {t(`reviews.${reviewer.contentKey}`)}
              </p>
              <div className="mt-3 text-xs text-muted-foreground">
                {t(`reviews.${reviewer.dateKey}`)}
              </div>
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
