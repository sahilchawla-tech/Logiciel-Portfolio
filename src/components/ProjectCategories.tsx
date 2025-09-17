interface ProjectCategoriesProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

export default function ProjectCategories({
  categories,
  selectedCategories,
  onCategoryToggle,
}: ProjectCategoriesProps) {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryToggle(category)}
              className={`
                px-6 py-3 rounded-xl text-sm font-medium
                transition-all duration-300 ease-in-out
                relative overflow-hidden
                group hover:scale-105
                ${
                  category === 'All'
                    ? selectedCategories.length === 0
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-ls-gray-100 text-secondary hover:bg-ls-gray-200'
                    : selectedCategories.includes(category)
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-ls-gray-100 text-secondary hover:bg-ls-gray-200'
                }
              `}
            >
              <span className="relative z-10">{category}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
          
          {selectedCategories.length > 0 && (
            <button
              onClick={() => selectedCategories.forEach(cat => onCategoryToggle(cat))}
              className="px-6 py-3 rounded-xl text-sm font-medium text-ls-gray-300
                hover:text-white transition-all duration-300 ease-in-out
                hover:bg-glass backdrop-blur-sm hover:shadow-glass"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
