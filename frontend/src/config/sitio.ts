// Textos, enlaces y reglas de negocio de la tienda. Cambiar aquí, no en los componentes.

import { DESCUENTOS } from "@/data/tienda";

export const SITIO = {
  nombre: "Sombreros Vueltiao",
  marca: "Sombreros Vueltiao",
  eslogan: "Tradición que marca la diferencia.",
  cierre: "No sigas tendencias. Lleva una tradición que nunca pasa de moda.",
  titulo: "Sombreros Vueltiao | Tradición que marca la diferencia",
  descripcion:
    "Sombreros vueltiaos originales desde Tuchín, Córdoba, cuna del sombrero vueltiao. Artesanía, estilo e identidad. Envíos a toda Colombia.",
  // Ruta del logo en /public (p. ej. "/logo.png"). Si es null se muestra el nombre en texto.
  logo: null as string | null,
  // Fotos del banner principal; se van turnando. Ideal: alta calidad, horizontales (mín. 2400 px de ancho).
  fotosPortada: [
    "/artistas/artista-1.jpg",
    "/artistas/artista-2.jpg",
    "/artistas/artista-3.jpg",
    "/artistas/artista-4.jpg",
    "/artistas/artista-5.jpg",
    "/artistas/artista-6.jpg",
    "/artistas/artista-7.jpg",
    "/artistas/artista-8.jpg",
  ],
  // Segundos que dura cada foto del banner
  segundosPorFoto: 5,
};

// Datos legales y de contacto de la empresa. Los campos vacíos no se muestran en la página.
export const EMPRESA = {
  razonSocial: "Sombreros Vueltiao",
  nit: "1193559492-2",
  telefonos: ["302 293 3064"],
  correo: "",
  direccion: "",
  ciudad: "Tuchín, Córdoba",
};

// Pega aquí la URL completa de cada red. Las que queden vacías no se muestran.
export const REDES = {
  instagram: "https://www.instagram.com/purosombrerovueltia0",
  facebook: "",
  tiktok: "",
};

// WhatsApp de ventas: número con indicativo de país, sin espacios ni "+". Vacío = no se muestra.
export const WHATSAPP = {
  numero: "573022933064",
  mensaje: "Hola, quiero información sobre sus productos.",
};

export const enlaceWhatsApp = (mensaje = WHATSAPP.mensaje) =>
  `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensaje)}`;

export const hayRedes = Boolean(WHATSAPP.numero) || Object.values(REDES).some(Boolean);

// Ids de las secciones, para enlazar con anclas (#).
export const SECCIONES = {
  nosotros: "nosotros",
  coleccion: "coleccion",
  artistas: "colaboraciones",
  vueltas: "vueltas",
  proceso: "proceso",
  contacto: "contacto",
};

export const RUTAS = {
  inicio: "/",
  nosotros: "/nosotros",
  catalogo: `/#${SECCIONES.coleccion}`,
  descuentos: "/descuentos",
  producto: (slug: string) => `/productos/${slug}`,
  catalogoPorVueltas: (vueltas: number) => `/?vueltas=${vueltas}#${SECCIONES.coleccion}`,
  catalogoPorCategoria: (id: string) => `/?categoria=${id}#${SECCIONES.coleccion}`,
  busqueda: (q: string) => `/?q=${encodeURIComponent(q)}#${SECCIONES.coleccion}`,
  artistas: "/colaboraciones",
  guiaVueltas: "/vueltas",
  proceso: `/nosotros#${SECCIONES.proceso}`,
  contacto: "/contacto",
  carrito: "/carrito",
  politica: (slug: string) => `/politicas/${slug}`,
  login: "/login",
  registro: "/registro",
};

const hayDescuentos = Object.keys(DESCUENTOS).length > 0;

// La colección está en el inicio; las demás son páginas aparte
export const ENLACES_NAV = [
  ...(hayDescuentos ? [{ href: RUTAS.descuentos, label: "Descuentos" }] : []),
  { href: RUTAS.catalogo, label: "Colección" },
  { href: RUTAS.nosotros, label: "Nosotros" },
  { href: RUTAS.guiaVueltas, label: "Vueltas" },
  { href: RUTAS.contacto, label: "Contacto" },
];

export const ENLACES_FOOTER = [
  ...(hayDescuentos ? [{ href: RUTAS.descuentos, label: "Descuentos" }] : []),
  { href: RUTAS.catalogo, label: "Colección" },
  { href: RUTAS.nosotros, label: "Nosotros" },
  { href: RUTAS.artistas, label: "Colaboraciones" },
  { href: RUTAS.guiaVueltas, label: "Guía de vueltas" },
  { href: RUTAS.carrito, label: "Carrito" },
];

export const ENLACES_CUENTA = [
  { href: RUTAS.login, label: "Iniciar sesión" },
  { href: RUTAS.registro, label: "Crear cuenta" },
  { href: RUTAS.carrito, label: "Carrito" },
];

export const ENVIO = {
  gratisDesde: 300000,
  costo: 15000,
  // Plazos en días hábiles que se publican en la política de envíos. Confirmar con la transportadora.
  diasPreparacion: "1 a 3",
  diasPreparacionPersonalizado: "3 a 5",
  diasEntregaCiudades: "2 a 5",
  diasEntregaMunicipios: "4 a 8",
};

export const CARRITO_STORAGE_KEY = "sv-carrito";
