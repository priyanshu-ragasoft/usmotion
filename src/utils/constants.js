export const HERO_SLIDES = [
  {
    laptop: "/laptop.png",
    mobile: "/mobile.png",
    eyebrow: "FEATURED WORK",
    title: "The next generation of motion",
    category: "Commercial Film",
    description:
      "Premium video production and cinematic storytelling for brands that want to be seen.",
  },
  {
    laptop: "/laptop1.png",
    mobile: "/mobile1.png",
    eyebrow: "FEATURED WORK",
    title: "Built for the night drive",
    category: "Automotive",
    description:
      "High-impact brand films with cinematic lighting, pace, and production value.",
  },
  {
    laptop: "/laptop2.png",
    mobile: "/mobile2.png",
    eyebrow: "FEATURED WORK",
    title: "Fashion in full motion",
    category: "Fashion Film",
    description:
      "Editorial storytelling shaped through concept, production, and post-production.",
  },
];

export const SERVICES = [
  {
    title: "Pre-Production",
    description: "The film is designed before a camera moves.",
    items: ["Concept Development", "Creative Direction", "Scriptwriting", "Storyboarding", "Production Planning"],
  },
  {
    title: "Production",
    description: "Direction, light, and performance on set.",
    items: ["Video Production", "Direction", "Cinematography", "Studio Production", "Location Production"],
  },
  {
    title: "Post-Production",
    description: "The cut, the grade, and the finish.",
    items: ["Video Editing", "Color Grading", "Motion Graphics", "Sound Design", "VFX"],
  },
];

export const STUDIO_PILLARS = [
  "Video Production",
  "Post-Production",
  "Creative Direction",
  "Brand Storytelling",
];

export const INDUSTRIES = [
  { name: "Automotive", to: "/industries" },
  { name: "Technology", to: "/industries" },
  { name: "Fashion", to: "/industries" },
  { name: "Healthcare", to: "/industries" },
  { name: "Finance", to: "/industries" },
  { name: "Consumer Brands", to: "/industries" },
  { name: "Entertainment", to: "/industries" },
  { name: "Hospitality", to: "/industries" },
  { name: "Sports", to: "/industries" },
  { name: "Corporate", to: "/industries" },
];

