"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, Globe } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-900/30">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-semibold text-sm leading-tight">
              {t("Stand d'Écoute", "Listening Stand")}
            </div>
            <div className="text-emerald-400 text-xs">
              {t("Coran · CIO 2026", "Quran · CIO 2026")}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            {t("Accueil", "Home")}
          </Link>
          <Link
            href="/videos"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            {t("Vidéos", "Videos")}
          </Link>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-medium"
              >
                {t("Accueil", "Home")}
              </Link>
              <Link
                href="/videos"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-medium"
              >
                {t("Bibliothèque de vidéos", "Video Library")}
              </Link>
              <button
                onClick={() => {
                  setLang(lang === "fr" ? "en" : "fr");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-emerald-400 text-lg font-medium"
              >
                <Globe className="w-5 h-5" />
                {lang === "fr" ? "Switch to English" : "Passer en Français"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
