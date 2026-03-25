/*
  Plage d’Étretat — Page Layout (committed)
  - Asymmetric hero: left editorial copy + right cliff photo
  - Sections: overview, photos, tips, map, sources
  - Motion: subtle rises, crisp hover shifts, no gimmicky gradients
*/

import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Compass,
  MapPinned,
  ShieldAlert,
  Waves,
  Camera,
  Footprints,
  ExternalLink,
  Clock,
  Sun,
  ParkingCircle,
  SunMoon,
  CameraIcon,
  Route,
} from "lucide-react";

import heroImg from "@/assets/photos/hero-etretat.jpg";
import g1 from "@/assets/photos/gallery-01.jpg";
import g2 from "@/assets/photos/gallery-02.jpg";
import g3 from "@/assets/photos/gallery-03.jpg";
import g4 from "@/assets/photos/gallery-04.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HomeProps {
  targetSection?: string;
}

function SectionTitle(props: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">{props.kicker}</div>
      <h2 className="text-3xl sm:text-4xl leading-[0.98]">{props.title}</h2>
      {props.desc ? <p className="max-w-2xl text-muted-foreground">{props.desc}</p> : null}
    </div>
  );
}

export default function Home({ targetSection }: HomeProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  const gallery = useMemo(
    () => [
      { src: g1, alt: "alt1" },
      { src: g2, alt: "alt2" },
      { src: g3, alt: "alt3" },
      { src: g4, alt: "alt4" },
    ],
    [],
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="grain absolute inset-0 -z-10" />

      {/* Top rail */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-baseline gap-3">
              <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                Plage d'Étretat
              </div>
              <div className="hidden sm:block text-xs tracking-[0.18em] uppercase text-muted-foreground">
                Côte d'Albâtre · Normandie
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link className="hover:opacity-70" href="/overview">
                {t('nav.overview')}
              </Link>
              <Link className="hover:opacity-70" href="/photos">
                {t('nav.photos')}
              </Link>
              <Link className="hover:opacity-70" href="/tips">
                {t('nav.tips')}
              </Link>
              <Link className="hover:opacity-70" href="/map">
                {t('nav.map')}
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <a
                  href="https://maps.app.goo.gl/sw5m78auZzjF1r61A"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild className="md:hidden" size="sm">
                <a href="#map" onClick={(e) => e.preventDefault()}>
                  <MapPinned className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    {t('hero.public_beach')}
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    {t('hero.rating')}
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    {t('hero.open_24h')}
                  </Badge>
                </div>

                <h1 className="mt-5 text-5xl sm:text-6xl leading-[0.9]">
                  {t('hero.title')}
                  <span className="block">{t('hero.title_line2')}</span>
                </h1>

                <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
                  {t('hero.description')}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/overview">{t('hero.cta_explore')}</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/photos">{t('hero.cta_photos')}</Link>
                  </Button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <Card className="hairline rounded-2xl p-4 bg-card/70">
                    <div className="flex items-center gap-2">
                      <Compass className="h-4 w-4" />
                      <div className="text-sm font-medium">{t('hero.address_label')}</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      1 Pl. Victor Hugo, 76790 Étretat, France
                    </div>
                  </Card>
                  <Card className="hairline rounded-2xl p-4 bg-card/70">
                    <div className="flex items-center gap-2">
                      <MapPinned className="h-4 w-4" />
                      <div className="text-sm font-medium">{t('hero.plus_code_label')}</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">P652+8P Étretat, France</div>
                  </Card>
                  <Card className="hairline rounded-2xl p-4 bg-card/70">
                    <div className="flex items-center gap-2">
                      <Waves className="h-4 w-4" />
                      <div className="text-sm font-medium">{t('hero.keywords_label')}</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">{t('hero.keywords_value')}</div>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[2.2rem] border bg-card shadow-[0_30px_80px_-60px_rgba(0,0,0,0.65)]">
                  <img
                    src={heroImg}
                    alt={t('hero.title')}
                    className="h-[380px] w-full object-cover sm:h-[520px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 mask-fade bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-white">
                        <div className="text-xs tracking-[0.22em] uppercase opacity-80">{t('hero.photo_label')}</div>
                        <div className="text-lg" style={{ fontFamily: "Cormorant Garamond" }}>
                          {t('hero.photo_location')}
                        </div>
                      </div>
                      <Badge className="rounded-full bg-white/90 text-black hover:bg-white/90">
                        {t('hero.photo_source')}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <SectionTitle
              kicker={t('overview.kicker')}
              title={t('overview.title')}
              desc={t('overview.desc')}
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <Card className="hairline rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                      {t('overview.cliffs_title')}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t('overview.cliffs_desc')}
                    </p>
                  </div>
                  <Camera className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                      {t('overview.pebble_title')}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t('overview.pebble_desc')}
                    </p>
                  </div>
                  <Footprints className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                      {t('overview.tides_title')}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t('overview.tides_desc')}
                    </p>
                  </div>
                  <ShieldAlert className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </div>

            <div className="mt-8 text-xs text-muted-foreground">
              {t('overview.source_info')}
            </div>
          </div>
        </section>

        {/* PHOTOS */}
        <section id="photos" className="scroll-mt-24 border-y bg-card/35">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <SectionTitle
              kicker={t('photos.kicker')}
              title={t('photos.title')}
              desc={t('photos.desc')}
            />

            <div className="mt-10">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="relative"
              >
                <CarouselContent>
                  {gallery.map((item, idx) => (
                    <CarouselItem key={item.alt} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="hairline overflow-hidden rounded-2xl">
                        <img
                          src={item.src}
                          alt={t(`photos.alt${idx + 1}`)}
                          className="h-64 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="p-4">
                          <div className="text-sm font-medium">{t(`photos.alt${idx + 1}`)}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{t('photos.source_info')}</div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2" />
                <CarouselNext className="-right-2" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* TIPS */}
        <section id="tips" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <SectionTitle
              kicker={t('tips.kicker')}
              title={t('tips.title')}
              desc={t('tips.desc')}
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <Card className="hairline rounded-2xl p-6">
                <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{t('tips.quick_plan')}</div>
                <h3 className="mt-2 text-2xl leading-tight">{t('tips.quick_plan_title')}</h3>
                <Separator className="my-5" />
                <ol className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-accent/60 grid place-items-center text-xs font-semibold">1</div>
                    <div>
                      <div className="font-medium">{t('tips.step1_title')}</div>
                      <div className="text-muted-foreground mt-1">{t('tips.step1_desc')}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-accent/60 grid place-items-center text-xs font-semibold">2</div>
                    <div>
                      <div className="font-medium">{t('tips.step2_title')}</div>
                      <div className="text-muted-foreground mt-1">{t('tips.step2_desc')}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-accent/60 grid place-items-center text-xs font-semibold">3</div>
                    <div>
                      <div className="font-medium">{t('tips.step3_title')}</div>
                      <div className="text-muted-foreground mt-1">{t('tips.step3_desc')}</div>
                    </div>
                  </li>
                </ol>
              </Card>

              <div className="grid gap-4">
                <Card className="hairline rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{t('tips.safety')}</div>
                      <h3 className="mt-2 text-2xl leading-tight">{t('tips.safety_title')}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t('tips.safety_desc').split(t('tips.safety_highlight')).map((part, i, arr) => 
                          i === arr.length - 1 ? part : <span key={i}>{part}<span className="font-medium text-foreground">{t('tips.safety_highlight')}</span></span>
                        )}
                      </p>
                    </div>
                    <ShieldAlert className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>

                <Card className="hairline rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{t('tips.small_rules')}</div>
                      <h3 className="mt-2 text-2xl leading-tight">{t('tips.rule_title')}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t('tips.rule_desc')}
                      </p>
                    </div>
                    <Waves className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section id="map" className="scroll-mt-24 border-t bg-card/35">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-6">
              <Link className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors" href="/">
                {t('map.back_to_overview')}
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{t('map.title')}</h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{t('map.desc')}</p>
            </div>

            <div className="w-full h-[500px] md:h-[600px] rounded-xl shadow-lg overflow-hidden dark:brightness-90 dark:contrast-125 transition-all mx-auto">
              <iframe
                title="Plage d'Étretat - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.1311412193795!2d0.19925661348728868!3d49.70833277134085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0174633854715%3A0x15ccbd9429fabd22!2zUGxhZ2UgZOKAmcOJdHJldGF0!5e0!3m2!1sen!2sus!4v1774005977899!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card className="hairline rounded-2xl p-6">
                <h2 className="text-2xl font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                  {t('map.tips_title')}
                </h2>
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <SunMoon className="h-5 w-5 mt-0.5 text-amber-500 shrink-0" />
                    <p className="text-sm text-muted-foreground">{t('map.golden_hour')}</p>
                  </div>
                  <div className="flex gap-3">
                    <CameraIcon className="h-5 w-5 mt-0.5 text-emerald-500 shrink-0" />
                    <p className="text-sm text-muted-foreground">{t('map.photo_spot')}</p>
                  </div>
                  <div className="flex gap-3">
                    <Route className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <p className="text-sm text-muted-foreground">{t('map.route_plan')}</p>
                  </div>
                </div>
                <div className="mt-5 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <ParkingCircle className="h-4 w-4 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">{t('map.parking_tip')}</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <Card className="hairline rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{t('map.open_hours')}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{t('map.open_hours_desc')}</p>
                </Card>
                <Card className="hairline rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5 text-amber-500" />
                    <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{t('map.best_light')}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{t('map.best_light_desc')}</p>
                </Card>
                <Button asChild className="w-full h-12 text-base font-medium bg-[#1a365d] hover:bg-[#2d4a7c] dark:bg-primary dark:hover:bg-primary/90 text-white rounded-xl shadow-md transition-all hover:shadow-lg">
                  <a
                    href="https://maps.app.goo.gl/sw5m78auZzjF1r61A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('map.cta_button')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ReviewsSection />

        {/* SOURCES */}
        <section id="sources" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <SectionTitle kicker={t('sources.kicker')} title={t('sources.title')} desc={t('sources.desc')} />

            <div className="mt-8 grid gap-4">
              <Card className="hairline rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">{t('sources.item1_title')}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t('sources.item1_desc')}</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://maps.app.goo.gl/sw5m78auZzjF1r61A"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('sources.button_open')} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">{t('sources.item2_title')}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t('sources.item2_desc')}</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.lehavre-etretat-tourisme.com/en/discover/the-essentials/discover-etretat/the-beach-of-etretat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('sources.button_open')} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">{t('sources.item3_title')}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t('sources.item3_desc')}</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://fr.wikipedia.org/wiki/Site_d%27%C3%89tretat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('sources.button_open')} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-xs text-muted-foreground mb-2 sm:mb-0">
                {t('footer.disclaimer')}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
                <span>{t('footer.contact')}</span>
                <a href="mailto:claritleonelmnicol@gmail.com" className="hover:text-foreground transition-colors">
                  claritleonelmnicol@gmail.com
                </a>
              </div>
              <div className="text-xs text-muted-foreground">
                {t('footer.copyright')}
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">{t('about.title')}</Link>
              <span>·</span>
              <Link href="/privacy" className="hover:text-foreground transition-colors">{t('privacy.title')}</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-foreground transition-colors">{t('terms.title')}</Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-foreground transition-colors">{t('cookies.title')}</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
