"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, MapPin, Calendar } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative bg-[#060b09] border-t border-white/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  {t("Stand d'Écoute Coranique", "Quranic Listening Stand")}
                </div>
                <div className="text-emerald-500 text-xs">CIO</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {t(
                "Une expérience immersive pour découvrir la beauté et la profondeur du Coran.",
                "An immersive experience to discover the beauty and depth of the Quran."
              )}
            </p>
          </div>

          {/* Event info */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("L'événement", "The Event")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white/70 text-sm">
                    {t("Journée Portes Ouvertes", "Open House Day")}
                  </div>
                  <div className="text-white/40 text-xs">
                    {t("13 Juin 2026", "June 13, 2026")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white/70 text-sm">
                    {t("Centre Islamique de l'Outaouais", "Islamic Centre of Outaouais")}
                  </div>
                  <div className="text-white/40 text-xs">Gatineau, QC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arabic quote */}
          <div className="text-right">
            <p
              className="text-yellow-400/70 text-2xl mb-2 leading-relaxed"
              style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
            >
              إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ
            </p>
            <p className="text-white/30 text-xs italic">
              {t(
                "« Ce Coran guide vers ce qui est le plus droit » — 17:9",
                '"This Quran guides to what is most upright" — 17:9'
              )}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 {t("Centre Islamique de l'Outaouais", "Islamic Centre of Outaouais")}
          </p>
          <p className="flex items-center gap-1.5 text-white/30 text-sm">
            {t("Fait avec", "Made with")}{" "}
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />{" "}
            {t("pour nos visiteurs", "for our visitors")}
          </p>
        </div>
      </div>
    </footer>
  );
}
