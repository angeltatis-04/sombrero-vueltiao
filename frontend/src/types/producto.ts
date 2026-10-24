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

export type NivelVueltas = {
  vueltas: number;
  nombre: string;
  detalle: string;
};
