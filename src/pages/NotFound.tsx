import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-3xl px-4 py-20">
        <Card className="w-full rounded-2xl p-8 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">404</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page non trouvée</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            L'URL demandée n'existe pas ou n'est pas encore disponible dans cette langue.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
