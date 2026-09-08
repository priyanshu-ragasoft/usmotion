import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";

export default function VideoRow({ title, items, to = "/categories", variant = "landscape", surface = "white" }) {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dragging, setDragging] = useState(false);

  const isDark = surface === "dark";
  const bgClass = isDark ? "bg-brand-dark" : surface === "light" ? "bg-brand-light" : "bg-white";
  const fadeFrom = isDark ? "from-brand-dark" : surface === "light" ? "from-brand-light" : "from-white";
  const fadeVia = isDark ? "via-brand-dark/80" : surface === "light" ? "via-brand-light/80" : "via-white/80";

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
    <div className={`relative py-8 sm:py-10 ${bgClass}`}>
      <div className="mx-auto mb-5 flex max-w-[1600px] items-end justify-between px-5 sm:px-8 lg:px-12">
        <h3
          className={`font-heading text-xl font-bold tracking-tight sm:text-2xl ${
            isDark ? "text-white" : "text-brand-navy"
          }`}
        >
          {title}
        </h3>
        <Link
          to={to}
          className={`hidden text-sm font-medium transition sm:inline ${
            isDark ? "text-white/45 hover:text-white" : "text-brand-navy/40 hover:text-brand-navy"
          }`}
        >
          View all
        </Link>
      </div>

      <div className="group/row relative">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label={`Scroll ${title} left`}
            className={`absolute top-0 left-0 z-20 hidden h-full w-16 items-center justify-center bg-gradient-to-r ${fadeFrom} ${fadeVia} to-transparent opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm text-brand-navy">
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
          className={`scrollbar-none flex gap-3 overflow-x-auto px-5 pb-2 sm:gap-4 sm:px-8 lg:px-12 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {items.map((item, index) => (
            <VideoCard
              key={`${title}-${item.id}`}
              item={item}
              variant={variant}
              index={index}
              dark={isDark}
            />
          ))}
        </div>

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label={`Scroll ${title} right`}
            className={`absolute top-0 right-0 z-20 hidden h-full w-16 items-center justify-center bg-gradient-to-l ${fadeFrom} ${fadeVia} to-transparent opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm text-brand-navy">
              <ChevronRight className="h-5 w-5" />
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
