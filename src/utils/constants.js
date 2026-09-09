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
    id: "pre-production",
    title: "Pre-Production",
    description: "The film is designed before a camera moves.",
    copy: "We lock the idea, the frames, and the plan before a camera rolls — so production has a clear film to make, not a vague brief.",
    image: "/laptop.png",
    relatedTo: "/categories/commercial",
    items: [
      "Concept Development",
      "Creative Direction",
      "Scriptwriting",
      "Storyboarding",
      "Production Planning",
    ],
  },
  {
    id: "production",
    title: "Production",
    description: "Direction, light, and performance on set.",
    copy: "On set we hold direction, cinematography, and performance to one standard — studio or location, day or night.",
    image: "/laptop1.png",
    relatedTo: "/categories/brand",
    items: [
      "Video Production",
      "Direction",
      "Cinematography",
      "Studio Production",
      "Location Production",
    ],
  },
  {
    id: "post-production",
    title: "Post-Production",
    description: "The cut, the grade, and the finish.",
    copy: "Editorial, color, sound, motion, and VFX are finished in-house so the film stays coherent from the first cut to delivery.",
    image: "/laptop2.png",
    relatedTo: "/categories/promotional",
    items: [
      "Video Editing",
      "Color Grading",
      "Motion Graphics",
      "Animation",
      "VFX",
      "Sound Design",
    ],
  },
];

export const STUDIO_PILLARS = [
  "Video Production",
  "Post-Production",
  "Creative Direction",
  "Brand Storytelling",
];

