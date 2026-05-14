"use client";

import { motion } from "framer-motion";
import { Play, Clock, Tag } from "lucide-react";
import Image from "next/image";
import { Video, getCategoryLabel } from "@/data/videos";
import { useLang } from "@/contexts/LanguageContext";

interface VideoCardProps {
  video: Video;
  index: number;
  onClick: (video: Video) => void;
}

export default function VideoCard({ video, index, onClick }: VideoCardProps) {
  const { lang, t } = useLang();
  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl overflow-hidden cursor-pointer hover:border-emerald-700/60 transition-all duration-400"
      onClick={() => onClick(video)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-emerald-950/50">
        <Image
          src={thumbUrl}
          alt={lang === "fr" ? video.titleFr : video.titleEn}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-emerald-500/80 group-hover:border-emerald-400 transition-all duration-300 shadow-xl"
          >
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </motion.div>
        </motion.div>

        {/* Duration badge */}
        {video.duration && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2.5 py-1">
            <Clock className="w-3 h-3 text-white/70" />
            <span className="text-white/70 text-xs">{video.duration}</span>
          </div>
        )}

        {/* Short badge */}
        {video.isShort && (
          <div className="absolute top-3 left-3 bg-yellow-500/90 backdrop-blur-sm rounded-full px-2.5 py-1">
            <span className="text-black text-xs font-semibold">Short</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-1.5 mb-3">
          <Tag className="w-3 h-3 text-emerald-500" />
          <span className="text-emerald-500 text-xs font-medium uppercase tracking-wide">
            {getCategoryLabel(video.category, lang)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-base md:text-lg leading-snug mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
          {lang === "fr" ? video.titleFr : video.titleEn}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
          {lang === "fr" ? video.descriptionFr : video.descriptionEn}
        </p>

        {/* CTA */}
        <motion.div
          className="mt-5 flex items-center gap-2 text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Play className="w-4 h-4 fill-emerald-400" />
          {t("Écouter maintenant", "Listen now")}
        </motion.div>
      </div>

      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
