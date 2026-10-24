import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AgregarAlCarrito from "@/components/producto/AgregarAlCarrito";
import GaleriaProducto from "@/components/producto/GaleriaProducto";
import GrillaProductos from "@/components/producto/GrillaProductos";
import Precio from "@/components/producto/Precio";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { RUTAS } from "@/config/sitio";
import { getBeneficios } from "@/lib/beneficios";
import { getNivelVueltas, getProducto, getProductos, getRelacionados, porcentajeDescuento } from "@/lib/productos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProductos().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProducto(slug);
  return {
    title: producto ? `${producto.nombre} ${producto.vueltas} vueltas` : "Producto no encontrado",
    description: producto?.descripcion,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) notFound();

  const nivel = getNivelVueltas(producto.vueltas);
  const descuento = porcentajeDescuento(producto);
  const ficha = [
    ["Línea", `${producto.vueltas} vueltas${nivel ? ` · ${nivel.nombre}` : ""}`],
    ["Material", "Caña flecha"],
    ["Técnica", "Trenzado a mano"],
    ["Elaboración", `${producto.diasElaboracion} días aprox.`],
    ["Origen", producto.origen],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 md:pt-10">
      <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-negro/55 md:mb-10">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={RUTAS.inicio} className="hover:text-negro">Inicio</Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={RUTAS.catalogo} className="hover:text-negro">Colección</Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-negro" aria-current="page">{producto.nombre}</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative">
            <GaleriaProducto producto={producto} />
            <div className="absolute left-4 top-4 flex gap-1.5">
              {producto.nuevo && (
                <span className="bg-negro px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-hueso">Nuevo</span>
              )}
              {descuento > 0 && (
                <span className="bg-rojo px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  −{descuento}%
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block bg-negro px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-hueso">
            {producto.vueltas} vueltas{nivel && ` · ${nivel.nombre}`}
          </span>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] md:text-6xl">{producto.nombre}</h1>
          <p className="mt-2 text-sm text-negro/60">Hecho a mano en {producto.origen}</p>

          <Precio precio={producto.precio} precioAnterior={producto.precioAnterior} tamano="lg" className="mt-6" />

          <p className="mt-6 text-[17px] leading-relaxed text-grafito">{producto.descripcion}</p>
          {nivel && <p className="mt-3 text-sm leading-relaxed text-negro/60">{nivel.detalle}</p>}

          <div className="mt-8 border-t border-negro/10 pt-8">
            <AgregarAlCarrito slug={producto.slug} />
          </div>

          <ul className="mt-10 divide-y divide-negro/10 border-y border-negro/10">
            {getBeneficios().map((b) => (
              <li key={b.titulo} className="flex items-center gap-4 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-negro text-oro">{b.icono}</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.1em]">{b.titulo}</p>
                  <p className="text-sm text-negro/60">{b.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <details className="group mt-6" open>
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-xs font-semibold uppercase tracking-[0.15em]">
              Ficha técnica
              <span className="text-lg transition-transform group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <dl className="mt-3 text-sm">
              {ficha.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-negro/10 py-3">
                  <dt className="text-negro/60">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </details>
        </div>
      </div>

      <section className="mt-28">
        <TituloSeccion antetitulo="Sigue explorando">
          También te <span className="text-oro">puede gustar</span>
        </TituloSeccion>
        <GrillaProductos productos={getRelacionados(producto)} className="mt-12" />
      </section>
    </div>
  );
}
