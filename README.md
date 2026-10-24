# Sombrero Vueltiao

Tienda en línea de sombreros vueltiaos.

| Capa | Tecnología |
| --- | --- |
| Frontend | Next.js + TypeScript + Tailwind CSS (`/frontend`) |
| Backend | NestJS + TypeScript (`/backend`, pendiente) |
| ORM / BD | Prisma + PostgreSQL |
| Imágenes | Cloudinary |
| Pagos | Wompi |
| Autenticación | JWT + bcrypt |
| Servidor | Railway |

## Correr el frontend

Requisitos: Node.js 20 o superior.

```bash
cd frontend
npm install
npm run dev
```

Abre http://localhost:3000

## Páginas

- `/` Página única: hero, colección con filtros, artistas, historia, guía de vueltas y contacto
- `/productos` Redirige a la sección Colección del inicio
- `/productos/[slug]` Detalle con selector de talla y cantidad
- `/carrito` Carrito (se guarda en el navegador)
- `/login` y `/registro` Formularios (aún sin conectar al backend)

Los productos son datos de prueba en `frontend/src/data/productos.ts`.

## Estructura del frontend

```
frontend/src/
├── app/            Rutas de Next.js. Solo arman la página con componentes.
├── components/
│   ├── ui/         Piezas genéricas reutilizables (Boton, Campo, SelectorCantidad, Iconos...)
│   ├── layout/     Navbar y Footer
│   ├── producto/   Tarjeta, grilla, precio, catálogo, ilustración, agregar al carrito
│   ├── carrito/    Ítems, resumen del pedido y carrito vacío
│   ├── inicio/     Secciones de la página de inicio
│   └── auth/       Tarjeta de login / registro
├── config/sitio.ts Nombre, rutas, enlaces del menú y reglas de envío
├── context/        Estado global (carrito en localStorage)
├── data/           Datos de prueba (productos, tallas, niveles de vueltas)
├── lib/            Lógica: acceso a productos, cálculos del carrito, formato de moneda
└── types/          Tipos compartidos
```

Guía rápida para cambios:

- **Conectar el backend:** reemplazar las funciones de `lib/productos.ts`; el resto de la app no importa `data/` directamente.
- **Cambiar costo de envío, rutas o enlaces del menú:** `config/sitio.ts`.
- **Agregar una sección al inicio:** crear el componente en `components/inicio/` y añadirlo en `app/page.tsx`.
- **Estilos de botones:** variantes en `components/ui/Boton.tsx`.

## Fotos

- **Artistas:** van en `frontend/public/artistas/` y se listan en `src/data/artistas.ts`. Para mostrar el nombre del artista en la foto, agrega `nombre: "..."`.
- **Sombreros:** guarda la foto (fondo blanco, cuadrada, unos 1200×1200) en `frontend/public/sombreros/` y agrégale al producto en `src/data/productos.ts` la línea `imagen: "/sombreros/nombre-archivo.jpg"`. Si un producto no tiene foto, se muestra la ilustración.
- **Datos de la empresa (NIT, teléfonos, correo, dirección):** se llenan en `EMPRESA`, dentro de `src/config/sitio.ts`. Los campos vacíos no se muestran.
- **Redes sociales:** en `REDES`, en el mismo archivo.

## Información comercial pendiente

En `frontend/src/data/tienda.ts` se configuran los datos que solo el dueño puede confirmar. Lo que esté vacío **no aparece** en la página:

- `OBSEQUIOS`: obsequios incluidos con cada sombrero.
- `GARANTIA`: texto de la garantía.
- `PERSONALIZACION.tiposAla`: opciones de tipo de ala (si se llena, aparece en la ficha del producto).
- `FOTOS_PROCESO`: fotos del proceso artesanal (en `public/proceso/`).

La foto del banner principal se cambia en `SITIO.fotoPortada` (`src/config/sitio.ts`).
