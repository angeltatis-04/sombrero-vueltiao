import Catalogo from "@/components/producto/Catalogo";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { SECCIONES } from "@/config/sitio";
import { getProductos } from "@/lib/productos";

type Props = { vueltasInicial?: number; busquedaInicial?: string };

export default function Coleccion({ vueltasInicial, busquedaInicial }: Props) {
  return (
    <section id={SECCIONES.coleccion} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <TituloSeccion antetitulo="Colección">
          Elige el <span className="text-oro">tuyo</span>
        </TituloSeccion>
        <p className="max-w-sm text-negro/70">
          Cada sombrero es único: pequeñas variaciones en el tejido son la huella del trabajo a mano.
        </p>
      </div>
      <div className="mt-14">
        <Catalogo
          key={`${vueltasInicial ?? "todas"}-${busquedaInicial ?? ""}`}
          productos={getProductos()}
          vueltasInicial={vueltasInicial}
          busquedaInicial={busquedaInicial}
        />
      </div>
    </section>
  );
}
