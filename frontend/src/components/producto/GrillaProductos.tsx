import ProductCard from "./ProductCard";
import type { Producto } from "@/types/producto";

export default function GrillaProductos({ productos, className = "" }: { productos: Producto[]; className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 ${className}`}>
      {productos.map((p) => (
        <ProductCard key={p.slug} producto={p} />
      ))}
    </div>
  );
}
