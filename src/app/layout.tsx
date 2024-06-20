import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimeTap | Token sale landing page",
  description:
    "Most profitable crypto watch mining platform.",
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
