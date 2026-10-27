import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import BotonWhatsApp from "@/components/layout/BotonWhatsApp";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { SITIO } from "@/config/sitio";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: {
    default: SITIO.titulo,
    template: `%s | ${SITIO.nombre}`,
  },
  description: SITIO.descripcion,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
          <BotonWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
