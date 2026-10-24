import Artistas from "@/components/inicio/Artistas";
import Coleccion from "@/components/inicio/Coleccion";
import Contacto from "@/components/inicio/Contacto";
import Diferencias from "@/components/inicio/Diferencias";
import GuiaVueltas from "@/components/inicio/GuiaVueltas";
import Hero from "@/components/inicio/Hero";
import Manifiesto from "@/components/inicio/Manifiesto";
import Marquesina from "@/components/inicio/Marquesina";
import Nosotros from "@/components/inicio/Nosotros";
import Proceso from "@/components/inicio/Proceso";

type Props = { searchParams: Promise<{ vueltas?: string; q?: string }> };

// Página única: todas las secciones de la tienda en orden. El menú salta a cada una por su ancla.
export default async function Home({ searchParams }: Props) {
  const { vueltas, q } = await searchParams;

  return (
    <>
      <Hero />
      <Marquesina />
      <Nosotros />
      <Diferencias />
      <Coleccion vueltasInicial={vueltas ? Number(vueltas) : undefined} busquedaInicial={q} />
      <Artistas />
      <GuiaVueltas />
      <Proceso />
      <Manifiesto />
      <Contacto />
    </>
  );
}
