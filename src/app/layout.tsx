import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cryptix | Conectando el Futuro de las Finanzas Digitales",
  description:
    "Descubre un nuevo mundo de posibilidades financieras con Cryptix. Únete a miles de usuarios que ya están experimentando la libertad financiera en el mundo digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body className={popinsFont.className}>{children}</body>
    </html>
  );
}
