import type { Metadata } from "next";
import { Anton, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { SITIO } from "@/config/sitio";
import { CartProvider } from "@/context/CartContext";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: SITIO.titulo,
    template: `%s | ${SITIO.nombre}`,
  },
  description: SITIO.descripcion,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
