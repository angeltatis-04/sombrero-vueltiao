import Image from "next/image";
import Antetitulo from "@/components/ui/Antetitulo";
import { SECCIONES, SITIO } from "@/config/sitio";
import { FOTOS_ARTISTAS } from "@/data/artistas";

export default function Nosotros() {
  const foto = FOTOS_ARTISTAS[6];

  return (
    <section id={SECCIONES.nosotros} className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Antetitulo>Quiénes somos</Antetitulo>
        <h2 className="mt-6 font-display text-6xl uppercase leading-[0.9] md:text-8xl lg:text-[9rem]">
          Somos <br className="hidden md:block" />
          Sombreros <span className="text-oro">Vueltiao</span>
          <sup className="text-[0.35em]">®</sup>
        </h2>
        <p className="mt-6 font-serif text-2xl italic text-negro/70 md:text-3xl">{SITIO.eslogan}</p>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="relative md:col-span-5">
            <Image
              src={foto.src}
              width={foto.ancho}
              height={foto.alto}
              alt={`Clientes luciendo sombreros de ${SITIO.marca}`}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover transition duration-700 md:grayscale md:hover:grayscale-0"
            />
            <span className="absolute -bottom-5 right-0 bg-oro px-5 py-3 font-display text-lg uppercase text-negro md:-right-6">
              Tuchín, Córdoba
            </span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-negro/75 md:col-span-7">
            <p className="text-xl text-negro md:text-2xl">
              En {SITIO.marca} convertimos una tradición colombiana en una pieza que habla de estilo, identidad y
              orgullo.
            </p>
            <p>
              Nacimos en Tuchín, Córdoba, cuna del sombrero vueltiao, con el propósito de llevar la riqueza de nuestra
              cultura a cada vez más personas, conectando la artesanía ancestral con quienes buscan algo auténtico,
              especial y diferente.
            </p>
            <blockquote className="border-l-4 border-oro py-2 pl-6 font-serif text-2xl italic leading-snug text-negro md:text-3xl">
              Un sombrero es mucho más que un accesorio: es una expresión de personalidad, una historia tejida a mano y
              un símbolo de nuestras raíces.
            </blockquote>
            <p>
              Por eso, seleccionamos cuidadosamente nuestras piezas, valorando el trabajo artesanal, los detalles y la
              esencia que hace único a cada sombrero.
            </p>
            <p>
              A través de nuestra tienda online, acercamos esta tradición a Colombia y al mundo, brindándote una
              experiencia de compra fácil, confiable y con la calidez que nos caracteriza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
