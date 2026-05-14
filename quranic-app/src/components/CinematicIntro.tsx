"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<"text" | "fade">("text");

  useEffect(() => {
    // Check if already seen in this session
    if (sessionStorage.getItem("intro-seen")) {
      setShow(false);
      return;
    }
    const t1 = setTimeout(() => setPhase("fade"), 2800);
    const t2 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("intro-seen", "1");
    }, 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[200] bg-[#050a08] flex flex-col items-center justify-center"
        >
          {/* Radial glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[600px] h-[600px] rounded-full bg-emerald-900/20 blur-[100px]" />
          </motion.div>

          {/* Arabic text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase === "fade" ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            transition={{ duration: phase === "fade" ? 0.6 : 1, delay: phase === "fade" ? 0 : 0.3 }}
            className="relative z-10 text-center"
          >
            <div
              className="text-6xl md:text-8xl text-yellow-400/90 mb-6"
              style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
            >
              بِسْمِ اللَّهِ
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-emerald-500/50" />
              <span className="text-emerald-400/60 text-sm tracking-[0.3em] uppercase">
                Au nom d&apos;Allah
              </span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-emerald-500/50" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
