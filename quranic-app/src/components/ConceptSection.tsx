"use client";

import { motion } from "framer-motion";
import { Headphones, BookOpen, Heart, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: Headphones,
    num: "01",
    titleFr: "Enfilez le casque",
    titleEn: "Put on the headphones",
    descFr: "Installez-vous confortablement et mettez le casque pour une écoute immersive.",
    descEn: "Sit comfortably and put on the headphones for an immersive experience.",
    accent: "emerald",
  },
  {
    icon: BookOpen,
    num: "02",
    titleFr: "Choisissez un extrait",
    titleEn: "Choose an excerpt",
    descFr: "Parcourez notre sélection et choisissez la récitation qui vous inspire.",
    descEn: "Browse our selection and choose the recitation that inspires you.",
    accent: "yellow",
  },
  {
    icon: Heart,
    num: "03",
    titleFr: "Écoutez & ressentez",
    titleEn: "Listen & feel",
    descFr: "Laissez-vous porter par la beauté de la récitation dans une ambiance sereine.",
    descEn: "Let yourself be carried by the beauty of the recitation.",
    accent: "teal",
  },
  {
    icon: MessageCircle,
    num: "04",
    titleFr: "Posez vos questions",
    titleEn: "Ask your questions",
    descFr: "Notre équipe explique le sens des versets et répond à toutes vos questions.",
    descEn: "Our team explains the meaning of the verses and answers all your questions.",
    accent: "emerald",
  },
];

const iconBg: Record<string, string> = {
  emerald: "bg-emerald-500 shadow-emerald-900/60",
  yellow:  "bg-yellow-500 shadow-yellow-900/60",
  teal:    "bg-teal-500 shadow-teal-900/60",
};

const hoverBorder: Record<string, string> = {
  emerald: "hover:border-emerald-600/50",
  yellow:  "hover:border-yellow-600/50",
  teal:    "hover:border-teal-600/50",
};

export default function ConceptSection() {
  const { t } = useLang();

  return (
    <section id="concept" className="relative py-28 bg-[#081410]">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-emerald-500 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            {t("Comment ça fonctionne", "How it works")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {t("Une expérience en", "An experience in")}{" "}
            <span className="text-emerald-400">{t("4 étapes", "4 steps")}</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-lg leading-relaxed">
            {t(
              "Accessible à tous, quelle que soit votre connaissance de l'islam.",
              "Accessible to everyone, regardless of your knowledge of Islam."
            )}
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.055] transition-all duration-300 ${hoverBorder[step.accent]}`}
            >
              {/* Watermark number */}
              <span className="absolute top-5 right-6 text-6xl font-black text-white/[0.04] select-none leading-none">
                {step.num}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg ${iconBg[step.accent]}`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {t(step.titleFr, step.titleEn)}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {t(step.descFr, step.descEn)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quranic verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-emerald-600/60 mb-6" />
          <p className="font-arabic text-3xl md:text-4xl text-yellow-300/85 mb-4 leading-loose">
            وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا
          </p>
          <p className="text-white/35 text-sm italic max-w-md">
            {t(
              "« Lorsque le Coran est récité, écoutez-le attentivement et faites silence »",
              '"When the Quran is recited, listen to it attentively and be silent"'
            )}{" "}
            <span className="text-emerald-600 not-italic">— Al-A&apos;raf 7:204</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
