import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clapperboard, Play, Plus } from "lucide-react";
import { FEATURED_VIDEOS } from "../utils/constants";

const PREVIEW_WIDTH = 360;

export default function TrendingNow({ title = "In rotation", items = FEATURED_VIDEOS }) {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const hoverTimer = useRef(null);
  const leaveTimer = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const closePreview = () => {
    window.clearTimeout(hoverTimer.current);
    window.clearTimeout(leaveTimer.current);
    setPreview(null);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    updateScrollState();

    const onScroll = () => {
      updateScrollState();
      closePreview();
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
      window.clearTimeout(leaveTimer.current);
    };
  }, []);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    closePreview();
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
    closePreview();
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

  const openPreview = (item, index, target) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const poster = target.querySelector("[data-poster]") || target;
    const rect = poster.getBoundingClientRect();
    window.clearTimeout(leaveTimer.current);
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setPreview({ item, index, rect });
    }, 260);
  };

  const scheduleClose = () => {
    window.clearTimeout(hoverTimer.current);
    window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setPreview(null), 160);
  };

  return (
    <section className="relative bg-brand-light pt-4 pb-16 sm:pt-6 sm:pb-20">
      <div className="mx-auto mb-8 flex max-w-[1600px] items-end justify-between px-5 sm:mb-10 sm:px-8 lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-navy/30">02</span>
            <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">In rotation</p>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-4xl">
            {title}
          </h2>
        </div>
        <Link
          to="/videos"
          className="hidden text-sm font-medium text-brand-navy/45 transition hover:text-brand-navy sm:inline"
        >
          View all films
        </Link>
      </div>

      <div className="group/row relative">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
            className="absolute top-0 left-0 z-20 hidden h-full w-16 items-center justify-center bg-gradient-to-r from-brand-light via-brand-light/80 to-transparent text-brand-navy opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/55 backdrop-blur-md">
              <ChevronLeft className="h-6 w-6" />
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
          className={`scrollbar-none flex gap-3 overflow-x-auto px-5 pt-2 pb-10 sm:gap-4 sm:px-8 lg:gap-5 lg:px-12 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {items.map((item, index) => (
            <Link
              key={item.id}
              to={`/videos/${item.id}`}
              draggable={false}
              onMouseEnter={(event) => openPreview(item, index, event.currentTarget)}
              onMouseLeave={scheduleClose}
              className="group/card relative flex w-[168px] shrink-0 cursor-pointer items-end sm:w-[200px] lg:w-[228px]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -left-1 z-10 select-none font-heading text-[88px] font-black leading-none tracking-tighter sm:-left-2 sm:text-[112px] lg:text-[128px]"
                style={{
                  WebkitTextStroke: "3px #042455",
                  color: "#F5F7FA",
                }}
              >
                {index + 1}
              </span>

              <div
                data-poster
                className="relative ml-7 aspect-[2/3] w-full overflow-hidden rounded-xl bg-brand-surface ring-1 ring-black/10 sm:ml-9"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="font-heading text-[13px] font-semibold text-white sm:text-sm">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-white/55">{item.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
            className="absolute top-0 right-0 z-20 hidden h-full w-16 items-center justify-center bg-gradient-to-l from-brand-light via-brand-light/80 to-transparent text-brand-navy opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 sm:flex"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/55 backdrop-blur-md">
              <ChevronRight className="h-6 w-6" />
            </span>
          </button>
        ) : null}
      </div>

      {preview ? (
        <HoverPreview
          item={preview.item}
          anchor={preview.rect}
          onMouseEnter={() => {
            window.clearTimeout(leaveTimer.current);
            window.clearTimeout(hoverTimer.current);
          }}
          onMouseLeave={scheduleClose}
        />
      ) : null}
    </section>
  );
}

function HoverPreview({ item, anchor, onMouseEnter, onMouseLeave }) {
  const navigate = useNavigate();
  const left = Math.min(
    Math.max(anchor.left + anchor.width / 2 - PREVIEW_WIDTH / 2, 16),
    window.innerWidth - PREVIEW_WIDTH - 16,
  );
  const top = Math.min(Math.max(anchor.top - 18, 80), window.innerHeight - 420);

  return createPortal(
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed z-[90] overflow-hidden rounded-xl bg-black shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
      style={{ left, top, width: PREVIEW_WIDTH }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-brand-dark">
        <img src={item.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="px-4 pt-3 pb-4">
        <h3 className="font-heading text-lg font-bold leading-tight text-white">{item.title}</h3>
        <p className="mt-1.5 text-[13px] text-white/55">{item.client}</p>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(`/videos/${item.id}`)}
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-black transition hover:bg-white/90"
          >
            <Play className="h-4 w-4" fill="currentColor" />
            Watch film
          </button>
          <Link
            to={`/videos/${item.id}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
            aria-label="View details"
          >
            <Clapperboard className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
            aria-label="Start a project"
          >
            <Plus className="h-5 w-5" />
          </Link>
        </div>

        <p className="mt-3 text-[13px] font-medium text-white/70">
          {item.category} · {item.year} · {item.duration}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[11px] text-white/80">
          <span className="rounded-full border border-white/25 px-2 py-0.5 font-semibold tracking-wide uppercase">
            {item.industry}
          </span>
        </div>

        <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-white/85">{item.description}</p>
      </div>
    </div>,
    document.body,
  );
}
