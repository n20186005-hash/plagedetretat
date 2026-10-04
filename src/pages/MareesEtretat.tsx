import { Link } from "wouter";
import { ArrowUpRight, Clock3, ShieldAlert, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tideRules = [
  "Consultez l'horaire officiel des marées avant de descendre au pied des falaises.",
  "Évitez d'entrer tard dans la fenêtre de marée basse : gardez toujours du temps pour revenir.",
  "Après pluie, vent fort ou mer agitée, soyez encore plus prudent près des rochers.",
  "Si vous hésitez, restez sur les points de vue en hauteur plutôt que sur l'estran.",
];

export default function MareesEtretatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Marées à Étretat</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Marées à Étretat : quand y aller et pourquoi c&apos;est la première info à vérifier
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            À Étretat, les marées changent complètement l&apos;expérience de visite. Elles déterminent ce que vous pouvez
            voir depuis la plage, si l&apos;accès aux récifs est raisonnable et surtout si votre retour restera sûr.
            Pour beaucoup de visiteurs, c&apos;est l&apos;information la plus importante de la journée.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href="https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/la-plage-detretat/"
                target="_blank"
                rel="noreferrer"
              >
                Vérifier les infos locales <ArrowUpRight className="ml-2 h-4 w-4" />
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
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock3 className="h-4 w-4" />
                Comment lire la bonne fenêtre
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                La meilleure logique consiste à regarder d&apos;abord l&apos;heure de basse mer, puis à garder une marge confortable
                avant la remontée de l&apos;eau. Si vous voulez simplement profiter du paysage, les hauteurs d&apos;Amont et d&apos;Aval
                restent intéressantes à toute heure. En revanche, toute marche prolongée au pied des falaises demande une vraie
                discipline sur le timing.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldAlert className="h-4 w-4" />
                Règle simple
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Ne prévoyez jamais de rester jusqu&apos;à la toute fin de la basse mer. Le bon réflexe est d&apos;anticiper le retour,
                pas de maximiser la présence sur l&apos;estran.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">À retenir</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Les 4 réflexes utiles avant d&apos;aller sur la plage</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {tideRules.map((rule) => (
                <Card key={rule} className="rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/60 p-2">
                      <Waves className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">{rule}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <h2 className="text-2xl font-semibold">Quand cette page est la plus utile</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Cette page répond surtout aux visiteurs qui cherchent un repère pratique avant de partir : heure de passage,
              marée basse, accès aux arches, sécurité et marge de retour. Pour l&apos;itinéraire complet, combinez-la avec nos
              pages sur le parking et les falaises.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/parking-etretat/">Voir le guide parking</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/falaises-etretat/">Voir le guide falaises</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
