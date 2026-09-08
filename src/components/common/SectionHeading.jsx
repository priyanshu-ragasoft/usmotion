import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  actionTo,
  actionLabel,
  align = "left",
  tone = "dark",
}) {
  const isLight = tone === "light";
  const centered = align === "center";

  const resolvedAction =
    action ??
    (actionTo && actionLabel ? (
      <Link
        to={actionTo}
        className={`group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition ${
          isLight ? "text-white/50 hover:text-white" : "text-brand-navy/45 hover:text-brand-navy"
        }`}
      >
        {actionLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    ) : null);

  return (
    <div
      className={`mb-10 flex flex-col gap-6 sm:mb-14 ${
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={centered ? "max-w-3xl" : "max-w-3xl"}>
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          {index ? (
            <span className={`font-heading text-[11px] font-semibold tracking-[0.28em] ${isLight ? "text-white/35" : "text-brand-navy/30"}`}>
              {index}
            </span>
          ) : null}
          {eyebrow ? (
            <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">{eyebrow}</p>
          ) : null}
        </div>
        <h2
          className={`mt-3 font-heading text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
            isLight ? "text-white" : "text-brand-navy"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p className={`mt-4 max-w-xl text-[15px] leading-relaxed ${isLight ? "text-white/55" : "text-brand-muted"}`}>
            {description}
          </p>
        ) : null}
      </div>
      {resolvedAction ? <div className="shrink-0 pb-1">{resolvedAction}</div> : null}
    </div>
  );
}
