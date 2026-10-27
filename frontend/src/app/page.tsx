import Coleccion from "@/components/inicio/Coleccion";
import Hero from "@/components/inicio/Hero";
import Manifiesto from "@/components/inicio/Manifiesto";
import Marquesina from "@/components/inicio/Marquesina";

type Props = { searchParams: Promise<{ vueltas?: string; categoria?: string; q?: string }> };

// El inicio va directo a comprar: banner, colección y cierre.
// Nosotros, colaboraciones, vueltas, contacto y descuentos tienen su propia página (ver RUTAS).
export default async function Home({ searchParams }: Props) {
  const { vueltas, categoria, q } = await searchParams;

  return (
    <>
      <Hero />
      <Marquesina />
      <Coleccion
        vueltasInicial={vueltas ? Number(vueltas) : undefined}
        categoriaInicial={categoria}
        busquedaInicial={q}
      />
      <Manifiesto />
    </>
  );
}
