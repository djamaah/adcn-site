"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2218] via-[#0d1f18] to-[#071510]" />

      {/* Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating dots */}
      {[
        { top: "22%", left: "18%", size: 3, delay: 0 },
        { top: "35%", right: "22%", size: 2, delay: 2 },
        { top: "65%", left: "30%", size: 4, delay: 4 },
        { top: "70%", right: "15%", size: 2, delay: 1 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-emerald-400"
          style={{
            top: dot.top,
            left: (dot as { top: string; left?: string; right?: string; size: number; delay: number }).left,
            right: (dot as { top: string; left?: string; right?: string; size: number; delay: number }).right,
            width: dot.size,
            height: dot.size,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: dot.delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">

        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-emerald-500/30 backdrop-blur-sm rounded-full px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-sm font-medium tracking-wide">
            {t("Journée Portes Ouvertes · CIO · 13 Juin 2026", "Open House Day · CIO · June 13, 2026")}
          </span>
        </motion.div>

        {/* Arabic Bismillah */}
        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-arabic text-5xl md:text-7xl text-yellow-300/90 mb-8 leading-loose"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
        >
          {lang === "fr" ? (
            <>Découvrez la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400">
                beauté
              </span>{" "}du Coran</>
          ) : (
            <>Discover the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400">
                beauty
              </span>{" "}of the Quran</>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t(
            "Mettez un casque, choisissez une récitation et laissez-vous porter par la parole divine. Notre équipe est là pour répondre à toutes vos questions.",
            "Put on headphones, choose a recitation, and let yourself be carried by the divine word. Our team is here to answer all your questions."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/videos">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(52,211,153,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg px-10 py-4 rounded-2xl shadow-2xl shadow-emerald-900/50 transition-colors duration-200"
            >
              <Headphones className="w-6 h-6" />
              {t("Commencer l'écoute", "Start Listening")}
            </motion.button>
          </Link>
          <a
            href="#concept"
            className="flex items-center gap-2 text-white/50 hover:text-white/80 text-base transition-colors"
          >
            {t("Découvrir le concept", "Discover the concept")}
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-20 flex items-center justify-center gap-12"
        >
          {[
            { num: "5", labelFr: "Récitations", labelEn: "Recitations" },
            { num: "2", labelFr: "Langues", labelEn: "Languages" },
            { num: "∞", labelFr: "Questions bienvenues", labelEn: "Questions welcome" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{stat.num}</div>
              <div className="text-white/30 text-xs mt-1 uppercase tracking-widest">
                {t(stat.labelFr, stat.labelEn)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-emerald-500/50" />
      </motion.div>
    </section>
  );
}
