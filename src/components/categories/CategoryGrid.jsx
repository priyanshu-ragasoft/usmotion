import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../../utils/constants";

export default function CategoryGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {CATEGORIES.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