export const INDUSTRIES = [
  {
    slug: "automotive",
    name: "Automotive",
    intro: "Night roads, metal, and pace — films built for brands that live in motion.",
    image: "/laptop1.png",
    services: ["production", "post-production"],
  },
  {
    slug: "technology",
    name: "Technology",
    intro: "Product, launch, and brand films with precise light and a clean cinematic finish.",
    image: "/laptop2.png",
    services: ["pre-production", "post-production"],
  },
  {
    slug: "fashion",
    name: "Fashion",
    intro: "Editorial storytelling through casting, movement, and controlled lighting.",
    image: "/laptop.png",
    services: ["pre-production", "production"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    intro: "Human, clear, and premium films for care, science, and trust.",
    image: "/featured/after-hours.png",
    services: ["pre-production", "production"],
  },
  {
    slug: "finance",
    name: "Finance",
    intro: "Quiet authority on screen — brand films with craft, not noise.",
    image: "/featured/studio-cut.png",
    services: ["pre-production", "post-production"],
  },
  {
    slug: "consumer-brands",
    name: "Consumer Brands",
    intro: "Campaigns and lifestyle films designed to hold on a large screen and in the feed.",
    image: "/featured/city-lights.png",
    services: ["production", "post-production"],
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    intro: "Editorial and long-form work with cinematic framing and a measured cut.",
    image: "/featured/in-frame.png",
    services: ["production", "post-production"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    intro: "Atmosphere, place, and service — films that make a room feel premium.",
    image: "/featured/night-drive.png",
    services: ["pre-production", "production"],
  },
  {
    slug: "sports",
    name: "Sports",
    intro: "Energy, bodies, and pace held with cinematic control.",
    image: "/featured/precision.png",
    services: ["production", "post-production"],
  },
  {
    slug: "corporate",
    name: "Corporate",
    intro: "Culture, leadership, and company films with the same production standard as brand work.",
    image: "/featured/next-generation.png",
    services: ["pre-production", "production", "post-production"],
  },
];

export const VIDEO_INDUSTRIES = {
  "night-drive": "automotive",
  "full-motion": "fashion",
  "next-generation": "corporate",
  "after-hours": "consumer-brands",
  "studio-cut": "entertainment",
  "city-lights": "hospitality",
  precision: "technology",
  "in-frame": "consumer-brands",
  signal: "corporate",
  horizon: "entertainment",
};

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

export const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Videos", to: "/videos" },
  { label: "Categories", to: "/categories" },
  // { label: "Services", to: "/services" },
  // { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  // { label: "Contact", to: "/contact" },
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

export const CATEGORIES = [
  {
    id: "commercial",
    slug: "commercial",
    name: "Commercial Videos",
    description: "High-impact films built for campaigns, launches, and brand channels.",
  },
  {
    id: "brand",
    slug: "brand",
    name: "Brand Videos",
    description: "Story-led pieces that hold a brand in frame with pace and atmosphere.",
  },
  {
    id: "corporate",
    slug: "corporate",
    name: "Corporate Videos",
    description: "Clear, cinematic films for companies, culture, and leadership.",
  },
  {
    id: "product",
    slug: "product",
    name: "Product Videos",
    description: "Precision lighting and motion for launches and product films.",
  },
  {
    id: "promotional",
    slug: "promotional",
    name: "Promotional Videos",
    description: "Campaign cuts designed to move across social, web, and paid placements.",
  },
  {
    id: "documentary",
    slug: "documentary",
    name: "Documentary Videos",
    description: "Observational storytelling with a measured pace and cinematic finish.",
  },
  {
    id: "music",
    slug: "music",
    name: "Music Videos",
    description: "Performance and editorial films shaped around rhythm and image.",
  },
  {
    id: "fashion",
    slug: "fashion",
    name: "Fashion Videos",
    description: "Editorial movement, casting, and controlled light for fashion films.",
  },
  {
    id: "event",
    slug: "event",
    name: "Event Videos",
    description: "Coverage that still feels cinematic — rooms, energy, and key moments.",
  },
  {
    id: "social",
    slug: "social",
    name: "Social Media Videos",
    description: "Short, sharp cuts built for feeds without losing production value.",
  },
  {
    id: "animation",
    slug: "animation",
    name: "Animation",
    description: "Motion design and animated sequences for brand and product stories.",
  },
  {
    id: "vfx",
    slug: "vfx",
    name: "VFX & Motion Graphics",
    description: "Visual effects and graphics finished to the same studio standard.",
  },
];

export const VIDEO_CATEGORIES = {
  "night-drive": "commercial",
  "full-motion": "fashion",
  "next-generation": "commercial",
  "after-hours": "brand",
  "studio-cut": "corporate",
  "city-lights": "brand",
  "precision": "product",
  "in-frame": "promotional",
  signal: "brand",
  horizon: "documentary",
};

export const HOME_CATEGORY_ROWS = [
  {
    id: "commercial",
    title: "Commercial Videos",
    ids: ["next-generation", "in-frame", "night-drive", "signal", "precision"],
  },
  {
    id: "brand",
    title: "Brand Videos",
    ids: ["after-hours", "full-motion", "city-lights", "studio-cut", "next-generation"],
  },
  {
    id: "corporate",
    title: "Corporate Videos",
    ids: ["horizon", "studio-cut", "in-frame", "city-lights", "after-hours"],
  },
  {
    id: "product",
    title: "Product Videos",
    ids: ["precision", "night-drive", "full-motion", "signal", "next-generation"],
  },
];

export function videosForRow(ids) {
  return ids
    .map((id) => FEATURED_VIDEOS.find((video) => video.id === id))
    .filter(Boolean)
    .map((video) => ({ ...video, image: videoPoster(video) }));
}

export function videosByCategory(slug) {
  const row = HOME_CATEGORY_ROWS.find((item) => item.id === slug);
  const fromMap = FEATURED_VIDEOS.filter((video) => VIDEO_CATEGORIES[video.id] === slug).map(
    (video) => video.id,
  );
  const ids = [...new Set([...(row?.ids ?? []), ...fromMap])];
  return videosForRow(ids);
}

export function getCategory(slug) {
  return CATEGORIES.find((item) => item.slug === slug);
}

export function getIndustry(slug) {
  return INDUSTRIES.find((item) => item.slug === slug);
}

export function videosByIndustry(slug) {
  const ids = FEATURED_VIDEOS.filter((video) => VIDEO_INDUSTRIES[video.id] === slug).map(
    (video) => video.id,
  );
  return videosForRow(ids);
}

export const REELS = [
  { id: "reel-45917", title: "Studio reel", video: "/reels/Video-45917.mp4" },
  { id: "reel-36340", title: "Studio reel", video: "/reels/Video-36340.mp4" },
  { id: "reel-73255", title: "Studio reel", video: "/reels/Video-73255.mp4" },
  { id: "reel-40628", title: "Studio reel", video: "/reels/Video-40628.mp4" },
  { id: "reel-51667", title: "Studio reel", video: "/reels/Video-51667.mp4" },
];

export const STUDIO_CONTACT = {
  email: "info@motionusaproductions.com",
  phone: "+1 (908) 368-7546",
  phoneHref: "tel:+19083687546",
  emailHref: "mailto:info@motionusaproductions.com",
  locations: [
    { city: "Los Angeles", note: "Primary production base" },
    { city: "New York", note: "East coast shoots" },
    { city: "Worldwide", note: "On location, anywhere the film needs" },
  ],
};

export const ABOUT_STATS = [
  { value: "12+", label: "Years in motion" },
  { value: "180+", label: "Films delivered" },
  { value: "40+", label: "Brand partners" },
  { value: "3", label: "Cities of production" },
];

export const TEAM = [
  {
    role: "Creative Direction",
    copy: "The idea, the frames, and the tone of the film — locked before cameras roll.",
    image: "/laptop.png",
  },
  {
    role: "Cinematography",
    copy: "Light, lens, and movement held to one standard on studio floors and on location.",
    image: "/laptop1.png",
  },
  {
    role: "Production",
    copy: "Schedules, crews, and performance — so the day on set serves the cut.",
    image: "/featured/studio-cut.png",
  },
  {
    role: "Editorial & Color",
    copy: "Pace, grade, sound, and finish in-house, from the first assembly to delivery.",
    image: "/laptop2.png",
  },
];

export const APPROACH = [
  {
    title: "Concept first",
    copy: "We design the film before a camera moves — boards, references, and a clear brief.",
  },
  {
    title: "Hold the frame",
    copy: "Direction and cinematography stay exacting, whether the set is a stage or a street.",
  },
  {
    title: "Finish in-house",
    copy: "Edit, color, sound, motion, and VFX stay under one roof so the film stays coherent.",
  },
];

export const BUDGET_RANGES = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k – $300k",
  "$300k+",
  "To be discussed",
];

export const PROJECT_TIMELINES = [
  "As soon as possible",
  "1 – 2 months",
  "3 – 6 months",
  "6+ months",
  "Flexible",
];
