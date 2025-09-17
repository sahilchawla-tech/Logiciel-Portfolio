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
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-16 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 tracking-tight flex flex-col gap-4">
            <span>Transforming Ideas into</span>
            <span className="text-primary">Exceptional Experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl text-accent mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of innovative UX/UI design solutions that help businesses 
            create meaningful digital experiences.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our projects..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-4 pl-12 rounded-lg bg-white border border-ls-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    placeholder-ls-gray-400 text-secondary shadow-sm hover:shadow-md transition-shadow duration-300"
                />
                <MagnifyingGlassIcon 
                  className="h-6 w-6 text-ls-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
