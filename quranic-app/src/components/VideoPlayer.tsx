"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Share2, ChevronLeft } from "lucide-react";
import { Video } from "@/data/videos";
import { useLang } from "@/contexts/LanguageContext";
import { useEffect } from "react";

interface VideoPlayerProps {
  video: Video | null;
  onClose: () => void;
}

export default function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const { lang, t } = useLang();

  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [video]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const embedUrl = video
    ? `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`
    : "";

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Header */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-between px-6 py-4 border-b border-white/10"
          >
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">{t("Retour", "Back")}</span>
            </button>

            <div className="text-center hidden sm:block">
              <p className="text-white/40 text-xs uppercase tracking-widest">
                {t("En écoute", "Now playing")}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </motion.div>

          {/* Main content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
              {/* Video */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl shadow-emerald-950/50 ring-1 ring-white/10"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  src={embedUrl}
                  title={lang === "fr" ? video.titleFr : video.titleEn}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>

              {/* Video info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {lang === "fr" ? video.titleFr : video.titleEn}
                </h1>
                <p className="text-white/60 text-base leading-relaxed max-w-3xl">
                  {lang === "fr" ? video.descriptionFr : video.descriptionEn}
                </p>
              </motion.div>

              {/* After listening card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 bg-gradient-to-br from-emerald-900/40 to-emerald-950/60 border border-emerald-700/40 rounded-3xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {t(
                        "Après l'écoute",
                        "After listening"
                      )}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {t(
                        "N'hésitez pas à poser vos questions à notre équipe présente au stand. Ils seront ravis de vous expliquer le sens des versets, l'histoire du Coran et de répondre à toutes vos questions sur l'islam.",
                        "Feel free to ask questions to our team at the stand. They will be happy to explain the meaning of the verses, the history of the Quran, and answer all your questions about Islam."
                      )}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-sm font-medium px-4 py-2 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {t(
                        "Notre équipe est disponible pour vous",
                        "Our team is available for you"
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
