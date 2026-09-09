import { Link } from "react-router-dom";
import { ArrowUpRight, Film } from "lucide-react";
import { videosByCategory } from "../../utils/constants";

export default function CategoryCard({ category }) {
  const films = videosByCategory(category.slug);
  const cover = films[0]?.image || "/laptop.png";

  return (
    <Link
      to={`/categories/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-black/15"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <img
          src={cover}
          alt={category.name}
          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        
        {/* Count Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
            <Film className="h-3 w-3 text-brand-red" />
            {films.length} {films.length === 1 ? "film" : "films"}
          </span>
        </div>

        {/* Hover Arrow button */}
        <span className="absolute right-3.5 bottom-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-navy opacity-0 shadow-lg transition duration-300 group-hover:opacity-100 group-hover:scale-105">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-heading text-lg font-bold text-brand-navy transition duration-200 group-hover:text-brand-red">
            {category.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-brand-muted line-clamp-2">
            {category.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-brand-navy/60 group-hover:text-brand-navy">
          <span>Explore category</span>
          <span className="text-brand-red font-bold">→</span>
        </div>
      </div>
    </Link>
  );
}
