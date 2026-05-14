"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Library } from "lucide-react";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";
import { videos, Video } from "@/data/videos";
import { useLang } from "@/contexts/LanguageContext";

export default function VideoLibrary() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { t } = useLang();

  return (
    <section className="relative py-24 md:py-32 bg-[#080d0b]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-emerald-950/40 rounded-full blur-[120px]" />
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
            <Library className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm">
              {t("Bibliothèque de récitations", "Recitation Library")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("Choisissez votre", "Choose your")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">
              {t("expérience d'écoute", "listening experience")}
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t(
              "Sélectionnez une vidéo et laissez-vous emporter par la beauté et la profondeur du Coran.",
              "Select a video and let yourself be carried away by the beauty and depth of the Quran."
            )}
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onClick={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
