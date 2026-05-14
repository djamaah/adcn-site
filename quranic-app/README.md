# Stand d'Écoute Coranique — CIO Portes Ouvertes 2026

Application web immersive pour le stand d'écoute coranique de la Journée Portes Ouvertes du Centre Islamique de l'Outaouais, le **13 juin 2026**.

---

## Aperçu

Une expérience d'écoute premium permettant aux visiteurs de découvrir la beauté du Coran à travers une interface moderne, élégante et spirituelle.

**Fonctionnalités :**
- Page d'accueil immersive avec introduction cinématique
- Bibliothèque de 5 vidéos YouTube avec miniatures et descriptions
- Lecteur vidéo intégré en plein écran
- Support multilingue Français / Anglais
- Design responsive : mobile, tablette, écran TV, kiosque
- Animations Framer Motion fluides
- Palette émeraude & or premium

---

## Stack technique

| Technologie | Version |
|---|---|
| Next.js | 16 (App Router) |
| React | 19 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| TypeScript | 5 |
| Lucide React | latest |

---

## Installation

```bash
# Cloner le dépôt et entrer dans le dossier
cd quranic-app

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Scripts disponibles

```bash
npm run dev      # Serveur de développement (Turbopack)
npm run build    # Build de production
npm run start    # Lancer en production
npm run lint     # Vérification ESLint
```

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout racine (Navigation, Footer, LanguageProvider)
│   ├── page.tsx            # Page d'accueil
│   ├── videos/
│   │   └── page.tsx        # Bibliothèque de vidéos avec filtres
│   └── globals.css         # Styles globaux + Google Fonts
├── components/
│   ├── CinematicIntro.tsx  # Transition d'ouverture Bismillah
│   ├── ConceptSection.tsx  # Section "4 étapes" avec icônes
│   ├── Footer.tsx          # Pied de page avec informations CIO
│   ├── HeroSection.tsx     # Section héros plein écran
│   ├── Navigation.tsx      # Navigation fixe avec switcher de langue
│   ├── VideoCard.tsx       # Carte vidéo avec miniature YouTube
│   ├── VideoLibrary.tsx    # Grille de vidéos (section dans accueil)
│   └── VideoPlayer.tsx     # Lecteur modal YouTube intégré
├── contexts/
│   └── LanguageContext.tsx # Context FR/EN pour internationalisation
└── data/
    └── videos.ts           # Données des 5 vidéos (titres, descriptions, IDs)
```

---

## Vidéos intégrées

| # | Titre | Catégorie |
|---|---|---|
| 1 | La Sourate Al-Fatiha — L'Ouverture du Cœur | Récitation |
| 2 | La Beauté de la Récitation Coranique | Récitation |
| 3 | Verset de la Miséricorde Divine | Sens & Message |
| 4 | La Paix Intérieure par la Parole Divine | Réflexion |
| 5 | Lumière et Guidance — Un Message Universel | Sens & Message |

---

## Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Ou production
vercel --prod
```

Le projet est 100% statique (`○ Static`) — déploiement instantané sur Vercel, Netlify ou tout hébergeur statique.

**Variables d'environnement :** Aucune requise.

---

## Mode kiosque / événement

Pour une expérience optimale lors de l'événement :

1. Ouvrir l'application en **mode plein écran** (F11 sur la plupart des navigateurs)
2. L'interface est optimisée pour tablettes et écrans TV (grands boutons, lisibilité maximale)
3. La transition cinématique s'affiche une seule fois par session
4. Le visiteur peut naviguer de façon autonome

---

## Personnalisation

Pour ajouter ou modifier des vidéos, éditer `src/data/videos.ts` :

```ts
{
  id: "6",
  youtubeId: "YOUTUBE_VIDEO_ID",
  titleFr: "Titre en français",
  titleEn: "English title",
  descriptionFr: "Description en français...",
  descriptionEn: "English description...",
  category: "recitation", // "recitation" | "meaning" | "reflection"
  duration: "3:45",
  isShort: false,
}
```

---

## Licence

Projet développé pour le **Centre Islamique de l'Outaouais**.  
Usage événementiel — Journée Portes Ouvertes 2026.
