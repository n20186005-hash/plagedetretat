import { Link } from "wouter";
import { ArrowUpRight, MapPinned, ParkingCircle, Route } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const parkingTips = [
  "Arriver tôt reste la stratégie la plus simple pendant les beaux week-ends.",
  "Les parkings extérieurs au centre évitent souvent de perdre du temps dans les rues les plus chargées.",
  "Prévoyez une petite marche jusqu'à la plage : elle est souvent plus rentable qu'une longue recherche de place.",
  "Si vous restez jusqu'au coucher du soleil, anticipez aussi le flux de sortie.",
];

export default function ParkingEtretatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Parking à Étretat</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Parking à Étretat : où se garer sans perdre votre visite dans les embouteillages
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Le stationnement est l&apos;un des vrais points de friction d&apos;une visite à Étretat. Le plus efficace n&apos;est pas
            forcément de chercher la place la plus proche de la plage, mais de sécuriser un accès simple puis de finir
            à pied. Cette logique réduit le stress et protège le temps utile sur place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://maps.app.goo.gl/sw5m78auZzjF1r61A" target="_blank" rel="noreferrer">
                Ouvrir la zone dans Google Maps <ArrowUpRight className="ml-2 h-4 w-4" />
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
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ParkingCircle className="h-4 w-4" />
                Le bon réflexe
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Viser un parking extérieur puis marcher 10 à 15 minutes jusqu&apos;au front de mer est souvent plus efficace
                que d&apos;insister dans le centre.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <MapPinned className="h-4 w-4" />
                Quand ça se complique
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Les week-ends ensoleillés, jours fériés et fins d&apos;après-midi d&apos;été concentrent les tensions les plus fortes.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Route className="h-4 w-4" />
                Ce que ça change
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Une arrivée bien pensée vous laisse plus de marge pour les marées, les photos et les sentiers des falaises.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Conseils pratiques</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Ce qui aide vraiment le jour de la visite</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {parkingTips.map((tip) => (
                <Card key={tip} className="rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <h2 className="text-2xl font-semibold">Le bon ordre pour une journée fluide</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Commencez par résoudre le stationnement, vérifiez ensuite les marées, puis choisissez vos points de vue.
              À Étretat, ce sont souvent ces trois décisions qui font toute la différence entre une visite tendue et une
              visite agréable.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/marees-etretat/">Voir le guide marées</Link>
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
