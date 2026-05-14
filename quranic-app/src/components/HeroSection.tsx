"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, ChevronDown, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ArabicPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.03]"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="geo"
        x="0"
        y="0"
        width="80"
        height="80"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M40 0 L80 20 L80 60 L40 80 L0 60 L0 20 Z"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
        />
        <circle cx="40" cy="40" r="15" fill="none" stroke="#10b981" strokeWidth="0.5" />
        <path d="M40 25 L55 40 L40 55 L25 40 Z" fill="none" stroke="#10b981" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geo)" />
  </svg>
);

export default function HeroSection() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f0e]">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a14] via-[#0a0f0e] to-[#0d1117]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-yellow-900/10 rounded-full blur-[100px]" />
        <ArabicPattern />
      </div>

      {/* Floating particles */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-emerald-400"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-yellow-400"
      />
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-emerald-500/50"
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-emerald-900/40 border border-emerald-700/50 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-300 text-sm font-medium">
            {t(
              "Journée Portes Ouvertes · 13 Juin 2026",
              "Open House Day · June 13, 2026"
            )}
          </span>
        </motion.div>

        {/* Arabic Bismillah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl text-yellow-400/80 mb-8 leading-relaxed font-arabic"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {lang === "fr" ? (
            <>
              Découvrez la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                beauté
              </span>{" "}
              du Coran
            </>
          ) : (
            <>
              Discover the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                beauty
              </span>{" "}
              of the Quran
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t(
            "Une expérience d'écoute immersive pour découvrir les versets du Coran dans une ambiance sereine et accueillante.",
            "An immersive listening experience to discover the verses of the Quran in a serene and welcoming atmosphere."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/videos">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(16,185,129,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-900/40"
            >
              <Headphones className="w-6 h-6 group-hover:animate-pulse" />
              {t("Commencer l'écoute", "Start Listening")}
            </motion.button>
          </Link>
          <motion.a
            href="#concept"
            whileHover={{ scale: 1.03 }}
            className="text-white/60 hover:text-white text-base flex items-center gap-2 transition-colors"
          >
            {t("En savoir plus", "Learn more")}
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
          <ChevronDown className="w-4 h-4 text-emerald-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
