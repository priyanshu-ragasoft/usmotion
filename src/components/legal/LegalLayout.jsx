import { Link, useLocation } from "react-router-dom";
import Container from "../common/Container";

const DOCUMENTS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export default function LegalLayout({ title, updated, intro, contents = [], children }) {
  const { pathname } = useLocation();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(226,16,27,0.18),transparent_42%)]" />
        <Container className="relative py-14 sm:py-16 lg:py-20">
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Official documents</p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-[14ch] font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              {title}
            </h1>
            <dl className="grid gap-4 text-sm sm:grid-cols-3 lg:min-w-[28rem]">
              <div>
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-white/35 uppercase">Effective</dt>
                <dd className="mt-1 text-white/80">{updated}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-white/35 uppercase">Version</dt>
                <dd className="mt-1 text-white/80">1.0</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-white/35 uppercase">Issuer</dt>
                <dd className="mt-1 text-white/80">US Motion Studio</dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex gap-1 rounded-full border border-white/12 bg-white/5 p-1 w-fit">
            {DOCUMENTS.map((doc) => {
              const active = pathname === doc.to;
              return (
                <Link
                  key={doc.to}
                  to={doc.to}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    active ? "bg-white text-brand-navy" : "text-white/60 hover:text-white"
                  }`}
                >
                  {doc.label}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-light py-12 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-brand-navy/35 uppercase">Contents</p>
            <ol className="mt-4 space-y-1">
              {contents.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex gap-3 rounded-lg px-2 py-1.5 text-[13px] text-brand-muted transition hover:bg-white hover:text-brand-navy"
                  >
                    <span className="font-heading text-[10px] font-bold tracking-wider text-brand-red/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="rounded-[1.5rem] border border-black/6 bg-white px-6 py-10 shadow-[0_24px_60px_-36px_rgba(4,36,85,0.28)] sm:px-10 sm:py-12 lg:px-14">
            {intro ? (
              <p className="border-b border-black/6 pb-8 text-[17px] leading-[1.75] text-brand-navy/80">{intro}</p>
            ) : null}
            <div className={intro ? "mt-10 space-y-0" : "space-y-0"}>{children}</div>
          </article>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-black/6 py-10 first:border-t-0 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-red">{number}</span>
        <h2 className="font-heading text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 text-[15.5px] leading-[1.8] text-brand-navy/70 [&_a]:font-semibold [&_a]:text-brand-navy [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:font-semibold [&_strong]:text-brand-navy [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function LegalFooterNote({ children }) {
  return (
    <div className="mt-10 rounded-2xl bg-brand-light px-6 py-5 text-sm leading-relaxed text-brand-muted">{children}</div>
  );
}
