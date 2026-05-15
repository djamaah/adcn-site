"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Headphones } from "lucide-react";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";
import { videos, Video } from "@/data/videos";
import { useLang } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function VideoLibrary() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { t } = useLang();

  // Show only first 3 on homepage
  const preview = videos.slice(0, 3);

  return (
    <section className="relative py-28 bg-[#0a0f0e]">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-emerald-950/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-emerald-500 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              {t("Bibliothèque", "Library")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t("Récitations", "Recitations")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">
                {t("à la une", "featured")}
              </span>
            </h2>
          </div>
          <Link href="/videos">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 text-emerald-400 border border-emerald-700/50 hover:border-emerald-500 hover:bg-emerald-900/20 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            >
              <Headphones className="w-4 h-4" />
              {t("Voir toutes les vidéos", "View all videos")}
            </motion.button>
          </Link>
        </motion.div>

        {/* Grid — 3 cards preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {preview.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} onClick={setSelectedVideo} />
          ))}
        </div>

        {/* See all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/videos">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(16,185,129,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-700/60 text-white font-medium px-8 py-3.5 rounded-2xl transition-all duration-200"
            >
              {t(`Voir les ${videos.length} récitations`, `View all ${videos.length} recitations`)}
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
