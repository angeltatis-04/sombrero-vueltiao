// Textos, enlaces y reglas de negocio de la tienda. Cambiar aquí, no en los componentes.

export const SITIO = {
  nombre: "Sombreros Vueltiao",
  marca: "Sombreros Vueltiao®",
  eslogan: "Tradición que marca la diferencia.",
  cierre: "No sigas tendencias. Lleva una tradición que nunca pasa de moda.",
  titulo: "Sombreros Vueltiao® | Tradición que marca la diferencia",
  descripcion:
    "Sombreros vueltiaos originales desde Tuchín, Córdoba, cuna del sombrero vueltiao. Artesanía, estilo e identidad. Envíos a toda Colombia.",
  // Ruta del logo en /public (p. ej. "/logo.png"). Si es null se muestra el nombre en texto.
  logo: null as string | null,
  // Foto del banner principal. Ideal: un sombrero vueltiao en alta calidad, horizontal (mín. 2400 px de ancho).
  fotoPortada: "/artistas/artista-1.jpg",
};

// Datos legales y de contacto de la empresa. Los campos vacíos no se muestran en la página.
export const EMPRESA = {
  razonSocial: "Sombreros Vueltiao",
  nit: "",
  telefonos: ["302 293 3064"],
  correo: "",
  direccion: "",
  ciudad: "Tuchín, Córdoba",
};

// Pega aquí la URL completa de cada red. Las que queden vacías no se muestran.
export const REDES = {
  instagram: "",
  facebook: "",
  tiktok: "",
};

export const hayRedes = Object.values(REDES).some(Boolean);

// La tienda es una página única: las secciones del inicio se enlazan con anclas.
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
  nosotros: `/#${SECCIONES.nosotros}`,
  catalogo: `/#${SECCIONES.coleccion}`,
  producto: (slug: string) => `/productos/${slug}`,
  catalogoPorVueltas: (vueltas: number) => `/?vueltas=${vueltas}#${SECCIONES.coleccion}`,
  busqueda: (q: string) => `/?q=${encodeURIComponent(q)}#${SECCIONES.coleccion}`,
  artistas: `/#${SECCIONES.artistas}`,
  guiaVueltas: `/#${SECCIONES.vueltas}`,
  proceso: `/#${SECCIONES.proceso}`,
  contacto: `/#${SECCIONES.contacto}`,
  carrito: "/carrito",
  login: "/login",
  registro: "/registro",
};

export const ENLACES_NAV = [
  { href: RUTAS.nosotros, label: "Nosotros" },
  { href: RUTAS.catalogo, label: "Colección" },
  { href: RUTAS.artistas, label: "Colaboraciones" },
  { href: RUTAS.guiaVueltas, label: "Vueltas" },
  { href: RUTAS.contacto, label: "Contacto" },
];

export const ENLACES_FOOTER = [
  { href: RUTAS.nosotros, label: "Nosotros" },
  { href: RUTAS.catalogo, label: "Colección" },
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
};

export const CARRITO_STORAGE_KEY = "sv-carrito";
