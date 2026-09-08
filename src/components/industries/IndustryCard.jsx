import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { videosByIndustry } from "../../utils/constants";

export default function IndustryCard({ industry }) {
  const films = videosByIndustry(industry.slug);

  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-neutral-200"
    >
      <div className="relative aspect-[16/10]">
        <img
          src={industry.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">{industry.name}</h3>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">
              {films.length ? `${films.length} films` : "View sector"}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
