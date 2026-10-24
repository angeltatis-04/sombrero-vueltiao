import Image from "next/image";
import { BotonLink } from "@/components/ui/Boton";
import { RUTAS, SITIO } from "@/config/sitio";
import { FOTOS_ARTISTAS } from "@/data/artistas";

// Cierre de la página con el lema de la marca sobre una foto a pantalla completa.
export default function Manifiesto() {
  const foto = FOTOS_ARTISTAS[3];

  return (
    <section className="relative isolate overflow-hidden bg-negro py-32 text-hueso md:py-44">
      <Image
        src={foto.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[50%_20%] opacity-35 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-negro/40 via-negro/70 to-negro" />

      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="font-display text-6xl uppercase leading-[0.9] md:text-8xl lg:text-9xl">
          No sigas <span className="text-oro">tendencias.</span>
        </p>
        <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic text-hueso/80 md:text-4xl">
          Lleva una tradición que nunca pasa de moda.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <BotonLink href={RUTAS.catalogo} variante="oro" tamano="lg">
            Encuentra el tuyo
          </BotonLink>
          <BotonLink href={RUTAS.contacto} variante="contorno" tamano="lg">
            Contacto
          </BotonLink>
        </div>
        <p className="mt-16 text-xs font-semibold uppercase tracking-[0.4em] text-hueso/50">{SITIO.marca}</p>
      </div>
    </section>
  );
}
