export type Producto = {
  slug: string;
  nombre: string;
  vueltas: number;
  precio: number;
  precioAnterior?: number;
  descripcion: string;
  origen: string;
  acento: string; // color del tinte en la ilustración
  imagen?: string; // foto principal con fondo blanco en /public/sombreros; si falta se usa la ilustración
  galeria?: string[]; // fotos adicionales para la ficha del producto
  diasElaboracion: number;
  destacado?: boolean;
  nuevo?: boolean;
};

// Producto tal como se escribe en data/productos.ts: el precio sale de la línea de vueltas
// (data/catalogo.ts) y el descuento de data/tienda.ts. `precio` solo si ese sombrero cuesta distinto.
export type ProductoBase = Omit<Producto, "precio" | "precioAnterior"> & { precio?: number };

export type NivelVueltas = {
  vueltas: number;
  nombre: string;
  detalle: string;
  precio: number;
  incluye?: string; // p. ej. "Estuche"
};

export type Categoria = {
  id: string;
  nombre: string;
  descripcion: string;
  vueltas: number[];
};
