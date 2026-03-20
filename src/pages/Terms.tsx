import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export function TermsPage() {
  const { t } = useTranslation();

  const sections = [
    { titleKey: "terms.section1_title", contentKey: "terms.section1_content" },
    { titleKey: "terms.section2_title", contentKey: "terms.section2_content" },
    { titleKey: "terms.section3_title", contentKey: "terms.section3_content" },
    { titleKey: "terms.section4_title", contentKey: "terms.section4_content" },
    { titleKey: "terms.section5_title", contentKey: "terms.section5_content" },
    { titleKey: "terms.section6_title", contentKey: "terms.section6_content" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }} href="/">
              Plage d'Étretat
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/">
              ← {t('map.back_to_overview')}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{t('terms.title')}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t('terms.last_updated')}</p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="hairline rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">{t(section.titleKey)}</h2>
              <p className="text-muted-foreground leading-relaxed">{t(section.contentKey)}</p>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>{t('footer.contact')} <a href="mailto:claritleonelmnicol@gmail.com" className="hover:text-foreground">claritleonelmnicol@gmail.com</a></p>
            <p className="mt-1">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
