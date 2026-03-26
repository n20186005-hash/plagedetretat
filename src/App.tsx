import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SEO } from "@/components/SEO";
import Home from "@/pages/Home";
import { PrivacyPage } from "@/pages/Privacy";
import { TermsPage } from "@/pages/Terms";
import { CookiesPage } from "@/pages/Cookies";
import About from "@/pages/About";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
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
