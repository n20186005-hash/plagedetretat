import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Cormorant Garamond" }}>Plage d'Étretat</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-4xl font-semibold mb-6 tracking-tight">{t('about.title')}</h2>
        <p className="text-sm text-muted-foreground mb-8">{t('footer.disclaimer')}</p>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>{t('about.content1')}</p>
          <p>{t('about.content2')}</p>
          <p>{t('about.content3')}</p>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">{t('privacy.title')}</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">{t('terms.title')}</Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-foreground transition-colors">{t('cookies.title')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
