import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vignesh's Dimension",
  description: "Curated Portfolio of Sadhu Vignesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
