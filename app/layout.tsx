import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import favicon from "./favicon.ico";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Parense de Manos",
  description: "El evento de boxeo del año. Ingresá y votá por tus favoritos!",
  authors: { name: "AtlanticLabs", url: "atlanticlabs.com.ar" },
  icons: favicon.src,
  keywords: [
    "Parense de manos",
    "Parense de manos 2",
    "PDM",
    "PDM2",
    "Paren la mano",
    "Boxeo",
    "Evento",
    "Pelea",
    "Maravilla",
    "Coscu",
    "Luquitas",
    "Rober",
    "Galati",
    "Emilio",
    "Flor Vigna",
    "Federikita",
    "Turco",
    "Ruso",
    "Casero",
    "Naza",
    "Lorente",
    "Casa de Papel",
    "Luken",
    "Manuela",
    "Martinez",
    "Marti",
    "Benza",
    "Tomas",
    "Tomi",
    "Mazza",
    "Migliore",
    "Mike",
    "Maquina del Mal",
    "Momo",
    "Robleis",
    "Will",
    "Futbolitos",
    "Yeyo",
    "de Gregorio",
    "Zeko",
  ],
};

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "200",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={baiJamjuree.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
