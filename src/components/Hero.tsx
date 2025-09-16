import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <section className="py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          Transforming Ideas into
          <span className="text-primary"> Exceptional Experiences</span>
        </h1>
        
        <p className="text-lg md:text-xl text-accent mb-12 max-w-2xl mx-auto">
          Explore our portfolio of innovative UX/UI design solutions that help businesses 
          create meaningful digital experiences.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-ls-gray-300 
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                placeholder-ls-gray-400 text-secondary"
            />
            <MagnifyingGlassIcon 
              className="h-6 w-6 text-ls-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
