import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { videosForRow } from "../../utils/constants";

export default function CategoryRow({ title, ids, surface = "white", categorySlug }) {
  const items = videosForRow(ids);
  const targetCategoryUrl = categorySlug ? `/videos?category=${categorySlug}` : "/videos";

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dragging, setDragging] = useState(false);

  const isLight = surface === "light";
  const bgClass = isLight ? "bg-brand-light" : "bg-white";
  const fadeFrom = isLight ? "from-brand-light" : "from-white";
  const fadeVia = isLight ? "via-brand-light/80" : "via-white/80";

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
    const onScroll = () => updateScrollState();
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
    };
  }, []);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.82, behavior: "smooth" });
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

  return (
    <section className={`relative py-6 sm:py-8 ${bgClass}`}>
      <div className="mx-auto mb-5 flex max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <h3 className="font-heading text-lg font-bold tracking-tight text-brand-navy sm:text-xl">{title}</h3>
        <Link
          to={targetCategoryUrl}
          className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy/60 transition hover:text-brand-red"
        >
          <span>View all</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>

      <div className="group/row relative">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label={`Scroll ${title} left`}
            className={`absolute top-0 left-0 z-20 hidden h-full w-16 items-center justify-center bg-gradient-to-r ${fadeFrom} ${fadeVia} to-transparent text-brand-navy opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm">
              <ChevronLeft className="h-5 w-5" />
            </span>
          </button>
        ) : null}

        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onClickCapture={onClickCapture}
          className={`scrollbar-none flex gap-3 overflow-x-auto px-5 pb-2 sm:gap-4 sm:px-8 lg:px-12 ${dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
          {items.map((item) => (
            <Link
              key={`${title}-${item.id}`}
              to={`/videos/${item.id}`}
              className="group w-[min(78vw,340px)] shrink-0 overflow-hidden rounded-2xl bg-neutral-200 sm:w-[300px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-navy opacity-0 shadow-md transition duration-300 group-hover:opacity-100">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-white/65 uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-0.5 font-heading text-base font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label={`Scroll ${title} right`}
            className={`absolute top-0 right-0 z-20 hidden h-full w-16 items-center justify-center bg-gradient-to-l ${fadeFrom} ${fadeVia} to-transparent text-brand-navy opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm">
              <ChevronRight className="h-5 w-5" />
            </span>
          </button>
        ) : null}
      </div>
    </section>
  );
}
