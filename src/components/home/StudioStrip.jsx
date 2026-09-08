import { STUDIO_PILLARS } from "../../utils/constants";

export default function StudioStrip() {
  return (
    <section className="border-y border-white/10 bg-[#07090f]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 md:justify-between md:px-10 md:py-7">
        {STUDIO_PILLARS.map((item) => (
          <p
            key={item}
            className="font-heading text-[11px] font-semibold tracking-[0.28em] text-white/55 uppercase sm:text-xs"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
