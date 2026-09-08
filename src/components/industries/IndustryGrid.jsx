import IndustryCard from "./IndustryCard";
import { INDUSTRIES } from "../../utils/constants";

export default function IndustryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {INDUSTRIES.map((industry) => (
        <IndustryCard key={industry.slug} industry={industry} />
      ))}
    </div>
  );
}
