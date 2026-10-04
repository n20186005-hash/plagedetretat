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
import QueFaireEtretatPage from "@/pages/QueFaireEtretat";
import NotFoundPage from "@/pages/NotFound";
import MareesEtretatPage from "@/pages/MareesEtretat";
import ParkingEtretatPage from "@/pages/ParkingEtretat";
import FalaisesEtretatPage from "@/pages/FalaisesEtretat";
import EtretatEn1JourPage from "@/pages/EtretatEn1Jour";
import PointsPhotoEtretatPage from "@/pages/PointsPhotoEtretat";
import EtretatAvecEnfantsPage from "@/pages/EtretatAvecEnfants";
import { LANGUAGE_PREFIXES } from "@/lib/site";

function AppRouter() {
  const [location] = useLocation();
  const { i18n } = useTranslation();

  // Extract language from URL path (e.g., /en/about -> en)
  const segments = location.split('/');
  const langPrefix = LANGUAGE_PREFIXES.includes(segments[1]) ? `/${segments[1]}` : '';

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
        <Route path="/">
          <Home />
        </Route>
        <Route path="/overview/">{() => <Home targetSection="overview" />}</Route>
        <Route path="/photos/">{() => <Home targetSection="photos" />}</Route>
        <Route path="/tips/">{() => <Home targetSection="tips" />}</Route>
        <Route path="/map/">{() => <Home targetSection="map" />}</Route>
        <Route path="/sources/">{() => <Home targetSection="sources" />}</Route>
        <Route path="/reviews/">{() => <Home targetSection="reviews" />}</Route>
        <Route path="/about/" component={About} />
        <Route path="/privacy/" component={PrivacyPage} />
        <Route path="/terms/" component={TermsPage} />
        <Route path="/cookies/" component={CookiesPage} />
        <Route path="/que-faire-etretat/">
          {() => (i18n.language === "fr" ? <QueFaireEtretatPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/marees-etretat/">
          {() => (i18n.language === "fr" ? <MareesEtretatPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/parking-etretat/">
          {() => (i18n.language === "fr" ? <ParkingEtretatPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/falaises-etretat/">
          {() => (i18n.language === "fr" ? <FalaisesEtretatPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/etretat-en-1-jour/">
          {() => (i18n.language === "fr" ? <EtretatEn1JourPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/points-photo-etretat/">
          {() => (i18n.language === "fr" ? <PointsPhotoEtretatPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/etretat-avec-enfants/">
          {() => (i18n.language === "fr" ? <EtretatAvecEnfantsPage /> : <NotFoundPage />)}
        </Route>
        <Route path="/:rest*">
          <NotFoundPage />
        </Route>
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
