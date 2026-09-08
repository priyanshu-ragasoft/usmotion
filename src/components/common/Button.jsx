import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-red text-white shadow-[0_10px_28px_rgba(226,16,27,0.28)] hover:bg-[#c50e18] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(226,16,27,0.38)]",
  secondary:
    "bg-white/5 text-white border border-white/20 backdrop-blur-sm hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5",
};

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
