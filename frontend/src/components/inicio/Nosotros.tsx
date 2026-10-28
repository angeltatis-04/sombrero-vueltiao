import Image from "next/image";
import Antetitulo from "@/components/ui/Antetitulo";
import { SECCIONES, SITIO } from "@/config/sitio";
import { FOTOS_ARTISTAS } from "@/data/artistas";

export default function Nosotros() {
  const foto = FOTOS_ARTISTAS[6];

  return (
    <section id={SECCIONES.nosotros} className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Antetitulo>Quiénes somos</Antetitulo>
        <h1 className="mt-6 font-display text-4xl uppercase leading-[1.05] md:text-5xl lg:text-6xl">
          Somos <br className="hidden md:block" />
          Sombreros <span className="font-light">Vueltiao</span>
        </h1>
        <p className="mt-6 font-serif text-xl italic text-negro/70 md:text-2xl">{SITIO.eslogan}</p>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="relative md:col-span-4">
            <Image
              src={foto.src}
              width={foto.ancho}
              height={foto.alto}
              alt={`Clientes luciendo sombreros de ${SITIO.marca}`}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-negro backdrop-blur">
              Tuchín, Córdoba
            </span>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-negro/75 md:col-span-8">
            <p className="text-lg text-negro md:text-xl">
              En {SITIO.marca} convertimos una tradición colombiana en una pieza que habla de estilo, identidad y
              orgullo.
            </p>
            <p>
              Somos un emprendimiento de Tuchín, Córdoba, cuna del sombrero vueltiao. Aquí, en el corazón del
              territorio Zenú, la caña flecha se raspa, se tiñe y se trenza a mano como se ha hecho por generaciones.
              Trabajamos de la mano con artesanos de la región para llevar esa tradición a cada vez más personas.
            </p>
            <blockquote className="border-l-4 border-oro py-2 pl-6 font-serif text-xl italic leading-snug text-negro md:text-2xl">
              Un sombrero es mucho más que un accesorio: es una expresión de personalidad, una historia tejida a mano y
              un símbolo de nuestras raíces.
            </blockquote>
            <p>
              Seleccionamos cada pieza revisando el tejido, las vueltas y los acabados. Solo vendemos sombreros
              originales tejidos en caña flecha: nada de imitaciones ni materiales sintéticos. Por ser hechos a mano,
              cada uno tiene pequeñas diferencias de tono y trenza que lo hacen único.
            </p>
            <p>
              Desde nuestra tienda en línea enviamos a toda Colombia con una compra fácil, segura y transparente: precios
              claros, garantía y atención directa por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
