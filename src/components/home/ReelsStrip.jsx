import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { REELS } from "../../utils/constants";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function ReelCard({ item, index, active, onFocus }) {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const play = () => {
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else video.pause();
      },
      { threshold: 0.35 },
    );

    io.observe(wrap);
    play();

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!active) {
      video.muted = true;
      setSoundOn(false);
    }

    const onTime = () => {
      if (!video.duration) return;
      setProgress(video.currentTime / video.duration);
    };

    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, [active]);

  const toggleSound = (event) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    onFocus();
    video.muted = !video.muted;
    setSoundOn(!video.muted);
  };

  return (
    <article
      ref={wrapRef}
      onMouseEnter={onFocus}
      className={`group relative w-[min(70vw,236px)] shrink-0 snap-center transition duration-500 ease-out sm:w-auto sm:min-w-0 ${
        active ? "z-10 lg:-translate-y-3 lg:scale-[1.06]" : "lg:scale-[0.94] lg:opacity-80"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[1.75rem] bg-[#07101c] p-[6px] shadow-[0_28px_50px_-24px_rgba(4,36,85,0.55)] transition duration-500 ${
          active ? "ring-2 ring-brand-red shadow-[0_30px_60px_-20px_rgba(226,16,27,0.45)]" : "ring-1 ring-black/10"
        }`}
      >
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.4rem] bg-black">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            src={item.video}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-label={item.title}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

          <div className="absolute top-3 right-3 left-3 z-10 flex items-center justify-between">
            <span className="rounded-full bg-black/45 px-2.5 py-1 font-heading text-[10px] font-bold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
              Take 0{index + 1}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-brand-red px-2 py-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase">
              <span className="reel-live-dot h-1.5 w-1.5 rounded-full bg-white" />
              Live
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 p-3.5">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <p className="font-heading text-sm font-bold tracking-wide text-white uppercase">Reel 0{index + 1}</p>
                <div className="reel-bars mt-1.5 flex h-2.5 items-end gap-[3px]">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <button
                type="button"
                onClick={toggleSound}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-brand-navy"
                aria-label={soundOn ? "Mute reel" : "Unmute reel"}
              >
                {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
            </div>
            <div className="h-[2px] overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-brand-red" style={{ width: `${Math.min(progress, 1) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReelsStrip() {
  const [activeId, setActiveId] = useState(REELS[2]?.id ?? REELS[0]?.id);

  return (
    <section className="bg-brand-light pb-20 sm:pb-24">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="In the feed"
          title="From the studio feed."
          description="Hover a frame to bring it forward. Sound stays off until you tap it."
        />
      </Container>

      <div className="scrollbar-none flex snap-x snap-mandatory items-end gap-4 overflow-x-auto px-5 pt-2 pb-8 sm:gap-5 sm:px-8 lg:grid lg:grid-cols-5 lg:items-end lg:gap-5 lg:overflow-visible lg:px-10 lg:pt-6 lg:pb-4">
        {REELS.map((item, index) => (
          <ReelCard
            key={item.id}
            item={item}
            index={index}
            active={activeId === item.id}
            onFocus={() => setActiveId(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
