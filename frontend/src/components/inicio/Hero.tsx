import type { CSSProperties } from "react";
import Image from "next/image";
import Antetitulo from "@/components/ui/Antetitulo";
import { BotonLink } from "@/components/ui/Boton";
import { EMPRESA, RUTAS, SITIO } from "@/config/sitio";

const retraso = (ms: number) => ({ "--retraso": `${ms}ms` }) as CSSProperties;

// Banner minimalista: una sola foto del sombrero y el lema a la izquierda, sobre la zona oscura de la foto.
export default function Hero() {
  return (
    <section className="relative isolate -mt-16 flex min-h-[78svh] items-end overflow-hidden bg-negro text-white md:-mt-20 md:min-h-[92svh] md:items-center">
      <Image
        src={SITIO.fotoPortada}
        alt={`Sombrero vueltiao tejido a mano en caña flecha, de ${SITIO.marca}`}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-10 object-cover object-[70%_50%] md:object-[60%_50%]"
      />
      {/* En celular oscurece de abajo hacia arriba; en escritorio, de izquierda a derecha, donde va el texto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro/90 via-negro/45 to-negro/10 md:bg-gradient-to-r md:from-negro/90 md:via-negro/50 md:to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:px-8 md:pb-0">
        <div className="max-w-xl">
          <div className="entrada">
            <Antetitulo tono="arena">{EMPRESA.ciudad} · Cuna del sombrero vueltiao</Antetitulo>
          </div>
          <h1 className="entrada mt-6 font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl" style={retraso(150)}>
            Tradición que marca <br />
            <span className="font-light">la diferencia.</span>
          </h1>
          <p className="entrada mt-6 max-w-md text-base text-white/75 md:text-lg" style={retraso(300)}>
            Sombreros vueltiaos originales, tejidos a mano en caña flecha.
          </p>
          <div className="entrada mt-9 flex flex-wrap gap-3" style={retraso(450)}>
            <BotonLink href={RUTAS.catalogo} variante="claro" tamano="lg">
              Ver la colección
            </BotonLink>
            <BotonLink href={RUTAS.nosotros} variante="contorno" tamano="lg">
              Conócenos
            </BotonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
