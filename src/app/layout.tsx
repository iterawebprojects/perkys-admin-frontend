import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-geist-sans", // usamos la misma variable que tu globals.css
  subsets: ["latin"],
  weight: ["400", "500", "700"], // normal, semi-bold y bold
});

export const metadata: Metadata = {
  title: "Perkys Admin",
  description: "Zona de administración de Perkys",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body
        className={`${ubuntu.variable} bg-background font-sans text-foreground antialiased`}
      >
        {/* Contenedor centrado y ancho máximo para mobile-first */}
        <main className="mx-auto min-h-screen w-full max-w-[420px]">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
