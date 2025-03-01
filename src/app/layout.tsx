import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vignesh's Dimension",
  description:
    "Explore the portfolio of Vignesh Sadhu, a Full Stack Developer skilled in MERN stack, React, Next.js, Java, and modern web technologies. Showcasing innovative projects, real-world applications, and problem-solving expertise. Let's build something amazing!",
  icons: {
    icon:"/logo.svg"
  }
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
