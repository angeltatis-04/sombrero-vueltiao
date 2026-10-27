import Image from "next/image";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { SECCIONES } from "@/config/sitio";
import { FOTOS_PROCESO } from "@/data/tienda";

const PASOS = [
  { paso: "Corte", texto: "Se cortan las hojas de caña flecha y se separa la fibra de la vena central." },
  { paso: "Raspado y secado", texto: "La fibra se raspa y se seca al sol para lograr su color natural." },
  { paso: "Tinte natural", texto: "Parte de la fibra se ennegrece con barro y plantas de la región." },
  { paso: "Trenzado", texto: "Se tejen trenzas que combinan fibra clara y oscura formando las pintas." },
  { paso: "Cosido", texto: "Las trenzas se cosen en espiral, vuelta por vuelta, hasta formar el sombrero." },
];

export default function Proceso() {
  return (
    <section id={SECCIONES.proceso} className="scroll-mt-20 bg-hueso py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-14 md:grid-cols-2">
          <TituloSeccion
            antetitulo="El proceso"
            descripcion="El sombrero vueltiao nace del pueblo zenú, en las sabanas de Córdoba y Sucre. En 2004 fue declarado Símbolo Cultural de la Nación. Cada pinta tejida en su superficie tiene un significado y se transmite de generación en generación."
          >
            Una historia <br />
            <span className="text-oro">tejida a mano</span>
          </TituloSeccion>
          <ol className="space-y-3">
            {PASOS.map((p, i) => (
              <li key={p.paso} className="aparecer flex gap-5 rounded-2xl bg-white p-5">
                <span className="font-display text-3xl leading-none text-oro">0{i + 1}</span>
                <div>
                  <p className="text-lg font-semibold">{p.paso}</p>
                  <p className="mt-1 leading-relaxed text-negro/70">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Se muestra cuando haya fotos reales del proceso en data/tienda.ts */}
        {FOTOS_PROCESO.length > 0 && (
          <div className="-mx-4 mt-16 flex snap-x gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:px-0">
            {FOTOS_PROCESO.map((f) => (
              <figure key={f.src} className="w-64 shrink-0 snap-start md:w-auto">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src={f.src} alt={f.pie} fill sizes="(min-width: 768px) 25vw, 16rem" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-negro/70">{f.pie}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
