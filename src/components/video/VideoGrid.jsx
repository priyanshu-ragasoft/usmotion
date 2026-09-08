import VideoCard from "./VideoCard";

export default function VideoGrid({ items }) {
  if (!items.length) {
    return (
      <p className="py-16 text-center text-sm text-brand-muted">
        No projects found in this category yet. Browse all films from the catalogue.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="min-w-0">
          <VideoCard item={item} variant="landscape" className="block w-full" />
        </div>
      ))}
    </div>
  );
}
