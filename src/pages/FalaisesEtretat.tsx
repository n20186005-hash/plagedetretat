import { Link } from "wouter";
import { ArrowUpRight, Camera, Church, Mountain, Route } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const viewpoints = [
  {
    title: "Falaise d'Amont",
    description: "Le point de vue le plus simple pour embrasser toute la plage, la baie et la Porte d'Aval d'un seul regard.",
    icon: Camera,
  },
  {
    title: "Falaise d'Aval",
    description: "Le secteur à privilégier si vous voulez vous rapprocher de l'image la plus emblématique d'Étretat.",
    icon: Mountain,
  },
  {
    title: "Chapelle Notre-Dame-de-la-Garde",
    description: "Une halte courte, mais très rentable pour la vue et l'orientation générale du site.",
    icon: Church,
  },
] as const;

export default function FalaisesEtretatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Falaises d&apos;Étretat</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Falaises d&apos;Étretat : où monter, quoi voir et quels points de vue valent vraiment l&apos;effort
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Les falaises sont la vraie structure visuelle d&apos;Étretat. Elles transforment une simple promenade en visite
            panoramique, et elles répondent à plusieurs intentions différentes : photo, marche courte, grand paysage,
            coucher de soleil ou lecture globale du site.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href="https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/la-plage-detretat/"
                target="_blank"
                rel="noreferrer"
              >
                Voir les infos tourisme <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Retour au guide principal</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Route className="h-4 w-4" />
                Choisir le bon côté
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Si vous ne devez faire qu&apos;une seule montée, la falaise d&apos;Amont est souvent la plus facile à rentabiliser
                pour une première visite. Si vous connaissez déjà Étretat ou cherchez un point photo plus iconique,
                la falaise d&apos;Aval devient très intéressante.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="text-sm font-medium">Ce que change la hauteur</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Depuis le haut, vous comprenez mieux la géographie du lieu : la courbe de la baie, le contraste entre
                galets et mer, la position de la Porte d&apos;Aval et la logique des sentiers. C&apos;est aussi depuis ces hauteurs
                que les photos deviennent les plus lisibles, surtout tôt le matin ou en lumière rasante.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Points de vue</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Les falaises qui donnent le plus de valeur à la visite</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {viewpoints.map((viewpoint) => {
                const Icon = viewpoint.icon;

                return (
                  <Card key={viewpoint.title} className="rounded-2xl p-6">
                    <div className="rounded-full bg-accent/60 p-2 w-fit">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{viewpoint.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{viewpoint.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <h2 className="text-2xl font-semibold">Avant de monter</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Vérifiez le vent, la lumière et votre marge de temps. Si vous combinez falaises, plage et centre-ville,
              commencez généralement par les hauteurs ou terminez-y la journée pour profiter d&apos;une lumière plus douce.
              Et si vous voulez descendre ensuite sur l&apos;estran, regardez les marées avant de bouger.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/marees-etretat/">Voir le guide marées</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/que-faire-etretat/">Voir l&apos;itinéraire complet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
