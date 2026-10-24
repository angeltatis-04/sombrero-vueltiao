import type { Producto } from "./producto";

export type Personalizacion = {
  nombre?: string;
  ala?: string;
  indicaciones?: string;
};

// Lo que se guarda en el navegador: solo referencias, no datos del producto.
export type CartItem = { slug: string; talla: string; cantidad: number; personalizacion?: Personalizacion };

// Ítem del carrito ya resuelto contra el catálogo.
export type LineaCarrito = CartItem & { producto: Producto; clave: string };

export type ResumenCarrito = {
  subtotal: number;
  envio: number;
  total: number;
  faltaParaEnvioGratis: number;
};
