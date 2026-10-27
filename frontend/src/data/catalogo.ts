import type { Categoria, NivelVueltas } from "@/types/producto";

// Tabla de tallas de la tienda (contorno de cabeza).
export const TALLAS = [
  { talla: "XS", centimetros: "52 – 54 cm", pulgadas: "6 1/2″ – 6 3/4″" },
  { talla: "S", centimetros: "55 – 56 cm", pulgadas: "6 7/8″ – 7″" },
  { talla: "M", centimetros: "57 – 58 cm", pulgadas: "7 1/8″ – 7 1/4″" },
  { talla: "L", centimetros: "59 – 60 cm", pulgadas: "7 3/8″ – 7 1/2″" },
  { talla: "XL", centimetros: "61 – 65 cm", pulgadas: "7 5/8″ – 7 3/4″" },
];

// Líneas de vueltas (fibras) con su precio oficial. Cambiar un precio aquí lo cambia en toda la tienda.
export const NIVELES_VUELTAS: NivelVueltas[] = [
  { vueltas: 15, nombre: "Tradicional", precio: 145000, detalle: "Trenza gruesa y resistente. Ideal para el uso diario y el trabajo al sol." },
  { vueltas: 19, nombre: "Clásico", precio: 195000, detalle: "El más popular. Equilibrio entre finura, peso y precio." },
  { vueltas: 21, nombre: "Fino", precio: 255000, detalle: "Trenza más delgada y flexible. Para eventos y ocasiones especiales." },
  { vueltas: 23, nombre: "Superfino", precio: 285000, detalle: "Tejido cerrado, liviano y de dibujos precisos." },
  { vueltas: 27, nombre: "Extrafino", precio: 465000, incluye: "Estuche", detalle: "Primer nivel extrafino. Suave, liviano y de pintas muy nítidas." },
  { vueltas: 31, nombre: "Extrafino Plus", precio: 610000, incluye: "Estuche", detalle: "Trenza delgadísima que se siente como tela. Pieza para lucir." },
  { vueltas: 33, nombre: "Colección", precio: 899000, incluye: "Estuche especial", detalle: "Semanas de trabajo de un maestro artesano. Para regalar o coleccionar." },
  { vueltas: 40, nombre: "Maestro", precio: 3500000, incluye: "Estuche especial", detalle: "Muy pocos artesanos lo tejen. Meses de trabajo en una sola pieza." },
  { vueltas: 50, nombre: "Obra maestra", precio: 4000000, incluye: "Estuche especial", detalle: "La máxima finura del sombrero vueltiao. Pieza única de colección." },
];

// Categorías del catálogo: agrupan las líneas de vueltas para que el cliente elija rápido.
export const CATEGORIAS: Categoria[] = [
  { id: "clasicos", nombre: "Clásicos", descripcion: "Para el día a día", vueltas: [15, 19] },
  { id: "finos", nombre: "Finos", descripcion: "Para eventos y ocasiones especiales", vueltas: [21, 23] },
  { id: "extrafinos", nombre: "Extrafinos", descripcion: "Incluyen estuche", vueltas: [27, 31, 33] },
  { id: "coleccion", nombre: "Colección", descripcion: "Piezas únicas con estuche especial", vueltas: [40, 50] },
];
