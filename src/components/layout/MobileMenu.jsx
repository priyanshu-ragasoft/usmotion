import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Search, X } from "lucide-react";
import Button from "../common/Button";
import Logo from "../common/Logo";

export default function MobileMenu({ open, onClose, links, onSearch }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[70] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close menu"
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute inset-y-0 right-0 flex h-[100dvh] w-[min(100vw,380px)] flex-col border-l border-white/10 bg-brand-navy/95 pt-[env(safe-area-inset-top)] shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Logo compact />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `min-h-12 rounded-xl px-4 py-3.5 text-base font-medium tracking-wide transition ${
                  isActive
                    ? "bg-white/10 text-white shadow-[inset_3px_0_0_#e2101b]"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-3 border-t border-white/10 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => {
              onClose();
              onSearch();
            }}
            className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-white/15 px-4 py-3 text-left text-white/90 transition hover:bg-white/5"
          >
            <Search size={18} />
            Search videos, clients, categories...
          </button>
          <Button to="/contact" className="min-h-12 w-full" onClick={onClose}>
            Start a Project
          </Button>
        </div>
      </aside>
    </div>
  );
}
