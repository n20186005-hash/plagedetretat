import { Link } from "wouter";
import { ArrowUpRight, Camera, Clock3, Route, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const itinerary = [
  "Arriver tôt pour régler le parking avant l'affluence.",
  "Commencer par le front de mer pour lire la lumière, le vent et les marées.",
  "Monter ensuite sur la falaise d'Amont pour la vue d'ensemble la plus rentable.",
  "Redescendre vers la plage ou le centre selon la marée et votre énergie.",
  "Finir la journée sur un point haut ou dans le village si vous restez jusqu'en fin d'après-midi.",
] as const;

export default function EtretatEn1JourPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Étretat en 1 jour</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Étretat en 1 jour : itinéraire simple pour voir la plage, les falaises et les plus beaux panoramas
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Si vous n&apos;avez qu&apos;une journée à Étretat, le plus efficace est d&apos;organiser la visite autour de trois
            contraintes très concrètes : le stationnement, les marées et les montées sur les falaises. Cette page
            vous donne un ordre de visite réaliste, sans courir ni perdre du temps dans les allers-retours.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://maps.app.goo.gl/sw5m78auZzjF1r61A" target="_blank" rel="noreferrer">
                Ouvrir Étretat dans Google Maps <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/que-faire-etretat/">Retour au guide "Que faire"</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Route className="h-4 w-4" />
                Ordre conseillé
              </div>
              <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
                {itinerary.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/60 text-xs font-semibold text-foreground">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock3 className="h-4 w-4" />
                Le bon rythme
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Une journée réussie à Étretat n&apos;est pas celle où l&apos;on coche le plus de points sur une carte, mais celle
                où l&apos;on garde assez de marge pour la lumière, les marées et les pauses. Sur un site aussi visuel, la
                précipitation fait souvent rater l&apos;essentiel.
              </p>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Waves className="h-4 w-4" />
                À ajuster selon les marées
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Si vous voulez approcher les arches depuis la plage, vérifiez d&apos;abord la basse mer et gardez du temps
                pour revenir. Si les horaires sont mauvais, basculez plutôt la visite sur les falaises et le centre-ville.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Camera className="h-4 w-4" />
                À ajuster selon la lumière
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Le matin et la fin de journée restent les moments les plus intéressants pour les photos. Si votre créneau
                est plus central dans la journée, profitez-en surtout pour la logistique, la promenade et les vues larges.
              </p>
            </Card>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <h2 className="text-2xl font-semibold">Pages à combiner avec cet itinéraire</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/marees-etretat/">Marées à Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/parking-etretat/">Parking à Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/falaises-etretat/">Falaises d&apos;Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/points-photo-etretat/">Points photo à Étretat</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
