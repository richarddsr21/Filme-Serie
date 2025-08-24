import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filmes e Séries",
  description: "Filmes e Séries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="dark bg-background">{children}</body>
    </html>
  );
}
