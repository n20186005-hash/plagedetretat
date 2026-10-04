import { Link } from "wouter";
import { ArrowUpRight, Camera, Mountain, Sun, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const photoSpots = [
  {
    title: "Falaise d'Amont",
    description: "Le meilleur point pour cadrer la baie, la plage et la Porte d'Aval dans une seule image lisible.",
    timing: "Matin clair ou fin de journée",
    icon: Mountain,
  },
  {
    title: "Plage à marée basse",
    description: "Utile pour photographier les arches de plus près, à condition de respecter le timing des marées.",
    timing: "Fenêtre de basse mer",
    icon: Waves,
  },
  {
    title: "Lumière de fin d'après-midi",
    description: "Les reliefs des falaises sont souvent plus doux et plus intéressants quand la lumière baisse.",
    timing: "Dernières heures avant le coucher du soleil",
    icon: Sun,
  },
] as const;

export default function PointsPhotoEtretatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Points photo à Étretat</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Les meilleurs points photo à Étretat : où se placer, quand y aller et quoi cadrer
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            À Étretat, toutes les belles vues ne donnent pas forcément de bonnes photos. Cette page sert à distinguer
            les endroits qui fonctionnent vraiment selon votre objectif : grande vue d&apos;ensemble, arches vues de près,
            lumière douce, marée basse ou coucher de soleil.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://maps.app.goo.gl/sw5m78auZzjF1r61A" target="_blank" rel="noreferrer">
                Repérer les lieux dans Google Maps <ArrowUpRight className="ml-2 h-4 w-4" />
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
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Spots recommandés</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Les points qui donnent vraiment de bonnes images</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {photoSpots.map((spot) => {
              const Icon = spot.icon;

              return (
                <Card key={spot.title} className="rounded-2xl p-6">
                  <div className="rounded-full bg-accent/60 p-2 w-fit">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{spot.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{spot.description}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{spot.timing}</div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Camera className="h-4 w-4" />
                Ce qui change le plus le résultat
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Plus que le matériel, ce sont souvent trois choses qui changent tout à Étretat : la marée, la hauteur du
                point de vue et l&apos;orientation de la lumière. Une image techniquement propre mais prise au mauvais moment
                paraîtra souvent plus plate qu&apos;une photo simple prise au bon créneau.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Waves className="h-4 w-4" />
                Le piège le plus courant
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Beaucoup de visiteurs veulent descendre trop tard sur la plage pour gagner un angle plus bas. Si la marée
                remonte ou si le temps manque, mieux vaut sécuriser un point haut que forcer un spot risqué.
              </p>
            </Card>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <h2 className="text-2xl font-semibold">Pages utiles pour préparer une sortie photo</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/marees-etretat/">Marées à Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/falaises-etretat/">Falaises d&apos;Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/etretat-en-1-jour/">Étretat en 1 jour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
