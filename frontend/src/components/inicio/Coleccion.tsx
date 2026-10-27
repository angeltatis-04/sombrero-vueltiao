import Catalogo from "@/components/producto/Catalogo";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { SECCIONES } from "@/config/sitio";
import { getProductos } from "@/lib/productos";

type Props = { vueltasInicial?: number; categoriaInicial?: string; busquedaInicial?: string };

export default function Coleccion({ vueltasInicial, categoriaInicial, busquedaInicial }: Props) {
  return (
    // Fondo blanco, igual al de las fotos de los sombreros
    <section id={SECCIONES.coleccion} className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <TituloSeccion antetitulo="Colección">
            Elige el <span className="text-oro">tuyo</span>
          </TituloSeccion>
          <p className="max-w-sm text-negro/70">
            Cada sombrero es único: pequeñas variaciones en el tejido son la huella del trabajo a mano.
          </p>
        </div>
        <div className="mt-8">
          <Catalogo
            key={`${vueltasInicial ?? "todas"}-${categoriaInicial ?? ""}-${busquedaInicial ?? ""}`}
            productos={getProductos()}
            vueltasInicial={vueltasInicial}
            categoriaInicial={categoriaInicial}
            busquedaInicial={busquedaInicial}
          />
        </div>
      </div>
    </section>
  );
}
