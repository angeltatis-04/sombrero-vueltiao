import SombreroArt from "@/components/producto/SombreroArt";
import { BotonLink } from "@/components/ui/Boton";
import { RUTAS } from "@/config/sitio";

export default function CarritoVacio() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center md:py-32">
      <SombreroArt className="w-44 opacity-70" />
      <p className="mt-8 text-sm font-medium text-oro">Tu carrito</p>
      <h1 className="mt-3 font-display text-3xl leading-tight">Aún no tienes sombreros</h1>
      <p className="mt-4 leading-relaxed text-negro/70">Explora la colección y encuentra el vueltiao que te represente.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <BotonLink href={RUTAS.catalogo} tamano="lg">
          Ver la colección
        </BotonLink>
        <BotonLink href={RUTAS.guiaVueltas} variante="secundario" tamano="lg">
          Guía de vueltas
        </BotonLink>
      </div>
    </div>
  );
}
