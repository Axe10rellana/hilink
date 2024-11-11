//next
import type { Metadata } from "next";

//styles
import "./globals.css";

//componets
import { Footer, Navbar } from "../components";

export const metadata: Metadata = {
  title: "Hilink",
  description: "Código base de la Interfaz Hilink Hecha en Next, React.js y Tailwind CSS.",
  themeColor: "#ffffff",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      url: "/favicon.ico",
    },
    {
      rel: "favicon",
      type: "image/x-icon",
      sizes: "16x16",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="relative overflow-hidden select-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
