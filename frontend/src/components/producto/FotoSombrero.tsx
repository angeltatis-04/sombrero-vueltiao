import Image from "next/image";
import SombreroArt from "./SombreroArt";
import type { Producto } from "@/types/producto";

type Props = {
  producto: Producto;
  sizes?: string;
  className?: string;
};

// Foto del sombrero sobre fondo blanco. Mientras no haya foto se muestra la ilustración.
export default function FotoSombrero({ producto, sizes = "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw", className = "" }: Props) {
  return (
    <div className={`relative aspect-square overflow-hidden bg-white ${className}`}>
      {producto.imagen ? (
        <Image src={producto.imagen} alt={producto.nombre} fill sizes={sizes} className="object-contain" />
      ) : (
        <SombreroArt acento={producto.acento} className="absolute inset-0 m-auto w-4/5" />
      )}
    </div>
  );
}
