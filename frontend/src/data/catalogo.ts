import type { NivelVueltas } from "@/types/producto";

// Tabla de tallas de la tienda (contorno de cabeza).
export const TALLAS = [
  { talla: "XS", centimetros: "52 – 54 cm", pulgadas: "6 1/2″ – 6 3/4″" },
  { talla: "S", centimetros: "55 – 56 cm", pulgadas: "6 7/8″ – 7″" },
  { talla: "M", centimetros: "57 – 58 cm", pulgadas: "7 1/8″ – 7 1/4″" },
  { talla: "L", centimetros: "59 – 60 cm", pulgadas: "7 3/8″ – 7 1/2″" },
  { talla: "XL", centimetros: "61 – 65 cm", pulgadas: "7 5/8″ – 7 3/4″" },
];

export const NIVELES_VUELTAS: NivelVueltas[] = [
  { vueltas: 15, nombre: "Tradicional", detalle: "Trenza gruesa y resistente. Ideal para el uso diario y el trabajo al sol." },
  { vueltas: 19, nombre: "Clásico", detalle: "El más popular. Equilibrio entre finura, peso y precio." },
  { vueltas: 21, nombre: "Fino", detalle: "Trenza más delgada y flexible. Para eventos y ocasiones especiales." },
  { vueltas: 23, nombre: "Extrafino", detalle: "Tejido muy cerrado, liviano y de dibujos precisos." },
  { vueltas: 27, nombre: "Superfino", detalle: "Pieza de colección. Semanas de trabajo de un maestro artesano." },
];
