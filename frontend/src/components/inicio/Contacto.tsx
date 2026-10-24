import Antetitulo from "@/components/ui/Antetitulo";
import DatosEmpresa from "@/components/ui/DatosEmpresa";
import Redes from "@/components/ui/Redes";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { SECCIONES, hayRedes } from "@/config/sitio";
import { getBeneficios } from "@/lib/beneficios";

const PASOS = [
  { titulo: "Elige", texto: "Mira la colección y escoge el sombrero que te represente." },
  { titulo: "Personaliza", texto: "Selecciona tu talla y, si quieres, agrega tu nombre e indicaciones." },
  { titulo: "Recíbelo", texto: "Lo enviamos desde Tuchín a cualquier ciudad de Colombia." },
];

export default function Contacto() {
  return (
    <section id={SECCIONES.contacto} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:py-32">
      <TituloSeccion antetitulo="Cómo comprar">
        Fácil, rápido <br />
        <span className="text-oro">y confiable</span>
      </TituloSeccion>

      <ol className="mt-14 grid gap-px bg-negro/15 md:grid-cols-3">
        {PASOS.map((p, i) => (
          <li key={p.titulo} className="bg-hueso p-8 md:first:pl-0">
            <span className="font-display text-6xl leading-none text-oro">0{i + 1}</span>
            <p className="mt-4 font-display text-3xl uppercase">{p.titulo}</p>
            <p className="mt-2 leading-relaxed text-negro/70">{p.texto}</p>
          </li>
        ))}
      </ol>

      {/* Beneficios confirmados (envíos, personalización, garantía, obsequios: ver data/tienda.ts) */}
      <ul className="mt-14 grid gap-8 border-y border-negro/15 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {getBeneficios().map((b) => (
          <li key={b.titulo} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center bg-negro text-oro">{b.icono}</span>
            <div>
              <p className="font-display text-xl uppercase">{b.titulo}</p>
              <p className="mt-1 text-sm leading-relaxed text-negro/65">{b.texto}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14 bg-negro p-8 text-hueso md:p-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Antetitulo>Contacto</Antetitulo>
            <p className="mt-4 font-display text-4xl uppercase md:text-5xl">Datos de la empresa</p>
          </div>
          {hayRedes && <Redes />}
        </div>
        <DatosEmpresa className="mt-10" />
      </div>
    </section>
  );
}
