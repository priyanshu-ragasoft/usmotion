import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Film, 
  Play, 
  Search, 
  Sparkles, 
  ChevronRight,
  Layers
} from "lucide-react";
import Container from "../components/common/Container";
import VideoGrid from "../components/video/VideoGrid";
import NotFound from "./NotFound";
import { CATEGORIES, getCategory, videosByCategory } from "../utils/constants";

export default function CategoryDetail() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const [searchQuery, setSearchQuery] = useState("");

  // Get only videos belonging to this category unconditionally
  const allCategoryVideos = useMemo(() => {
    return category ? videosByCategory(category.slug) : [];
  }, [category]);

  // Filter videos based on search query
  const filteredVideos = useMemo(() => {
    if (!searchQuery.trim()) return allCategoryVideos;
    const q = searchQuery.toLowerCase();
    return allCategoryVideos.filter(
      (video) =>
        video.title.toLowerCase().includes(q) ||
        video.client?.toLowerCase().includes(q) ||
        video.industry?.toLowerCase().includes(q) ||
        video.services?.some((s) => s.toLowerCase().includes(q))
    );
  }, [allCategoryVideos, searchQuery]);

  if (!category) return <NotFound />;

  // Featured spotlight video (first video in category)
  const featuredSpotlight = allCategoryVideos[0];
  const remainingVideos = searchQuery ? filteredVideos : allCategoryVideos;

  // Other categories for quick discovery
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy">
      {/* Dynamic Cinematic Hero Header */}
      <section className="relative overflow-hidden bg-brand-navy pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
        {/* Background glow graphics */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-red/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <Link to="/categories" className="transition hover:text-white">Categories</Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="font-semibold text-white/90">{category.name}</span>
          </nav>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <Film className="h-3.5 w-3.5 text-brand-red" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                  Category Catalogue
                </span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-xs font-medium text-white/70">
                  {allCategoryVideos.length} {allCategoryVideos.length === 1 ? "Film" : "Films"}
                </span>
              </div>

              <h1 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {category.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                {category.description}
              </p>
            </div>

            {/* Quick action back link */}
            <div className="shrink-0">
              <Link
                to="/categories"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/30 hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>All Categories</span>
              </Link>
            </div>
          </div>

          {/* Category Switcher Pills */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-white/40 mr-1 flex items-center gap-1">
                <Layers className="h-3.5 w-3.5" /> Explore:
              </span>
              {CATEGORIES.map((cat) => {
                const isActive = cat.slug === category.slug;
                const count = videosByCategory(cat.slug).length;
                return (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.slug}`}
                    className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition duration-200 ${
                      isActive
                        ? "bg-white text-brand-navy shadow-md font-bold"
                        : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        isActive
                          ? "bg-brand-navy/10 text-brand-navy"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <Container>
          {/* Spotlight Banner if Category Has Videos */}
          {featuredSpotlight && !searchQuery && (
            <div className="mb-8 overflow-hidden rounded-2xl bg-brand-navy text-white shadow-xl ring-1 ring-black/10 lg:max-h-[300px]">
              <div className="flex flex-col lg:flex-row lg:h-[300px]">
                {/* Visual Media */}
                <div className="relative aspect-video lg:aspect-auto lg:w-7/12 overflow-hidden group lg:h-full">
                  <img
                    src={featuredSpotlight.image}
                    alt={featuredSpotlight.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-brand-navy/40 lg:to-brand-navy" />
                  
                  <Link
                    to={`/videos/${featuredSpotlight.id}`}
                    className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-2xl transition duration-300 group-hover:scale-110"
                  >
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </Link>

                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                      <Sparkles className="h-3 w-3" /> Featured in {category.name}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between p-5 sm:p-6 lg:w-5/12 lg:p-6 lg:h-full">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-white/60">
                      <span>{featuredSpotlight.client}</span>
                      <span>•</span>
                      <span>{featuredSpotlight.year}</span>
                      {featuredSpotlight.duration && (
                        <>
                          <span>•</span>
                          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">{featuredSpotlight.duration}</span>
                        </>
                      )}
                    </div>

                    <h2 className="mt-1.5 font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                      {featuredSpotlight.title}
                    </h2>

                    <p className="mt-1.5 text-xs leading-relaxed text-white/75 line-clamp-2">
                      {featuredSpotlight.description}
                    </p>

                    {featuredSpotlight.services && (
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {featuredSpotlight.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Link
                      to={`/videos/${featuredSpotlight.id}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-brand-navy transition hover:bg-white/90"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" /> Watch Film
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
                {searchQuery ? `Search Results in ${category.name}` : `All ${category.name}`}
              </h2>
              <p className="mt-0.5 text-xs text-brand-muted">
                Showing {filteredVideos.length} {filteredVideos.length === 1 ? "project" : "projects"}
              </p>
            </div>

            {/* Instant Search Bar */}
            <div className="relative min-w-[260px] sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                placeholder={`Search in ${category.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-brand-navy placeholder:text-brand-muted/70 shadow-sm focus:border-brand-navy focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-brand-muted hover:text-brand-navy"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Video Grid */}
          <VideoGrid items={remainingVideos} />

          {/* Empty State */}
          {remainingVideos.length === 0 && (
            <div className="my-12 rounded-2xl border border-dashed border-black/15 bg-white p-12 text-center">
              <Film className="mx-auto h-12 w-12 text-brand-muted/40" />
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">No films found</h3>
              <p className="mt-1 text-sm text-brand-muted">
                No matching projects found for "{searchQuery}". Try clearing your search term.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 rounded-xl bg-brand-navy px-4 py-2 text-xs font-semibold text-white"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Explore Other Categories Section */}
          <div className="mt-20 border-t border-black/10 pt-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-brand-red uppercase">Catalogue</p>
                <h3 className="mt-1 font-heading text-xl font-bold text-brand-navy sm:text-2xl">
                  Explore Other Categories
                </h3>
              </div>
              <Link
                to="/categories"
                className="group inline-flex items-center gap-1 text-sm font-semibold text-brand-navy/70 hover:text-brand-red"
              >
                <span>View all categories</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otherCategories.map((other) => {
                const count = videosByCategory(other.slug).length;
                return (
                  <Link
                    key={other.id}
                    to={`/categories/${other.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-black/6 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-brand-light px-2.5 py-1 text-[11px] font-semibold text-brand-navy/70">
                          {count} {count === 1 ? "film" : "films"}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-brand-navy/30 transition duration-300 group-hover:text-brand-red group-hover:translate-x-0.5" />
                      </div>
                      <h4 className="mt-4 font-heading text-lg font-bold text-brand-navy group-hover:text-brand-red transition">
                        {other.name}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-brand-muted line-clamp-2">
                        {other.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
