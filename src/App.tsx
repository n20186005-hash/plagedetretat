import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch, useLocation } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SEO } from "@/components/SEO";
import Home from "@/pages/Home";
import { PrivacyPage } from "@/pages/Privacy";
import { TermsPage } from "@/pages/Terms";
import { CookiesPage } from "@/pages/Cookies";
import About from "@/pages/About";

function AppRouter() {
  const [location] = useLocation();
  const { i18n } = useTranslation();

  // Extract language from URL path (e.g., /en/about -> en)
  const segments = location.split('/');
  const langPrefix = ['en', 'de', 'nl', 'zh'].includes(segments[1]) ? `/${segments[1]}` : '';

  // Sync i18n language with URL
  useEffect(() => {
    const urlLang = langPrefix.replace('/', '');
    const targetLang = urlLang === 'zh' ? 'zh-TW' : urlLang || 'fr';
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [langPrefix, i18n]);

  return (
    <Router base={langPrefix}>
      <SEO />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/cookies" component={CookiesPage} />
        <Route path="/:section?">{(params) => <Home targetSection={params.section} />}</Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
