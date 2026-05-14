export interface Video {
  id: string;
  youtubeId: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  duration?: string;
  category: "recitation" | "meaning" | "reflection";
  isShort?: boolean;
}

export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "3Fh7tIRwM0Q",
    titleFr: "La Sourate Al-Fatiha — L'Ouverture du Cœur",
    titleEn: "Surah Al-Fatiha — The Opening of the Heart",
    descriptionFr:
      "Découvrez la première sourate du Coran, récitée par des millions de musulmans chaque jour. Ces sept versets résument l'essence de la relation entre l'être humain et son Créateur.",
    descriptionEn:
      "Discover the first chapter of the Quran, recited by millions of Muslims every day. These seven verses summarize the essence of the relationship between humans and their Creator.",
    category: "recitation",
    duration: "3:45",
  },
  {
    id: "2",
    youtubeId: "WGO7EeJReH0",
    titleFr: "La Beauté de la Récitation Coranique",
    titleEn: "The Beauty of Quranic Recitation",
    descriptionFr:
      "Une récitation envoûtante qui illustre la musicalité naturelle du Coran. Chaque syllabe est prononcée avec précision et dévotion, transmettant une paix profonde à l'auditeur.",
    descriptionEn:
      "An enchanting recitation that illustrates the natural musicality of the Quran. Each syllable is pronounced with precision and devotion, conveying deep peace to the listener.",
    category: "recitation",
    duration: "4:20",
  },
  {
    id: "3",
    youtubeId: "VSGr54V8zNk",
    titleFr: "Verset de la Miséricorde Divine",
    titleEn: "Verse of Divine Mercy",
    descriptionFr:
      "Un extrait touchant sur la miséricorde infinie d'Allah. Le Coran rappelle que la compassion divine est plus vaste que toute faute humaine.",
    descriptionEn:
      "A touching excerpt about the infinite mercy of Allah. The Quran reminds us that divine compassion is greater than any human fault.",
    category: "meaning",
    isShort: true,
    duration: "0:58",
  },
  {
    id: "4",
    youtubeId: "-qjukEBSSu8",
    titleFr: "La Paix Intérieure par la Parole Divine",
    titleEn: "Inner Peace Through the Divine Word",
    descriptionFr:
      "Le Coran n'est pas seulement un texte sacré — c'est une source de sérénité. Cette récitation illustre comment la parole divine peut apaiser l'âme humaine.",
    descriptionEn:
      "The Quran is not just a sacred text — it is a source of serenity. This recitation illustrates how the divine word can soothe the human soul.",
    category: "reflection",
    isShort: true,
    duration: "0:45",
  },
  {
    id: "5",
    youtubeId: "234zwAUdp4U",
    titleFr: "Lumière et Guidance — Un Message Universel",
    titleEn: "Light and Guidance — A Universal Message",
    descriptionFr:
      "Le Coran se présente comme une lumière et un guide pour l'humanité entière. Cet extrait illustre la dimension universelle et atemporelle de son message.",
    descriptionEn:
      "The Quran presents itself as a light and guide for all of humanity. This excerpt illustrates the universal and timeless dimension of its message.",
    category: "meaning",
    isShort: true,
    duration: "1:02",
  },
];

export const getCategoryLabel = (
  category: Video["category"],
  lang: "fr" | "en"
) => {
  const labels = {
    recitation: { fr: "Récitation", en: "Recitation" },
    meaning: { fr: "Sens & Message", en: "Meaning & Message" },
    reflection: { fr: "Réflexion", en: "Reflection" },
  };
  return labels[category][lang];
};
