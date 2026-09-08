import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import Logo from "../common/Logo";
import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  const inputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const searchRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
    closeSearch();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        closeMenu();
        setSearchOpen((open) => !open);
        return;
      }

      if (event.key === "Escape") {
        closeMenu();
        closeSearch();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!searchOpen) return undefined;

    const timer = window.setTimeout(() => {
      (mobileInputRef.current || inputRef.current)?.focus();
    }, 80);

    const onPointerDown = (event) => {
      if (!searchRef.current?.contains(event.target)) closeSearch();
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [searchOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    const nextQuery = query.trim();
    navigate(nextQuery ? `/videos?q=${encodeURIComponent(nextQuery)}` : "/videos");
    closeSearch();
    closeMenu();
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 z-50 w-full px-3 pt-[calc(env(safe-area-inset-top)+10px)] sm:px-5 sm:pt-5"
      >
        <div ref={searchRef} className="mx-auto max-w-[1180px]">
          <div
            className={`flex items-center justify-between gap-3 overflow-visible rounded-full bg-white px-3 py-2 transition-all duration-500 sm:px-4 ${
              scrolled
                ? "border border-[#9ca3af] bg-white shadow-[0_12px_40px_rgba(4,36,85,0.18)]"
                : "border border-transparent bg-white/95 shadow-none backdrop-blur-xl"
            }`}
          >
            <Logo size="md" />

            <nav
              className="relative hidden items-center gap-0.5 rounded-full bg-black/[0.04] p-1 xl:flex"
              aria-label="Primary"
              onMouseLeave={() => setHoverIndex(null)}
            >
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onMouseEnter={() => setHoverIndex(index)}
                  className={({ isActive }) =>
                    `relative z-10 rounded-full px-4 py-2 font-heading text-[12.5px] font-semibold tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white" : "text-brand-navy/70 hover:text-brand-navy"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-pill-active"
                          className="absolute inset-0 -z-10 rounded-full bg-brand-red"
                          transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        />
                      ) : null}
                      {!isActive && hoverIndex === index ? (
                        <motion.span
                          layoutId="nav-pill-hover"
                          className="absolute inset-0 -z-10 rounded-full bg-black/6"
                          transition={{ type: "spring", stiffness: 500, damping: 36 }}
                        />
                      ) : null}
                      {link.label}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              {searchOpen ? (
                <form
                  role="search"
                  onSubmit={submitSearch}
                  className="hidden h-10 w-56 items-center rounded-full border border-black/10 bg-brand-light pl-3 pr-1 focus-within:border-brand-navy/25 xl:flex"
                >
                  <Search className="h-4 w-4 shrink-0 text-brand-muted" />
                  <input
                    ref={inputRef}
                    type="text"
                    autoComplete="off"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search..."
                    className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm text-brand-navy outline-none placeholder:text-brand-muted focus:outline-none focus-visible:outline-none"
                    aria-label="Search videos, clients, and categories"
                  />
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-brand-navy/50 transition hover:bg-black/5 hover:text-brand-navy"
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </form>
              ) : null}

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setSearchOpen((open) => !open);
                }}
                className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-colors ${
                  searchOpen
                    ? "border-brand-navy/20 bg-brand-light text-brand-navy xl:hidden"
                    : "border-black/10 text-brand-navy/80 hover:border-brand-navy/25 hover:text-brand-navy"
                }`}
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
              >
                {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
              </button>

              <Link
                to="/contact"
                className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-red px-5 py-2.5 font-heading text-[11px] font-bold tracking-[0.14em] text-white uppercase transition duration-300 hover:bg-[#c50e18] md:inline-flex"
              >
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  closeSearch();
                  setIsOpen((prev) => !prev);
                }}
                className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-brand-light text-brand-navy xl:hidden"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <span className="relative flex h-3.5 w-4 flex-col justify-between">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-[1.5px] w-full origin-center rounded-full bg-brand-navy"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="h-[1.5px] w-full rounded-full bg-brand-navy"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-[1.5px] w-full origin-center rounded-full bg-brand-navy"
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {searchOpen ? (
              <motion.form
                role="search"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={submitSearch}
                className="mt-2 flex h-12 items-center rounded-full border border-black/8 bg-white px-4 shadow-[0_10px_30px_rgba(4,36,85,0.1)] xl:hidden"
              >
                <Search className="h-4 w-4 shrink-0 text-brand-muted" />
                <input
                  ref={mobileInputRef}
                  type="text"
                  autoComplete="off"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search films, clients, categories"
                  className="h-full min-w-0 flex-1 bg-transparent px-3 text-[15px] text-brand-navy outline-none placeholder:text-brand-muted focus:outline-none focus-visible:outline-none"
                  aria-label="Search videos, clients, and categories"
                />
                <button
                  type="submit"
                  className="text-[11px] font-bold tracking-[0.14em] text-brand-navy/50 uppercase"
                >
                  Go
                </button>
              </motion.form>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm xl:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-[70] flex h-[100dvh] w-[min(100%,22rem)] flex-col bg-white xl:hidden sm:border-l sm:border-black/8"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex h-16 items-center justify-between border-b border-black/8 px-5 pt-[env(safe-area-inset-top)]">
                <Logo size="sm" asLink={false} />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-navy/60 transition-colors hover:bg-black/5 hover:text-brand-navy"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col overflow-y-auto px-3 py-3">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + index * 0.03, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex min-h-11 items-center justify-between rounded-xl px-3.5 py-2.5 text-[15px] font-medium tracking-wide transition-colors ${
                          isActive
                            ? "bg-brand-light text-brand-navy"
                            : "text-brand-navy/65 active:bg-brand-light active:text-brand-navy"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          <span
                            className={`h-1 w-1 rounded-full ${isActive ? "bg-brand-red" : "bg-transparent"}`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-black/8 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-[11px] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#c50e18]"
                >
                  Start a Project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
