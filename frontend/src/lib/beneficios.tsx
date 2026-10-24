import type { ReactNode } from "react";
import { IconoCamion, IconoEscudo, IconoMano, IconoPluma, IconoRegalo } from "@/components/ui/Iconos";
import { ENVIO } from "@/config/sitio";
import { GARANTIA, OBSEQUIOS, PERSONALIZACION } from "@/data/tienda";
import { formatoCOP } from "@/lib/format";

export type Beneficio = { icono: ReactNode; titulo: string; texto: string };

// Beneficios que se muestran en el inicio y en la ficha de producto.
// Solo incluye los que están confirmados en config/sitio.ts y data/tienda.ts.
export function getBeneficios(): Beneficio[] {
  const lista: (Beneficio | false)[] = [
    { icono: <IconoMano />, titulo: "Hecho a mano", texto: "Tejido en caña flecha por artesanos de Tuchín, Córdoba." },
    PERSONALIZACION.gratuita && {
      icono: <IconoPluma />,
      titulo: "Personalización gratuita",
      texto: "Agrega tu nombre e indicaciones al momento de comprar.",
    },
    {
      icono: <IconoCamion />,
      titulo: "Envíos a toda Colombia",
      texto: `Envío gratis en compras desde ${formatoCOP(ENVIO.gratisDesde)}.`,
    },
    GARANTIA !== null && { icono: <IconoEscudo />, titulo: "Garantía", texto: GARANTIA },
    OBSEQUIOS.length > 0 && { icono: <IconoRegalo />, titulo: "Obsequios incluidos", texto: OBSEQUIOS.join(" · ") },
  ];
  return lista.filter((b): b is Beneficio => Boolean(b));
}
