import { Link } from "react-router-dom";

const sizes = {
  sm: "h-11 max-w-[190px] sm:h-12 sm:max-w-[220px]",
  md: "h-12 max-w-[220px] sm:h-[3.25rem] sm:max-w-[250px] lg:h-14 lg:max-w-[280px]",
  lg: "h-16 max-w-[280px] sm:h-[4.5rem] sm:max-w-[340px] lg:h-20 lg:max-w-[380px]",
};

export default function Logo({ compact = false, size = "md", asLink = true }) {
  const image = (
    <img
      src="/logo1.png"
      alt="US Motion Studio"
      className={`w-auto object-contain object-left ${compact ? sizes.sm : sizes[size]}`}
    />
  );

  if (!asLink) {
    return <div className="flex min-w-0 shrink-0 items-center">{image}</div>;
  }

  return (
    <Link
      to="/"
      className="flex min-w-0 shrink-0 items-center focus-visible:outline-none"
      aria-label="US Motion Studio home"
    >
      {image}
    </Link>
  );
}
