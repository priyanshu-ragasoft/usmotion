export default function BottomCurve({ className = "", fill = "#F5F7FA" }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[72px] w-full sm:h-24 lg:h-[110px] ${className}`}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 110 V78 Q780 8 1440 74 V110 Z" fill={fill} />
    </svg>
  );
}
