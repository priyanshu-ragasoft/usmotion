import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const ASPECT = {
  landscape: "aspect-[16/10]",
  poster: "aspect-[2/3]",
  square: "aspect-square",
};

export default function VideoCard({ item, variant = "landscape", index, dark = false, className = "" }) {
  const aspect = ASPECT[variant] ?? ASPECT.landscape;

  return (
    <Link
      to={`/videos/${item.id}`}
      className={`group relative shrink-0 overflow-hidden bg-neutral-200 ${
        className ||
        (variant === "poster"
          ? "w-[min(62vw,220px)] sm:w-[200px]"
          : variant === "square"
            ? "w-[min(70vw,260px)] sm:w-[240px]"
            : "w-[min(78vw,340px)] sm:w-[300px]")
      } ${dark ? "rounded-xl ring-1 ring-white/10" : "rounded-2xl"}`}
    >
      {variant === "poster" && index != null ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-2 -left-1 z-10 font-heading text-[72px] font-black leading-none text-transparent sm:text-[88px]"
          style={{ WebkitTextStroke: dark ? "2px rgba(255,255,255,0.35)" : "2px #042455" }}
        >
          {index + 1}
        </span>
      ) : null}

      <div className={`relative overflow-hidden ${aspect} ${variant === "poster" ? "ml-6" : ""}`}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy opacity-0 shadow-md transition duration-300 group-hover:opacity-100">
          <Play className="h-4 w-4 fill-current" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3.5">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-white/65 uppercase">{item.category}</p>
          <h3 className="mt-0.5 font-heading text-base font-bold text-white">{item.title}</h3>
          <p className="mt-0.5 text-[11px] text-white/55">
            {item.client} · {item.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
