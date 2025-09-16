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
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 items-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryToggle(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-colors duration-200 ease-in-out
                ${
                  selectedCategories.includes(category)
                    ? 'bg-primary text-white'
                    : 'bg-ls-gray-100 text-secondary hover:bg-ls-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
          
          {selectedCategories.length > 0 && (
            <button
              onClick={() => selectedCategories.forEach(cat => onCategoryToggle(cat))}
              className="px-4 py-2 rounded-full text-sm font-medium text-accent 
                hover:text-primary transition-colors duration-200 ease-in-out"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
