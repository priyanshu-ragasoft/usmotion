import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { HERO_SLIDES } from "../../utils/constants";
import BottomCurve from "../common/BottomCurve";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [active]);

  const slide = HERO_SLIDES[active];
  const slideNo = String(active + 1).padStart(2, "0");
  const total = String(HERO_SLIDES.length).padStart(2, "0");
  const goTo = (index) => setActive((index + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative h-[100svh] min-h-[34rem] overflow-hidden bg-brand-dark sm:min-h-[42rem]">
      <picture>
        <source media="(min-width: 768px)" srcSet="/laptop.png" />
        <img
          src="/mobile.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/80 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] items-end px-5 pb-28 pt-28 sm:px-8 sm:pb-32 lg:px-10 lg:pb-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-white/80 uppercase">
                {slide.category}
              </span>
              <span className="font-heading text-[11px] tracking-[0.28em] text-white/35">
                {slideNo} — {total}
              </span>
            </div>

            <p className="mt-5 text-[11px] font-semibold tracking-[0.36em] text-brand-red sm:text-xs">
              {slide.eyebrow}
            </p>

            <h1 className="mt-3 max-w-[13ch] font-heading text-[2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
              {slide.description}
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/videos"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(226,16,27,0.32)] transition duration-300 hover:-translate-y-0.5"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <Play size={11} fill="currentColor" />
                </span>
                Watch Film
              </Link>
              <Link
                to="/videos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/10"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-5 bottom-[5.5rem] z-20 flex gap-2 sm:right-8 sm:bottom-28 lg:bottom-32">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous banner"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next banner"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <BottomCurve className="z-20" />
    </section>
  );
}
