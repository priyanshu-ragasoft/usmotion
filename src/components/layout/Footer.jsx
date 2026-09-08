import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../common/Logo";
import { NAV_LINKS } from "../../utils/constants";

const COMPANY_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M22.5 7.2a3.1 3.1 0 0 0-2.2-2.2C18.4 4.6 12 4.6 12 4.6s-6.4 0-8.3.4A3.1 3.1 0 0 0 1.5 7.2 32 32 0 0 0 1.1 12a32 32 0 0 0 .4 4.8 3.1 3.1 0 0 0 2.2 2.2c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.1 3.1 0 0 0 2.2-2.2 32 32 0 0 0 .4-4.8 32 32 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6.5 9H4V20h2.5V9ZM5.3 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V20H11s.1-9.3 0-10.3h2.5v1.5c.4-.7 1.3-1.8 3.2-1.8 2.4 0 4.1 1.5 4.1 4.8V20Z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "+1 (323) 555-0148",
    sub: "Talk to the studio",
    href: "tel:+13235550148",
  },
  {
    icon: Mail,
    label: "hello@usmotion.studio",
    sub: "Drop us an email",
    href: "mailto:hello@usmotion.studio",
  },
  {
    icon: MapPin,
    label: "Los Angeles · Worldwide",
    sub: "Production across cities",
    href: "https://maps.google.com",
  },
];

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-[0.22em] text-white">{title}</h3>
      <span className="mt-2 block h-[2px] w-8 bg-brand-red" />
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              <span className="text-brand-red transition-transform duration-300 group-hover:translate-x-0.5">›</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-dark">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-red/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Premium video production and cinematic storytelling for brands that want to be seen.
            </p>
          </div>

          <FooterLinkList title="EXPLORE" links={NAV_LINKS} />
          <FooterLinkList title="STUDIO" links={COMPANY_LINKS} />

          <div>
            <h3 className="text-xs font-bold tracking-[0.22em] text-white">CONNECT</h3>
            <span className="mt-2 block h-[2px] w-8 bg-brand-red" />

            <div className="mt-5 flex flex-wrap gap-2.5">
              {SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <form onSubmit={handleSubscribe} className="mt-6 max-w-xs">
              <div className="relative flex items-center rounded-full border border-white/15 bg-white/5 pr-1.5 transition-colors focus-within:border-brand-red/60">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition hover:bg-[#c50e18]"
                >
                  <ArrowRight size={15} strokeWidth={2} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-10">
          <h4 className="text-xs font-bold tracking-[0.22em] text-white">CONTACT</h4>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;

              return (
                <a key={item.label} href={item.href} className="group flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-white/45 group-hover:text-white/70">{item.sub}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-5 py-5 text-xs text-white/40 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} US Motion Studio. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/contact" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-brand-dark text-white/70 shadow-lg transition hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red hover:text-white"
      >
        <ArrowUp size={18} strokeWidth={2} />
      </button>
    </footer>
  );
}
