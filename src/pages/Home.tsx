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
      { src: g1, alt: "Porte d’Aval 与退潮时的礁滩" },
      { src: g2, alt: "鹅卵石海滩与白垩悬崖" },
      { src: g3, alt: "黄昏光线下的海岸线" },
      { src: g4, alt: "近景视角：拱门与海面" },
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
              <LanguageSwitcher />
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <a
                  href="https://maps.app.goo.gl/cWvY5GHW8PGgS7M8A"
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
                    公开海滩
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    评分 4.7/5（Google）
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    24 小时开放
                  </Badge>
                </div>

                <h1 className="mt-5 text-5xl sm:text-6xl leading-[0.9]">
                  白垩悬崖下的
                  <span className="block">鹅卵石海岸线</span>
                </h1>

                <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
                  Plage d’Étretat 位于法国诺曼底 Côte d’Albâtre（雪花石海岸），以白垩悬崖、天然拱门（“门”）与
                  “针状岩”闻名。晴天像明信片，阴天像电影——但无论哪种天气，都请把潮汐当作“第一条规则”。
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/overview">开始了解</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/photos">看照片</Link>
                  </Button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <Card className="hairline rounded-2xl p-4 bg-card/70">
                    <div className="flex items-center gap-2">
                      <Compass className="h-4 w-4" />
                      <div className="text-sm font-medium">地址</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      1 Pl. Victor Hugo, 76790 Étretat, France
                    </div>
                  </Card>
                  <Card className="hairline rounded-2xl p-4 bg-card/70">
                    <div className="flex items-center gap-2">
                      <MapPinned className="h-4 w-4" />
                      <div className="text-sm font-medium">Plus Code</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">P652+8P Étretat, France</div>
                  </Card>
                  <Card className="hairline rounded-2xl p-4 bg-card/70">
                    <div className="flex items-center gap-2">
                      <Waves className="h-4 w-4" />
                      <div className="text-sm font-medium">关键词</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">悬崖 / 拱门 / 潮汐 / 摄影</div>
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
                    alt="Plage d’Étretat 海滩与白垩悬崖"
                    className="h-[380px] w-full object-cover sm:h-[520px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 mask-fade bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-white">
                        <div className="text-xs tracking-[0.22em] uppercase opacity-80">Photo</div>
                        <div className="text-lg" style={{ fontFamily: "Cormorant Garamond" }}>
                          Alabaster Coast / Étretat
                        </div>
                      </div>
                      <Badge className="rounded-full bg-white/90 text-foreground hover:bg-white/90">
                        Unsplash
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
              kicker="overview"
              title="你在这里会看到什么"
              desc="从鹅卵石的“噼啪声”到三座天然拱门（“门”），Étretat 的海岸把地质与文学、绘画、海风一起打包。"
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <Card className="hairline rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                      悬崖与“门”
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      白垩悬崖被海水侵蚀形成天然拱门；最知名的方向通常被称作 Porte d’Aval / Porte d’Amont。
                    </p>
                  </div>
                  <Camera className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                      鹅卵石海滩
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      海滩由鹅卵石构成，步行更费力；也因此更适合“慢下来”，听浪、看光影、拍纹理。
                    </p>
                  </div>
                  <Footprints className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                      潮汐与安全
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      低潮时可探索礁滩与洞穴区域；但涨潮可能让你被“夹”在两段悬崖之间——务必提前查潮汐。
                    </p>
                  </div>
                  <ShieldAlert className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </div>

            <div className="mt-8 text-xs text-muted-foreground">
              信息摘自公开来源（诺曼底旅游局/地方旅游局与维基百科），并结合 Google Maps 页面基础信息。
            </div>
          </div>
        </section>

        {/* PHOTOS */}
        <section id="photos" className="scroll-mt-24 border-y bg-card/35">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <SectionTitle
              kicker="photos"
              title="照片画廊"
              desc="参考 Port of Honfleur 的节奏：少而精的图片，配清晰的标题与导航。"
            />

            <div className="mt-10">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="relative"
              >
                <CarouselContent>
                  {gallery.map((item) => (
                    <CarouselItem key={item.alt} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="hairline overflow-hidden rounded-2xl">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="h-64 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="p-4">
                          <div className="text-sm font-medium">{item.alt}</div>
                          <div className="mt-1 text-xs text-muted-foreground">Photo · Unsplash</div>
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
              kicker="visiting tips"
              title="怎么逛更舒服"
              desc="把行程拆成 3 段：海滩 → 观景点 → 回到小镇。核心是‘看潮汐、留余量’。"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <Card className="hairline rounded-2xl p-6">
                <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Quick plan</div>
                <h3 className="mt-2 text-2xl leading-tight">半日路线（不赶）</h3>
                <Separator className="my-5" />
                <ol className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-accent/60 grid place-items-center text-xs font-semibold">1</div>
                    <div>
                      <div className="font-medium">先到海滩边‘找节奏’</div>
                      <div className="text-muted-foreground mt-1">走到视野开阔处，观察浪线、风向与人流。</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-accent/60 grid place-items-center text-xs font-semibold">2</div>
                    <div>
                      <div className="font-medium">低潮时再探索礁滩</div>
                      <div className="text-muted-foreground mt-1">如果你计划靠近拱门/礁滩，必须提前核对潮汐时间。</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-accent/60 grid place-items-center text-xs font-semibold">3</div>
                    <div>
                      <div className="font-medium">上到悬崖步道看‘全景’</div>
                      <div className="text-muted-foreground mt-1">从高处看海岸线弧度和光影变化，黄昏尤其漂亮。</div>
                    </div>
                  </li>
                </ol>
              </Card>

              <div className="grid gap-4">
                <Card className="hairline rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Safety</div>
                      <h3 className="mt-2 text-2xl leading-tight">潮汐提醒</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        当你沿着海滩向拱门方向走，涨潮可能封住回程路径。最稳妥的做法：
                        <span className="font-medium text-foreground">只在低潮窗口进入</span>，并预留至少 1 小时回撤时间。
                      </p>
                    </div>
                    <ShieldAlert className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>

                <Card className="hairline rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Small rules</div>
                      <h3 className="mt-2 text-2xl leading-tight">不要带走鹅卵石</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        鹅卵石是海岸的天然“减震层”，能降低风暴潮对堤岸的冲击。多地规定禁止采集，建议只“打水漂”，不带走。
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

            <div className="w-full h-[500px] md:h-[600px] rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="Port of Honfleur - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300.37837020835275!2d0.2327356724879831!3d49.420009907273084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e033bbbc1fa09f%3A0xb3180f46d65c5a9a!2sPort%20of%20Honfleur!5e0!3m2!1sen!2sus!4v1774000008561!5m2!1sen!2sus"
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
                <Button asChild className="w-full h-12 text-base font-medium bg-[#1a365d] hover:bg-[#2d4a7c] text-white rounded-xl shadow-md transition-all hover:shadow-lg">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Port+of+Honfleur,France"
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
            <SectionTitle kicker="sources" title="数据与引用" desc="为了保持信息可信，我们只引用可公开访问的页面。" />

            <div className="mt-8 grid gap-4">
              <Card className="hairline rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">Google Maps（地点基础信息）</div>
                    <div className="mt-1 text-xs text-muted-foreground">评分、地址、开放时间等（可能随时间变化）</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://maps.app.goo.gl/cWvY5GHW8PGgS7M8A"
                      target="_blank"
                      rel="noreferrer"
                    >
                      打开 <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">Le Havre Étretat Normandie Tourisme</div>
                    <div className="mt-1 text-xs text-muted-foreground">关于海滩历史、鹅卵石保护与活动建议</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.lehavre-etretat-tourisme.com/en/discover/the-essentials/discover-etretat/the-beach-of-etretat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      打开 <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="hairline rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">Wikipedia：Site d’Étretat</div>
                    <div className="mt-1 text-xs text-muted-foreground">地貌结构与“门/针”的背景信息</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://fr.wikipedia.org/wiki/Site_d%27%C3%89tretat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      打开 <ExternalLink className="ml-2 h-4 w-4" />
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
              <Link href="/privacy" className="hover:text-foreground transition-colors">{t('nav.overview')}</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
