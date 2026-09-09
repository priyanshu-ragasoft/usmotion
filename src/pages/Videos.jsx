import { useState, useMemo } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import { Film, Search, Sparkles, Layers } from "lucide-react";
import Container from "../components/common/Container";
import VideoGrid from "../components/video/VideoGrid";
import { CATEGORIES, FEATURED_VIDEOS, videoPoster, videosByCategory } from "../utils/constants";

export default function Videos() {
  const { categorySlug: routeSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeCategory = routeSlug || searchParams.get("category") || searchParams.get("cat") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Get base videos depending on selected category tab
  const categoryBaseVideos = useMemo(() => {
    if (activeCategory === "all") {
      return FEATURED_VIDEOS.map((v) => ({
        ...v,
        image: videoPoster(v),
      }));
    }
    return videosByCategory(activeCategory);
  }, [activeCategory]);

  // Apply search query filter
  const filteredVideos = useMemo(() => {
    if (!searchQuery.trim()) return categoryBaseVideos;
    const q = searchQuery.toLowerCase().trim();
    return categoryBaseVideos.filter(
      (video) =>
        video.title.toLowerCase().includes(q) ||
        video.client?.toLowerCase().includes(q) ||
        video.category?.toLowerCase().includes(q) ||
        video.industry?.toLowerCase().includes(q)
    );
  }, [categoryBaseVideos, searchQuery]);

  const handleCategoryChange = (slug) => {
    const newParams = new URLSearchParams(searchParams);
    if (slug === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", slug);
    }
    setSearchParams(newParams);
  };

  const activeCategoryObj = CATEGORIES.find((c) => c.slug === activeCategory);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy">
      {/* Dark Hero Header */}
      <section className="relative overflow-hidden bg-brand-navy pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-red/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

        <Container className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                  {activeCategoryObj ? activeCategoryObj.name : "Full Video Catalogue"}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-xs font-medium text-white/70">
                  {filteredVideos.length} {filteredVideos.length === 1 ? "Film" : "Films"}
                </span>
              </div>

              <h1 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {activeCategoryObj ? activeCategoryObj.name : "Cinematic Videos"}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                {activeCategoryObj
                  ? activeCategoryObj.description
                  : "Explore our full portfolio of commercial, brand, corporate, product, and fashion films."}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px] lg:w-80">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search film title or client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-white/10 py-3 pl-11 pr-4 text-xs font-medium text-white placeholder:text-white/40 backdrop-blur-md focus:border-white/40 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Switcher Tabs */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-white/40 mr-1 flex items-center gap-1">
                <Layers className="h-3.5 w-3.5" /> Category:
              </span>
              <button
                onClick={() => handleCategoryChange("all")}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition duration-200 ${
                  activeCategory === "all"
                    ? "bg-white text-brand-navy font-bold shadow-md"
                    : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                All Films ({FEATURED_VIDEOS.length})
              </button>

              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.slug;
                const count = videosByCategory(cat.slug).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition duration-200 ${
                      isActive
                        ? "bg-white text-brand-navy font-bold shadow-md"
                        : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        isActive ? "bg-brand-navy/10 text-brand-navy" : "bg-white/10 text-white/50"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Video Grid */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-brand-navy sm:text-2xl">
              {activeCategory === "all"
                ? "All Films Catalogue"
                : `${activeCategoryObj?.name || "Category"} Catalogue`}
            </h2>
            <Link
              to="/categories"
              className="text-xs font-semibold text-brand-red hover:underline"
            >
              Browse Categories Grid →
            </Link>
          </div>

          <VideoGrid items={filteredVideos} />

          {filteredVideos.length === 0 && (
            <div className="my-12 rounded-2xl border border-dashed border-black/15 bg-white p-12 text-center">
              <Film className="mx-auto h-12 w-12 text-brand-muted/40" />
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">No films found</h3>
              <p className="mt-1 text-sm text-brand-muted">
                No matching projects found for this category or search filter.
              </p>
              <button
                onClick={() => {
                  handleCategoryChange("all");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-xl bg-brand-navy px-4 py-2 text-xs font-semibold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
