import { ENVIO } from "@/config/sitio";
import { getProducto } from "@/lib/productos";
import type { CartItem, LineaCarrito, Personalizacion, ResumenCarrito } from "@/types/carrito";

// Identifica una línea del carrito: mismo sombrero, talla y personalización.
export function claveItem({ slug, talla, personalizacion }: Pick<CartItem, "slug" | "talla" | "personalizacion">) {
  const p = personalizacion ?? {};
  return [slug, talla, p.nombre ?? "", p.ala ?? "", p.indicaciones ?? ""].join("|");
}

// Quita espacios y campos vacíos; devuelve undefined si no hay nada que personalizar.
export function limpiarPersonalizacion(p: Personalizacion): Personalizacion | undefined {
  const limpia = Object.fromEntries(
    Object.entries(p)
      .map(([k, v]) => [k, v?.trim()])
      .filter(([, v]) => v),
  ) as Personalizacion;
  return Object.keys(limpia).length ? limpia : undefined;
}

// Descarta ítems cuyo producto ya no exista en el catálogo.
export function resolverLineas(items: CartItem[]): LineaCarrito[] {
  return items.flatMap((item) => {
    const producto = getProducto(item.slug);
    return producto ? [{ ...item, producto, clave: claveItem(item) }] : [];
  });
}

export function calcularResumen(lineas: LineaCarrito[]): ResumenCarrito {
  const subtotal = lineas.reduce((s, l) => s + l.producto.precio * l.cantidad, 0);
  const envio = subtotal >= ENVIO.gratisDesde ? 0 : ENVIO.costo;
  return {
    subtotal,
    envio,
    total: subtotal + envio,
    faltaParaEnvioGratis: Math.max(0, ENVIO.gratisDesde - subtotal),
  };
}
