"use client";

import { motion } from "framer-motion";
import { Headphones, MessageCircle, BookOpen, Heart } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: Headphones,
    titleFr: "Enfilez le casque",
    titleEn: "Put on the headphones",
    descFr: "Installez-vous confortablement et mettez le casque audio pour une écoute immersive.",
    descEn: "Sit comfortably and put on the headphones for an immersive listening experience.",
    color: "from-emerald-600 to-emerald-800",
    glow: "shadow-emerald-900/50",
    number: "01",
  },
  {
    icon: BookOpen,
    titleFr: "Choisissez un extrait",
    titleEn: "Choose an excerpt",
    descFr: "Parcourez notre sélection de récitations coraniques et choisissez un extrait qui vous inspire.",
    descEn: "Browse our selection of Quranic recitations and choose an excerpt that inspires you.",
    color: "from-yellow-600 to-yellow-800",
    glow: "shadow-yellow-900/50",
    number: "02",
  },
  {
    icon: Heart,
    titleFr: "Écoutez & ressentez",
    titleEn: "Listen & feel",
    descFr: "Laissez-vous porter par la beauté de la récitation coranique dans une ambiance sereine.",
    descEn: "Let yourself be carried by the beauty of the Quranic recitation in a serene atmosphere.",
    color: "from-emerald-700 to-teal-800",
    glow: "shadow-teal-900/50",
    number: "03",
  },
  {
    icon: MessageCircle,
    titleFr: "Posez vos questions",
    titleEn: "Ask your questions",
    descFr: "Notre équipe est présente pour vous expliquer le sens des versets et répondre à vos questions.",
    descEn: "Our team is here to explain the meaning of the verses and answer your questions.",
    color: "from-emerald-500 to-emerald-700",
    glow: "shadow-emerald-900/50",
    number: "04",
  },
];

export default function ConceptSection() {
  const { t } = useLang();

  return (
    <section id="concept" className="relative py-24 md:py-32 bg-[#0a0f0e] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-950/60 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-400 text-sm">
              {t("Comment ça fonctionne", "How it works")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("Une expérience en", "An experience in")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              {t("4 étapes simples", "4 simple steps")}
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t(
              "Notre stand d'écoute est conçu pour être accessible à tous, quelle que soit votre connaissance de l'islam.",
              "Our listening stand is designed to be accessible to everyone, regardless of your knowledge of Islam."
            )}
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-emerald-800/50 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-white/[0.04] select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg ${step.glow} flex items-center justify-center mb-6`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Text */}
              <h3 className="text-white font-semibold text-xl mb-3">
                {t(step.titleFr, step.titleEn)}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {t(step.descFr, step.descEn)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-900/30 via-emerald-800/20 to-emerald-900/30 border border-emerald-700/30 rounded-3xl px-8 py-6 max-w-2xl">
            <p
              className="text-2xl md:text-3xl text-yellow-400/90 mb-3"
              style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
            >
              وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا
            </p>
            <p className="text-white/50 text-sm italic">
              {t(
                "« Lorsque le Coran est récité, écoutez-le attentivement » — Sourate Al-A'raf, 7:204",
                '"When the Quran is recited, listen to it attentively" — Surah Al-A\'raf, 7:204'
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
