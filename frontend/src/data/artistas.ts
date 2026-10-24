// Fotos de artistas y clientes con nuestros sombreros (en /public/artistas).
// Agrega `nombre` para mostrarlo como pie de foto. Agrega las nuevas al final: algunas secciones usan
// fotos por posición. Si al cuadro le falta una celda para completar la fila, se rellena con un
// enlace a la colección.

export type FotoArtista = {
  src: string;
  ancho: number;
  alto: number;
  nombre?: string;
};

export const FOTOS_ARTISTAS: FotoArtista[] = [
  { src: "/artistas/artista-1.jpg", ancho: 1130, alto: 1600 },
  { src: "/artistas/artista-2.jpg", ancho: 1200, alto: 1600 },
  { src: "/artistas/artista-3.jpg", ancho: 1066, alto: 1600 },
  { src: "/artistas/artista-4.jpg", ancho: 1200, alto: 1600 },
  { src: "/artistas/artista-5.jpg", ancho: 1200, alto: 1600 },
  { src: "/artistas/artista-6.jpg", ancho: 854, alto: 1280 },
  { src: "/artistas/artista-7.jpg", ancho: 1200, alto: 1600 },
  { src: "/artistas/artista-8.jpg", ancho: 1200, alto: 1600 },
];
