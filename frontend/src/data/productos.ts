// Datos de prueba. Luego vendrán del backend (NestJS + Prisma) y las fotos de Cloudinary.
// No importar directamente: usar las funciones de "@/lib/productos".

import type { ProductoBase } from "@/types/producto";

// El precio no va aquí: sale de la línea de vueltas (data/catalogo.ts) y el descuento de data/tienda.ts.
export const productos: ProductoBase[] = [
  {
    slug: "vueltiao-15-tradicional",
    nombre: "Vueltiao Tradicional",
    vueltas: 15,
    descripcion:
      "Tejido con caña flecha natural y tinte negro. Resistente, fresco y perfecto para el día a día en la sabana.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    imagen: "/sombreros/tradicional-negro.webp",
    diasElaboracion: 4,
  },
  {
    slug: "vueltiao-19-clasico",
    nombre: "Vueltiao Clásico",
    vueltas: 19,
    descripcion:
      "El sombrero más reconocido de Colombia. Pintas tradicionales zenú tejidas a mano trenza por trenza.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    imagen: "/sombreros/clasico-negro.webp",
    galeria: ["/sombreros/clasico-negro-2.webp"],
    diasElaboracion: 7,
    destacado: true,
  },
  {
    slug: "vueltiao-19-azul",
    nombre: "Vueltiao Azul",
    vueltas: 19,
    descripcion:
      "Versión contemporánea con hilos teñidos en azul. Mantiene la técnica tradicional con un toque de color.",
    origen: "San Andrés de Sotavento, Córdoba",
    acento: "#2f5aa8",
    imagen: "/sombreros/azul-1.webp",
    galeria: ["/sombreros/azul-2.webp"],
    diasElaboracion: 8,
    nuevo: true,
  },
  {
    slug: "vueltiao-19-junior",
    nombre: "Vueltiao Junior",
    vueltas: 19,
    descripcion: "Vueltiao en rojo, blanco y azul con el escudo del Junior tejido en la copa.",
    origen: "Tuchín, Córdoba",
    acento: "#c8102e",
    imagen: "/sombreros/junior.png",
    diasElaboracion: 7,
    nuevo: true,
  },
  {
    slug: "vueltiao-21-fino",
    nombre: "Vueltiao Fino",
    vueltas: 21,
    descripcion:
      "Trenza delgada y flexible que permite doblarlo sin dañarlo. Elegante para matrimonios, grados y ferias.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    imagen: "/sombreros/fino-negro.jpg",
    diasElaboracion: 12,
    destacado: true,
  },
  {
    slug: "vueltiao-21-tierra",
    nombre: "Vueltiao Tierra",
    vueltas: 21,
    descripcion:
      "Tinte natural en tonos café. Un sombrero fino con una paleta cálida y sobria.",
    origen: "Sampués, Sucre",
    acento: "#8b5e34",
    diasElaboracion: 12,
  },
  {
    slug: "vueltiao-23-extrafino",
    nombre: "Vueltiao Superfino",
    vueltas: 23,
    descripcion:
      "Tejido muy cerrado y liviano. Las pintas se ven nítidas y simétricas.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    imagen: "/sombreros/extrafino-negro.webp",
    diasElaboracion: 18,
    destacado: true,
  },
  {
    slug: "vueltiao-23-monte",
    nombre: "Vueltiao Monte",
    vueltas: 23,
    descripcion:
      "Extrafino con detalles en verde oscuro. Edición limitada tejida por una sola familia artesana.",
    origen: "San Antonio de Palmito, Sucre",
    acento: "#3f5b3a",
    imagen: "/sombreros/monte-verde.jpg",
    diasElaboracion: 20,
    nuevo: true,
  },
  {
    slug: "vueltiao-27-superfino",
    nombre: "Vueltiao Extrafino",
    vueltas: 27,
    descripcion:
      "Pieza de colección hecha por maestros artesanos. Suave como tela, se puede enrollar sin perder su forma. Incluye estuche.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    imagen: "/sombreros/superfino-negro.webp",
    diasElaboracion: 30,
    destacado: true,
  },
  {
    slug: "vueltiao-31-extrafino-plus",
    nombre: "Vueltiao Extrafino Plus",
    vueltas: 31,
    descripcion:
      "Trenza delgadísima y suave al tacto. Se dobla y se desdobla sin perder la forma. Incluye estuche.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    diasElaboracion: 40,
  },
  {
    slug: "vueltiao-33-coleccion",
    nombre: "Vueltiao Colección",
    vueltas: 33,
    descripcion:
      "Tejido de maestro artesano con pintas finísimas. Un regalo para toda la vida. Incluye estuche especial.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    diasElaboracion: 45,
  },
  {
    slug: "vueltiao-40-maestro",
    nombre: "Vueltiao Maestro",
    vueltas: 40,
    descripcion:
      "Pocas manos en Colombia logran este tejido. Liviano y de dibujos perfectos. Incluye estuche especial.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    diasElaboracion: 75,
  },
  {
    slug: "vueltiao-50-obra-maestra",
    nombre: "Vueltiao Obra Maestra",
    vueltas: 50,
    descripcion:
      "La máxima finura del sombrero vueltiao. Pieza única tejida durante meses por un maestro artesano. Incluye estuche especial.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    diasElaboracion: 90,
  },
];
