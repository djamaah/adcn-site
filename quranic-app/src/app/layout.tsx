import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CinematicIntro from "@/components/CinematicIntro";

export const metadata: Metadata = {
  title: "Stand d'Écoute Coranique — CIO Portes Ouvertes 2026",
  description:
    "Découvrez la beauté du Coran à travers une expérience d'écoute immersive. Journée Portes Ouvertes du Centre Islamique de l'Outaouais — 13 juin 2026.",
  keywords: ["Coran", "Islam", "Quran", "CIO", "Outaouais", "Portes Ouvertes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0f0e] antialiased">
        <LanguageProvider>
          <CinematicIntro />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
