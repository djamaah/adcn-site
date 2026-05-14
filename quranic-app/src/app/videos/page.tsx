"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Headphones, Filter } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import VideoPlayer from "@/components/VideoPlayer";
import { videos, Video, getCategoryLabel } from "@/data/videos";
import { useLang } from "@/contexts/LanguageContext";

type CategoryFilter = "all" | Video["category"];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const { lang, t } = useLang();

  const filtered = filter === "all" ? videos : videos.filter((v) => v.category === filter);
  const categories: Video["category"][] = ["recitation", "meaning", "reflection"];

  return (
    <div className="min-h-screen bg-[#0a0f0e] pt-20">
      {/* Page header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-900/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-full px-4 py-1.5 mb-6"
          >
            <Headphones className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm">
              {videos.length} {t("récitations disponibles", "recitations available")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {t("Bibliothèque", "Library")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            {t(
              "Explorez notre sélection de récitations coraniques soigneusement choisies pour cette expérience d'écoute.",
              "Explore our carefully selected collection of Quranic recitations for this listening experience."
            )}
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <div className="flex items-center gap-2 text-white/40 text-sm mr-2">
            <Filter className="w-4 h-4" />
            {t("Filtrer:", "Filter:")}
          </div>
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-emerald-600 text-white"
                : "bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {t("Tous", "All")} ({videos.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {getCategoryLabel(cat, lang)} ({videos.filter((v) => v.category === cat).length})
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filtered.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onClick={setSelectedVideo}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            {t("Aucune vidéo dans cette catégorie.", "No videos in this category.")}
          </div>
        )}
      </div>

      <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
