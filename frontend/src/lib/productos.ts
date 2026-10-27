// Punto único de acceso al catálogo. Cuando exista el backend, solo cambia este archivo.

import { CATEGORIAS, NIVELES_VUELTAS } from "@/data/catalogo";
import { productos as productosBase } from "@/data/productos";
import { DESCUENTOS } from "@/data/tienda";
import type { Categoria, Producto, ProductoBase } from "@/types/producto";

// Precio de la línea de vueltas y, si tiene, el descuento redondeado a miles.
function conPrecio(base: ProductoBase): Producto {
  const precioLista = base.precio ?? getNivelVueltas(base.vueltas)?.precio ?? 0;
  const descuento = DESCUENTOS[base.slug] ?? 0;
  if (!descuento) return { ...base, precio: precioLista };
  const precio = Math.round((precioLista * (1 - descuento / 100)) / 1000) * 1000;
  return { ...base, precio, precioAnterior: precioLista };
}

const productos = productosBase.map(conPrecio);

export function getProductos() {
  return productos;
}

export function getEnDescuento() {
  return productos.filter((p) => p.precioAnterior);
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

export function getCategoria(vueltas: number) {
  return CATEGORIAS.find((c) => c.vueltas.includes(vueltas));
}

// Precio más bajo de las líneas de una categoría
export function precioDesde(categoria: Categoria) {
  return Math.min(...categoria.vueltas.map((v) => getNivelVueltas(v)?.precio ?? Infinity));
}

// "15 y 19 vueltas", "27, 31 y 33 vueltas"
export function textoVueltas(categoria: Categoria) {
  return `${categoria.vueltas.join(", ").replace(/, (d+)$/, " y $1")} vueltas`;
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
