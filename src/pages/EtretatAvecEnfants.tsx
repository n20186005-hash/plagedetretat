import { Link } from "wouter";
import { ArrowUpRight, Footprints, ShieldAlert, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const familyTips = [
  "Prévoir des chaussures stables, car les galets fatiguent plus vite les plus petits.",
  "Éviter les longues marches au pied des falaises si la marée est incertaine.",
  "Privilégier un rythme simple : plage, pause, point de vue, retour.",
  "Garder une marge de temps pour le vent, les toilettes, les pauses goûter et le retour au parking.",
] as const;

export default function EtretatAvecEnfantsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-card/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Étretat avec enfants</Badge>
            <Badge variant="secondary" className="rounded-full">Dernière vérification : 4 octobre 2026</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Que faire à Étretat avec des enfants : visite simple, points d&apos;attention et rythme réaliste
          </h1>

          <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Étretat peut très bien se visiter en famille, à condition de ne pas l&apos;aborder comme une randonnée rapide.
            Entre les galets, le vent, les marées et les montées sur les falaises, le confort des enfants dépend surtout
            du rythme choisi. Cette page sert à construire une sortie plus fluide et moins fatigante.
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
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Footprints className="h-4 w-4" />
                Ce qui fatigue le plus
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Les galets et les pentes demandent souvent plus d&apos;effort que prévu. Une visite courte et bien découpée
                marche mieux qu&apos;un programme trop ambitieux.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Waves className="h-4 w-4" />
                Ce qu&apos;il faut surveiller
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Les marées restent le premier paramètre de sécurité dès qu&apos;on s&apos;approche du pied des falaises ou des rochers.
              </p>
            </Card>

            <Card className="rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldAlert className="h-4 w-4" />
                Le bon niveau d&apos;ambition
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                En famille, mieux vaut réussir une belle boucle simple que vouloir tout faire en une seule sortie.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Conseils concrets</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Les bons réflexes pour une visite plus sereine</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {familyTips.map((tip) => (
                <Card key={tip} className="rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border bg-card/35 p-6">
            <h2 className="text-2xl font-semibold">Un programme familial qui fonctionne souvent bien</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Garez-vous sans vous presser, passez un moment sur la plage pour voir si les galets conviennent au groupe,
              choisissez ensuite un seul point de vue en hauteur, puis revenez tranquillement au village. Ce rythme reste
              souvent le plus confortable avec des enfants.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/parking-etretat/">Parking à Étretat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/marees-etretat/">Marées à Étretat</Link>
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
