// Información comercial que define el dueño de la tienda.
// Todo lo que quede vacío NO se muestra en la página, para no publicar datos sin confirmar.

export const PERSONALIZACION = {
  gratuita: true,
  // Opciones de tipo de ala, p. ej. ["Ala tradicional", "Ala corta"]. Vacío = no se pide.
  tiposAla: [] as string[],
  maxCaracteresNombre: 30,
};

// Obsequios que se incluyen con cada sombrero, p. ej. ["Caja de presentación", "Bolsa de tela"].
export const OBSEQUIOS: string[] = [];

// Texto de la garantía, p. ej. "Garantía de 30 días por defectos de elaboración".
export const GARANTIA: string | null = null;

// Fotos del proceso artesanal en /public/proceso (p. ej. "/proceso/trenzado.jpg").
export const FOTOS_PROCESO: { src: string; pie: string }[] = [];