export const CLIENTS = [
  "Aether",
  "Northline",
  "Vantage",
  "Helix",
  "Marlow",
  "Orbit",
  "Kite",
  "Solace",
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  // { label: "Videos", to: "/videos" },
  { label: "Categories", to: "/categories" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const FEATURED_VIDEOS = [
  {
    id: "night-drive",
    title: "Night Drive",
    category: "Automotive Film",
    industry: "Automotive",
    client: "Studio Commission",
    year: "2026",
    duration: "2:14",
    image: "/hero-banner-2.png",
    description:
      "High-impact brand film built around pace, light, and the feeling of a night road. Shot and finished as a complete production — from concept through color.",
    services: ["Direction", "Production", "Cinematography", "Editing"],
  },
  {
    id: "full-motion",
    title: "Full Motion",
    category: "Fashion Film",
    industry: "Fashion",
    client: "Editorial Partner",
    year: "2026",
    duration: "1:48",
    image: "/hero-banner-3.png",
    description:
      "Editorial storytelling shaped through casting, movement, and controlled lighting. A fashion piece designed to hold on a large screen.",
    services: ["Creative Direction", "Production", "Styling Support", "Post-Production"],
  },
  {
    id: "next-generation",
    title: "Next Generation",
    category: "Commercial Film",
    industry: "Brand",
    client: "US Motion Studio",
    year: "2026",
    duration: "2:36",
    image: "/hero-banner.png",
    description:
      "Premium video production and cinematic storytelling for brands that want to be seen. A flagship commercial built around scale and craft.",
    services: ["Direction", "Production", "Sound", "Color"],
  },
  {
    id: "after-hours",
    title: "After Hours",
    category: "Brand Story",
    industry: "Lifestyle",
    client: "Private Client",
    year: "2025",
    duration: "3:02",
    image: "/hero-banner-2.png",
    description:
      "A quieter night piece about atmosphere and product presence. Built for campaigns that need mood without losing clarity.",
    services: ["Direction", "Cinematography", "Editing"],
  },
  {
    id: "studio-cut",
    title: "Studio Cut",
    category: "Editorial",
    industry: "Media",
    client: "Studio Commission",
    year: "2025",
    duration: "1:56",
    image: "/hero-banner-3.png",
    description:
      "A sharp editorial cut designed for digital and cinema. Tight framing, controlled grade, and a clear narrative beat.",
    services: ["Editing", "Color", "Finishing"],
  },
  {
    id: "city-lights",
    title: "City Lights",
    category: "Lifestyle",
    industry: "Travel",
    client: "Brand Partner",
    year: "2025",
    duration: "2:21",
    image: "/hero-banner.png",
    description:
      "Urban lifestyle film with movement through streets, glass, and night color. Made to feel premium without noise.",
    services: ["Production", "Cinematography", "Post-Production"],
  },
  {
    id: "precision",
    title: "Precision",
    category: "Product Film",
    industry: "Technology",
    client: "Product Launch",
    year: "2026",
    duration: "0:45",
    image: "/hero-banner-2.png",
    description:
      "Macro-led product film with precise lighting and clean motion. Built for launch films and brand channels.",
    services: ["Direction", "Lighting", "Editing"],
  },
  {
    id: "in-frame",
    title: "In Frame",
    category: "Campaign",
    industry: "Advertising",
    client: "Campaign Team",
    year: "2026",
    duration: "1:12",
    image: "/hero-banner-3.png",
    description:
      "Campaign film designed to sit across social, web, and paid placements while keeping a cinematic core.",
    services: ["Concept", "Production", "Cutdowns"],
  },
  {
    id: "signal",
    title: "Signal",
    category: "Launch Film",
    industry: "Brand",
    client: "Studio Commission",
    year: "2025",
    duration: "2:05",
    image: "/hero-banner.png",
    description:
      "A launch film with a strong open, a clear middle, and a finish that holds the brand in frame.",
    services: ["Direction", "Production", "Sound Design"],
  },
  {
    id: "horizon",
    title: "Horizon",
    category: "Documentary",
    industry: "Culture",
    client: "Documentary Series",
    year: "2025",
    duration: "4:18",
    image: "/hero-banner-2.png",
    description:
      "Documentary-led storytelling with observational frames and a measured pace. Crafted for long-form and brand films alike.",
    services: ["Direction", "Field Production", "Edit"],
  },
];

const FEATURED_POSTER_IDS = new Set([
  "night-drive",
  "full-motion",
  "next-generation",
  "after-hours",
  "studio-cut",
  "city-lights",
  "precision",
  "in-frame",
]);

export function videoPoster(video) {
  return FEATURED_POSTER_IDS.has(video.id) ? `/featured/${video.id}.png` : video.image;
}

export const HOME_CATEGORY_ROWS = [
  {
    id: "commercial",
    title: "Commercial",
    ids: ["next-generation", "in-frame", "night-drive", "signal", "precision"],
  },
  {
    id: "brand",
    title: "Brand",
    ids: ["after-hours", "full-motion", "city-lights", "studio-cut", "next-generation"],
  },
  {
    id: "corporate",
    title: "Corporate",
    ids: ["horizon", "studio-cut", "in-frame", "city-lights", "after-hours"],
  },
  {
    id: "product",
    title: "Product",
    ids: ["precision", "night-drive", "full-motion", "signal", "next-generation"],
  },
];

export function videosForRow(ids) {
  return ids
    .map((id) => FEATURED_VIDEOS.find((video) => video.id === id))
    .filter(Boolean)
    .map((video) => ({ ...video, image: videoPoster(video) }));
}
