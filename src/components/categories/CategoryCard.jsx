import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { videosByCategory } from "../../utils/constants";

export default function CategoryCard({ category }) {
  const films = videosByCategory(category.slug);
  const cover = films[0]?.image || "/laptop.png";

  return (
    <Link
      to={`/categories/${category.slug}`}
      className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/6"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={cover}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/15 to-transparent" />
        <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-brand-navy">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{category.description}</p>
        <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-brand-red uppercase">
          {films.length ? `${films.length} films` : "Coming soon"}
        </p>
      </div>
    </Link>
  );
}
