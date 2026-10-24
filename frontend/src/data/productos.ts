// Datos de prueba. Luego vendrán del backend (NestJS + Prisma) y las fotos de Cloudinary.
// No importar directamente: usar las funciones de "@/lib/productos".

import type { Producto } from "@/types/producto";

export const productos: Producto[] = [
  {
    slug: "vueltiao-15-tradicional",
    nombre: "Vueltiao Tradicional",
    vueltas: 15,
    precio: 120000,
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
    precio: 220000,
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
    precio: 240000,
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
    precio: 150000,
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
    precio: 380000,
    precioAnterior: 420000,
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
    precio: 395000,
    descripcion:
      "Tinte natural en tonos café. Un sombrero fino con una paleta cálida y sobria.",
    origen: "Sampués, Sucre",
    acento: "#8b5e34",
    diasElaboracion: 12,
  },
  {
    slug: "vueltiao-23-extrafino",
    nombre: "Vueltiao Extrafino",
    vueltas: 23,
    precio: 650000,
    descripcion:
      "Tejido muy cerrado y liviano. Las pintas se ven nítidas y simétricas. Incluye caja de presentación.",
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
    precio: 680000,
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
    nombre: "Vueltiao Superfino",
    vueltas: 27,
    precio: 1200000,
    descripcion:
      "Pieza de colección hecha por maestros artesanos. Suave como tela, se puede enrollar sin perder su forma.",
    origen: "Tuchín, Córdoba",
    acento: "#1c1a17",
    imagen: "/sombreros/superfino-negro.webp",
    diasElaboracion: 30,
    destacado: true,
  },
];
