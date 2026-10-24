// Punto único de acceso al catálogo. Cuando exista el backend, solo cambia este archivo.

import { NIVELES_VUELTAS } from "@/data/catalogo";
import { productos } from "@/data/productos";
import type { Producto } from "@/types/producto";

export function getProductos() {
  return productos;
}

export function getProducto(slug: string) {
  return productos.find((p) => p.slug === slug);
}

export function getDestacados() {
  return productos.filter((p) => p.destacado);
}

// Primero los de la misma línea de vueltas, luego el resto.
export function getRelacionados(producto: Producto, limite = 4) {
  const otros = productos.filter((p) => p.slug !== producto.slug);
  const mismaLinea = otros.filter((p) => p.vueltas === producto.vueltas);
  return [...mismaLinea, ...otros.filter((p) => p.vueltas !== producto.vueltas)].slice(0, limite);
}

export function getNivelVueltas(vueltas: number) {
  return NIVELES_VUELTAS.find((n) => n.vueltas === vueltas);
}

// Normaliza para buscar sin importar mayúsculas ni tildes ("clasico" encuentra "Clásico").
const normalizar = (texto: string) => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function coincideBusqueda(producto: Producto, busqueda: string) {
  const q = normalizar(busqueda.trim());
  if (!q) return true;
  const nivel = getNivelVueltas(producto.vueltas)?.nombre ?? "";
  const texto = normalizar(`${producto.nombre} ${producto.vueltas} vueltas ${nivel} ${producto.origen} ${producto.descripcion}`);
  return q.split(/\s+/).every((palabra) => texto.includes(palabra));
}

export function porcentajeDescuento({ precio, precioAnterior }: Producto) {
  return precioAnterior ? Math.round((1 - precio / precioAnterior) * 100) : 0;
}
