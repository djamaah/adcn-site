"use client";

import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import Image from "next/image";
import { Video, getCategoryLabel } from "@/data/videos";
import { useLang } from "@/contexts/LanguageContext";

interface VideoCardProps {
  video: Video;
  index: number;
  onClick: (video: Video) => void;
}

const categoryColors: Record<Video["category"], string> = {
  recitation: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  meaning:    "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  reflection: "bg-teal-500/20 text-teal-300 border-teal-500/30",
};

export default function VideoCard({ video, index, onClick }: VideoCardProps) {
  const { lang, t } = useLang();
  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(video)}
      className="group cursor-pointer bg-[#0d1f18] border border-white/[0.07] hover:border-emerald-600/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/60"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-emerald-950">
        <Image
          src={thumbUrl}
          alt={lang === "fr" ? video.titleFr : video.titleEn}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f18] via-black/30 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full bg-emerald-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-emerald-900/60 group-hover:bg-emerald-400 transition-colors duration-200"
          >
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </motion.div>
        </div>

        {/* Duration */}
        {video.duration && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-md px-2 py-0.5">
            <Clock className="w-3 h-3 text-white/60" />
            <span className="text-white/60 text-xs">{video.duration}</span>
          </div>
        )}

        {/* Short badge */}
        {video.isShort && (
          <div className="absolute top-3 left-3 bg-yellow-400 rounded-md px-2 py-0.5">
            <span className="text-black text-xs font-bold">Short</span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Category pill */}
        <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${categoryColors[video.category]}`}>
          {getCategoryLabel(video.category, lang)}
        </span>

        {/* Title */}
        <h3 className="text-white font-semibold text-base md:text-lg leading-snug mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
          {lang === "fr" ? video.titleFr : video.titleEn}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-sm leading-relaxed line-clamp-2">
          {lang === "fr" ? video.descriptionFr : video.descriptionEn}
        </p>

        {/* Listen CTA */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-emerald-400 text-sm font-medium flex items-center gap-1.5">
            <Play className="w-3.5 h-3.5 fill-emerald-400" />
            {t("Écouter", "Listen")}
          </span>
          <span className="text-white/25 text-xs">
            {t("Cliquer pour lancer", "Click to play")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
