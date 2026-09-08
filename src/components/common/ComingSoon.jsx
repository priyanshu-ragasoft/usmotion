import { Clapperboard } from "lucide-react";
import Button from "./Button";

export default function ComingSoon({
  title,
  description = "This chapter of the studio is being crafted with the same care as the films.",
  eyebrow = "IN PRODUCTION",
  fullPage = true,
  showHomeLink = true,
  showProjectLink = true,
  tone = "dark",
}) {
  const isLight = tone === "light";

  return (
    <section
      className={`relative isolate overflow-hidden ${
        isLight ? "bg-brand-light text-brand-text" : "bg-brand-dark text-white"
      } ${fullPage ? "min-h-[100svh] pt-28" : "py-24 sm:py-32"}`}
    >
      {isLight ? null : (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(4,36,85,0.35),_transparent_58%)]" />
      )}

      <div className="relative mx-auto flex min-h-[58vh] w-full max-w-[760px] flex-col items-center justify-center px-5 py-10 text-center sm:px-6 sm:py-16">
        <div
          className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full border sm:mb-8 sm:h-16 sm:w-16 ${
            isLight ? "border-black/10 bg-white" : "border-white/10 bg-white/5"
          }`}
        >
          <Clapperboard className="text-brand-red" size={20} strokeWidth={1.5} />
        </div>

        <p className="text-[10px] font-semibold tracking-[0.32em] text-brand-red sm:text-[11px] sm:tracking-[0.38em]">{eyebrow}</p>
        <h1
          className={`mt-3 font-heading text-[1.65rem] font-extrabold leading-[1.15] text-balance sm:mt-5 sm:text-5xl md:text-6xl ${
            isLight ? "text-brand-navy" : "text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-3 max-w-lg text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg ${
            isLight ? "text-brand-muted" : "text-white/55"
          }`}
        >
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {showHomeLink ? (
            <Button to="/" variant="secondary">
              Back to Home
            </Button>
          ) : null}
          {showProjectLink ? <Button to="/contact">Start a Project</Button> : null}
        </div>
      </div>
    </section>
  );
}
