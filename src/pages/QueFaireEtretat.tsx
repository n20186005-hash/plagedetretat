import { Link } from "wouter";
import { ArrowUpRight, Camera, Church, Landmark, MapPinned, Mountain, ParkingCircle, Route, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const places = [
  {
    title: "Plage d'Étretat",
    icon: Waves,
    description: "Le point de départ le plus logique pour comprendre Étretat : galets, marées, lumière et accès aux sentiers des falaises.",
  },
  {
    title: "Falaise d'Aval et l'Aiguille",
    icon: Mountain,
    description: "Le panorama le plus emblématique d'Étretat. Idéal le matin ou en fin de journée quand les reliefs ressortent mieux.",
  },
  {
    title: "Falaise d'Amont",
    icon: Camera,
    description: "Le meilleur angle pour voir toute la baie, la plage et la Porte d'Aval dans une seule vue.",
  },
  {
    title: "Chapelle Notre-Dame-de-la-Garde",
    icon: Church,
    description: "Un arrêt court mais très rentable pour le panorama sur la Manche et les hauteurs d'Étretat.",
  },
  {
    title: "Les Jardins d'Étretat",
    icon: Landmark,
    description: "Une visite complémentaire si vous voulez alterner paysage naturel et promenade plus aménagée.",
  },
  {
    title: "Clos Lupin et centre-ville",
    icon: MapPinned,
    description: "À ajouter si vous restez la journée entière ou si la météo vous pousse à mixer falaise, patrimoine et pause café.",
  },
] as const;

const itinerary = [
  "Arriver tôt et viser d'abord le front de mer pour éviter le stress du stationnement.",
  "Monter ensuite sur la falaise d'Amont pour une vue d'ensemble et de meilleures photos.",
  "Revenir vers la plage à marée basse si vous voulez observer les arches de plus près.",
  "Garder la fin de journée pour la falaise d'Aval ou le centre-ville selon la lumière et la fatigue.",
];

export default function QueFaireEtretatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Guide pratique</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Que faire à Étretat : 12 idées pour voir les falaises, la plage et les plus beaux points de vue
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Si vous préparez une journée à Étretat, le plus important est de ne pas limiter la visite à la plage.
            Le bon rythme consiste à combiner front de mer, falaises, points photo, centre-ville et horaires de marée.
            Cette page rassemble les étapes les plus utiles pour organiser une visite fluide, même sur une demi-journée.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://maps.app.goo.gl/sw5m78auZzjF1r61A" target="_blank" rel="noreferrer">
                Ouvrir Étretat dans Google Maps <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Retour au guide de la plage</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Itinéraire conseillé</div>
              <h2 className="mt-2 text-2xl font-semibold">Étretat en 1 jour sans courir</h2>
              <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
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
                <ParkingCircle className="h-4 w-4" />
                Avant de partir
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Vérifiez les marées avant toute marche au pied des falaises.</li>
                <li>Prévoyez des chaussures adaptées aux galets et aux pentes.</li>
                <li>En voiture, visez les parkings extérieurs au centre pour gagner du temps.</li>
                <li>Par beau temps, les falaises sont plus agréables tôt le matin ou avant le coucher du soleil.</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Lieux à voir</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Les étapes qui structurent vraiment une visite à Étretat</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {places.map((place) => {
                const Icon = place.icon;

                return (
                  <Card key={place.title} className="rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-accent/60 p-2">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{place.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{place.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Route className="h-4 w-4" />
                Où faire les plus belles photos
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Pour une première visite, la falaise d'Amont reste le point de vue le plus simple et le plus complet.
                Si vous cherchez l'image la plus célèbre d'Étretat, combinez la plage à marée basse avec un passage
                sur les hauteurs pour voir la Porte d'Aval et l'Aiguille sous deux angles différents.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Waves className="h-4 w-4" />
                Ce que les visiteurs sous-estiment souvent
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Les distances paraissent courtes sur la carte, mais entre les galets, les pentes, le vent et le monde,
                une visite peut vite prendre plus longtemps que prévu. Le meilleur réflexe reste d'organiser la journée
                autour des marées et du stationnement, pas seulement autour des photos.
              </p>
            </Card>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Sources utiles</div>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              Pour les informations qui évoluent, croisez toujours cette page avec les horaires de marée,
              les consignes locales de sécurité et les informations officielles de l'office de tourisme.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/etretat-en-1-jour/">Étretat en 1 jour</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/points-photo-etretat/">Points photo à Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/etretat-avec-enfants/">Étretat avec enfants</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/marees-etretat/">Guide des marées</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/parking-etretat/">Guide du parking</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/falaises-etretat/">Guide des falaises</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/la-plage-detretat/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Office de tourisme <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/map/">Voir la carte et l'accès</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
