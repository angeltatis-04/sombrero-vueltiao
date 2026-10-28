// Información comercial que define el dueño de la tienda.
// Todo lo que quede vacío NO se muestra en la página, para no publicar datos sin confirmar.

export const PERSONALIZACION = {
  gratuita: true,
  // Qué se puede personalizar sin costo
  incluye: "nombre y apellido",
  // Opciones de tipo de ala, p. ej. ["Ala tradicional", "Ala corta"]. Vacío = no se pide.
  tiposAla: [] as string[],
  maxCaracteresNombre: 30,
};

// Obsequios que se incluyen con cada sombrero.
export const OBSEQUIOS: string[] = ["Correa de ajuste", "Pulsera", "Caja de envío"];

// Plazo de la garantía. Solo se publica en la política de cambios, no como beneficio destacado.
export const MESES_GARANTIA = 3;

// Descuentos activos: slug del producto → porcentaje. Vacío = no se muestra la sección de descuentos.
// El precio con descuento se calcula sobre el precio de la línea y se redondea a miles.
export const DESCUENTOS: Record<string, number> = {
  "vueltiao-19-azul": 10,
  "vueltiao-21-fino": 10,
  "vueltiao-23-monte": 15,
  "vueltiao-27-superfino": 10,
};

// Fotos del proceso artesanal en /public/proceso (p. ej. "/proceso/trenzado.jpg").
export const FOTOS_PROCESO: { src: string; pie: string }[] = [];
