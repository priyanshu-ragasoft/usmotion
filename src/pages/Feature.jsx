import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Info, Play, Plus } from "lucide-react";
import { FEATURED_VIDEOS } from "../utils/constants";

const FEATURED_ITEMS = FEATURED_VIDEOS.slice(0, 8).map((video, index) => ({
  ...video,
  image: `/featured/${video.id}.png`,
  badge: index === 0 ? "LEAD" : index === 3 ? "SELECT" : null,
}));

export default function FeaturedOriginals({
  title = "Featured originals",
  items = FEATURED_ITEMS,
}) {
  const scrollRef = useRef(null);
  const hoverTimer = useRef(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const [hoveredId, setHoveredId] = useState(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [dragging, setDragging] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    updateScrollState();
    const onScroll = () => {
      updateScrollState();
      setHoveredId(null);
    };
    const onWheel = (event) => {
      if (event.deltaY === 0) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateScrollState);
      window.clearTimeout(hoverTimer.current);
    };
  }, []);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    setHoveredId(null);
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    didDrag.current = false;
    startX.current = event.clientX;
    startScroll.current = el.scrollLeft;
    setDragging(true);
    setHoveredId(null);
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = event.clientX - startX.current;
    if (Math.abs(delta) > 6) didDrag.current = true;
    el.scrollLeft = startScroll.current - delta;
  };

  const stopDrag = (event) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragging(false);
    const el = scrollRef.current;
    if (el && event?.pointerId != null) {
      try {
        el.releasePointerCapture(event.pointerId);
      } catch {
        /* already released */
      }
    }
  };

  const onClickCapture = (event) => {
    if (!didDrag.current) return;
    event.preventDefault();
    event.stopPropagation();
    didDrag.current = false;
  };

  const openHover = (id) => {
    if (window.matchMedia("(hover: none)").matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setHoveredId(id), 180);
  };

  const closeHover = () => {
    window.clearTimeout(hoverTimer.current);
    setHoveredId(null);
  };

  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto mb-8 flex max-w-[1700px] items-end justify-between gap-3 px-5 sm:px-8 lg:px-12">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Originals</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-4xl">{title}</h2>
        </div>
        <Link
          to="/videos"
          className="flex items-center gap-0.5 text-sm font-medium text-brand-navy/45 transition-colors hover:text-brand-navy"
        >
          See more
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="group/row relative">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
            className="absolute top-0 left-0 z-30 hidden h-full w-12 items-center justify-center bg-gradient-to-r from-white to-transparent text-brand-navy opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex"
          >
            <ChevronRight className="h-7 w-7 rotate-180" />
          </button>
        ) : null}

        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onClickCapture={onClickCapture}
          className={`scrollbar-none flex items-stretch gap-2 overflow-x-auto px-5 py-1 sm:gap-2.5 sm:px-8 lg:px-12 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {items.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <article
                key={item.id}
                onMouseEnter={() => openHover(item.id)}
                onMouseLeave={closeHover}
                className="relative h-[300px] shrink-0 overflow-hidden rounded-lg bg-neutral-200 ring-1 ring-black/8 shadow-sm sm:h-[320px]"
                style={{
                  width: isHovered ? "min(70vw, 440px)" : "min(36vw, 200px)",
                  transformOrigin: "left center",
                  transition: "width 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                  zIndex: isHovered ? 20 : 1,
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r from-black/75 via-black/25 to-transparent opacity-100"
                      : "bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-100"
                  }`}
                />

                {item.badge ? (
                  <span className="absolute top-0 left-0 z-10 rounded-br-md bg-white px-2.5 py-1 text-[11px] font-bold tracking-wide text-black">
                    {item.badge}
                  </span>
                ) : null}

                <span className="absolute right-2.5 bottom-2.5 z-10 rounded-sm bg-brand-red px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white uppercase">
                  US
                </span>

                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-3.5 transition-all duration-500 ${
                    isHovered
                      ? "translate-x-0 opacity-100 delay-100"
                      : "pointer-events-none -translate-x-4 opacity-0"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                >
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <Link
                      to={`/videos/${item.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/90"
                    >
                      <Play className="h-3.5 w-3.5 fill-black" />
                      Watch now
                    </Link>
                    <Link
                      to="/contact"
                      aria-label="Watchlist"
                      title="Watchlist"
                      className="group/tip relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 text-[10px] font-semibold whitespace-nowrap text-black opacity-0 shadow-md transition group-hover/tip:opacity-100">
                        Enquire
                      </span>
                    </Link>
                    <Link
                      to={`/videos/${item.id}`}
                      aria-label="More info"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white/10"
                    >
                      <Info className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className="mt-3 text-xs font-medium text-white/70">{item.client}</p>
                  <p className="mt-1.5 text-xs text-white/75">
                    {item.category} · {item.year} · {item.duration}
                  </p>
                </div>

                <Link
                  to={`/videos/${item.id}`}
                  className={`absolute inset-0 z-[1] ${isHovered ? "pointer-events-none" : ""}`}
                  aria-label={item.title}
                >
                  {!isHovered ? (
                    <span className="absolute bottom-2 left-2 right-12 truncate text-sm font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                      {item.title}
                    </span>
                  ) : null}
                </Link>
              </article>
            );
          })}
        </div>

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
            className="absolute top-0 right-0 z-30 hidden h-full w-12 items-center justify-center bg-gradient-to-l from-white to-transparent text-brand-navy opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        ) : null}
      </div>
    </section>
  );
}
