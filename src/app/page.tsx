import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="grid min-h-screen place-items-center bg-primary/10">
      <div className="space-y-4 rounded-lg bg-card p-6 text-center text-card-foreground shadow-card">
        <h1 className="font-bold text-2xl text-primary">
          ¡Tailwind + UI Kit funcionando! 🚀
        </h1>
        <p className="text-muted-foreground">
          Si ves este texto en color gris y con fuente Ubuntu, todo está listo.
        </p>

        {/* Botones */}
        <Button variant="default" size="lg">
          Botón principal
        </Button>
        <Button variant="secondary" size="lg">
          Botón secundario
        </Button>
        <Button variant="outline" size="lg">
          Botón outline
        </Button>

        {/* Inputs */}
        <div className="space-y-2 text-left">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" placeholder="usuario@ejemplo.com" />

          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
      </div>
    </div>
  );
}
