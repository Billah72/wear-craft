import useData from "../../../hooks/useData";

export default function HomeCategory() {

    const {categories} = useData()
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="sr-only">Categories</h2>

      {/* Responsive grid: 2 cols on xs, 3 on sm, 4 on md, 6 on lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <article
            key={cat.id ?? idx} /* if your JSON has id use it, otherwise index fallback */
            className="bg-gray-100 rounded-xl p-4 flex flex-col items-center text-center hover:shadow transition-shadow"
            aria-label={cat?.name ?? `category-${idx}`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3">
              <img
                src={cat?.image}
                alt={cat?.name ?? "category image"}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-sm font-medium text-gray-700 truncate w-full">{cat?.name}</p>
            <p className="text-xs text-gray-500">{(cat?.items ?? 0) + " items"}</p>
          </article>
        ))}
      </div>

      {/* Helpful hint for very large lists */}
      {categories.length > 24 && (
        <p className="mt-4 text-xs text-gray-500">Showing {categories.length} categories — consider pagination for better UX.</p>
      )}
    </section>
  );
}
