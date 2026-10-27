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
    <section id={SECCIONES.contacto} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:py-20">
      <TituloSeccion antetitulo="Cómo comprar" as="h1">
        Fácil, rápido <br />
        <span className="text-oro">y confiable</span>
      </TituloSeccion>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {PASOS.map((p, i) => (
          <li key={p.titulo} className="aparecer rounded-2xl bg-hueso p-7">
            <span className="font-display text-4xl leading-none text-oro">0{i + 1}</span>
            <p className="mt-4 text-xl font-semibold">{p.titulo}</p>
            <p className="mt-2 leading-relaxed text-negro/70">{p.texto}</p>
          </li>
        ))}
      </ol>

      {/* Beneficios confirmados (envíos, personalización, garantía, obsequios: ver data/tienda.ts) */}
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {getBeneficios().map((b) => (
          <li key={b.titulo} className="aparecer flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-hueso text-negro">{b.icono}</span>
            <div>
              <p className="font-semibold">{b.titulo}</p>
              <p className="mt-1 text-sm leading-relaxed text-negro/75">{b.texto}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-3xl bg-hueso p-8 md:p-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Antetitulo>Contacto</Antetitulo>
            <p className="mt-3 text-2xl font-semibold md:text-3xl">Datos de la empresa</p>
          </div>
          {hayRedes && <Redes />}
        </div>
        <DatosEmpresa className="mt-10" />
      </div>
    </section>
  );
}
