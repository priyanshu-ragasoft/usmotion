import { useState, useMemo } from "react";
import { Film, Search, Sparkles } from "lucide-react";
import Container from "../components/common/Container";
import CategoryCard from "../components/categories/CategoryCard";
import { CATEGORIES } from "../utils/constants";

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;
    const q = searchQuery.toLowerCase();
    return CATEGORIES.filter(
      (cat) =>
        cat.name.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy">
      {/* Dark Cinematic Hero Header */}
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
                  Film Collections
                </span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-xs font-medium text-white/70">
                  {CATEGORIES.length} Categories
                </span>
              </div>

              <h1 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Browse Categories
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Commercial, brand, corporate, product, fashion, and more — every film filed by the purpose and industry it serves.
              </p>
            </div>

            {/* Search Categories */}
            <div className="relative min-w-[280px] lg:w-80">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search category name..."
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
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="my-12 rounded-2xl border border-dashed border-black/15 bg-white p-12 text-center">
              <Film className="mx-auto h-12 w-12 text-brand-muted/40" />
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">No category found</h3>
              <p className="mt-1 text-sm text-brand-muted">
                No matching category for "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 rounded-xl bg-brand-navy px-4 py-2 text-xs font-semibold text-white"
              >
                Clear Search
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
