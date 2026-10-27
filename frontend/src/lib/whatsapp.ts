// Mensajes que se llenan solos al abrir WhatsApp, para que el cliente solo tenga que enviar.

import { formatoCOP } from "@/lib/format";
import type { LineaCarrito, ResumenCarrito } from "@/types/carrito";
import type { Producto } from "@/types/producto";

export function mensajeProducto(producto: Producto) {
  return `Hola, me interesa el ${producto.nombre} de ${producto.vueltas} vueltas (${formatoCOP(producto.precio)}). ¿Está disponible?`;
}

export function mensajePedido(lineas: LineaCarrito[], { envio, total }: ResumenCarrito) {
  const items = lineas.map(({ producto, talla, cantidad, personalizacion }) => {
    const extra = personalizacion?.nombre ? ` · Nombre: ${personalizacion.nombre}` : "";
    return `• ${cantidad} × ${producto.nombre} (${producto.vueltas} vueltas), talla ${talla}${extra}`;
  });
  return [
    "Hola, quiero hacer este pedido:",
    ...items,
    `Envío: ${envio === 0 ? "Gratis" : formatoCOP(envio)}`,
    `Total: ${formatoCOP(total)}`,
  ].join("\n");
}
