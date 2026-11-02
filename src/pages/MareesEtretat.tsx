import { Link } from 'wouter';
import { CoastalNotice } from '@/components/CoastalNotice';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function MareesEtretatPage() {
  return <main className="min-h-screen bg-background text-foreground">
    <CoastalNotice />
    <section className="border-b bg-card/35"><div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <Badge variant="secondary" className="max-w-full whitespace-normal text-left leading-relaxed">Vérifié le 2 novembre 2026 · Rédaction du guide indépendant</Badge>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Marées à Étretat : trouver les horaires et respecter les accès autorisés</h1>
      <p className="mt-5 max-w-3xl text-muted-foreground">La basse mer transforme le paysage, mais ne rend pas les secteurs fermés accessibles. Préparez votre visite en distinguant l’horaire de marée, les conditions de mer et la réglementation du littoral.</p>
      <div className="mt-6 flex flex-wrap gap-3"><Button asChild><a href="https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/la-plage-detretat/">Horaires publiés par l’office de tourisme</a></Button><Button asChild variant="outline"><Link href="/">Retour au guide</Link></Button></div>
    </div></section>
    <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 md:grid-cols-2">
      <Card className="p-6"><h2 className="text-2xl font-semibold">Où chercher la bonne date ?</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">La page officielle consacrée à la plage propose une publication des horaires pour Étretat. Vérifiez l’année, le jour et les indications horaires du document avant de l’utiliser. Ce guide ne reproduit pas de tableau : un horaire recopié sans son contexte peut devenir trompeur.</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Consultez également les consignes affichées à votre arrivée. Un horaire astronomique ne décrit ni la houle du jour ni les fermetures locales.</p></Card>
      <Card className="p-6"><h2 className="text-2xl font-semibold">La basse mer permet-elle le Trou à l’Homme ?</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Non. L’office de tourisme signale explicitement que la grotte et le tunnel du Trou à l’Homme sont interdits d’accès. L’arrêté municipal vise aussi les tunnels traversant les pointes des falaises. Ne planifiez pas de traversée, ni de marche sous les falaises pour rejoindre une plage voisine. Une marge d’une heure, une application ou un groupe déjà engagé ne remplacent pas une autorisation.</p></Card>
      <Card className="p-6"><h2 className="text-2xl font-semibold">Que regarder depuis la promenade ?</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Depuis les espaces ouverts, observez la place occupée par la mer, les variations de couleur et la ligne des galets. Pour des photos différentes, changez de cadrage depuis la digue plutôt que de chercher un passage au pied des arches. En cas de vagues ou de fermeture, éloignez-vous et suivez les consignes sur place.</p></Card>
      <Card className="p-6"><h2 className="text-2xl font-semibold">Adapter sa journée sans traversée</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Gardez un programme flexible : promenade, village puis point de vue autorisé si les conditions conviennent. Avec des enfants, choisissez une courte sortie et prévoyez une solution de repli dans le centre. Il n’est pas nécessaire de rejoindre les récifs pour profiter de la baie.</p><div className="mt-4 flex flex-wrap gap-4 text-sm underline"><Link href="/etretat-en-1-jour/">Une journée à Étretat</Link><Link href="/points-photo-etretat/">Préparer ses photos</Link></div></Card>
      <div className="text-sm leading-relaxed md:col-span-2"><h2 className="font-semibold">Sources et portée de ce guide</h2><p className="mt-2">Sources vérifiées le 2 novembre 2026 : <a className="underline" href="https://etretat.fr/arrete-municipal-de-promenade/">mairie, arrêté n°180/2025</a>, <a className="underline" href="https://www.lehavre-etretat-tourisme.com/decouvrir/les-incontournables/decouvrir-etretat/les-falaises-detretat/">office de tourisme, réglementation des falaises</a> et page de la plage liée ci-dessus. Les consignes locales et leurs éventuelles mises à jour priment.</p></div>
    </section>
  </main>;
}
