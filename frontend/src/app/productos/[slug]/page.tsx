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
    // Fondo blanco, igual al de las fotos de los sombreros
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 md:pt-10">
        <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-negro/65 md:mb-10">
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

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="mx-auto w-full max-w-lg lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <GaleriaProducto producto={producto} />
              <div className="absolute left-4 top-4 flex gap-1.5">
                {producto.nuevo && (
                  <span className="rounded-full bg-white/80 text-negro ring-1 ring-negro/5 backdrop-blur-md px-3 py-1 text-xs font-medium">Nuevo</span>
                )}
                {descuento > 0 && (
                  <span className="rounded-full bg-oferta px-3 py-1 text-xs font-bold text-white">
                    −{descuento}%
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full bg-hueso px-3 py-1 text-xs font-medium text-negro/70">
              {producto.vueltas} vueltas{nivel && ` · ${nivel.nombre}`}
            </span>
            <h1 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{producto.nombre}</h1>
            <p className="mt-2 text-sm text-negro/70">Hecho a mano en {producto.origen}</p>

            <Precio precio={producto.precio} precioAnterior={producto.precioAnterior} tamano="lg" className="mt-6" />
            {nivel?.incluye && (
              <p className="mt-2 text-sm font-medium text-oro">Incluye {nivel.incluye.toLowerCase()}</p>
            )}

            <p className="mt-6 text-base leading-relaxed text-grafito">{producto.descripcion}</p>
            {nivel && <p className="mt-3 text-sm leading-relaxed text-negro/70">{nivel.detalle}</p>}

            <div className="mt-8 border-t border-negro/10 pt-8">
              {/* key: al pasar a otro sombrero el formulario empieza de cero */}
              <AgregarAlCarrito key={producto.slug} slug={producto.slug} />
            </div>

            <ul className="mt-10 divide-y divide-negro/10 rounded-2xl border border-negro/10 px-5">
              {getBeneficios().map((b) => (
                <li key={b.titulo} className="flex items-center gap-4 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-hueso text-negro">{b.icono}</span>
                  <div>
                    <p className="text-sm font-semibold">{b.titulo}</p>
                    <p className="text-sm text-negro/70">{b.texto}</p>
                  </div>
                </li>
              ))}
            </ul>

            <details className="group mt-6" open>
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold">
                Ficha técnica
                <span className="text-lg transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <dl className="mt-3 text-sm">
                {ficha.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-negro/10 py-3">
                    <dt className="text-negro/70">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>
        </div>

        <section className="mt-20">
          <TituloSeccion antetitulo="Sigue explorando">
            También te <span className="text-oro">puede gustar</span>
          </TituloSeccion>
          <GrillaProductos productos={getRelacionados(producto)} className="mt-10" />
        </section>
      </div>
    </div>
  );
}
