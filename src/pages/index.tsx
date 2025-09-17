import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCategories from '../components/ProjectCategories';
import ProjectGrid from '../components/ProjectGrid';
import Testimonial from '../components/Testimonial';
import { projects } from '../data/projects';

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'UX Design',
    'Mobile App',
    'Enterprise Software',
    'Cloud',
    'AI & ML'
  ];

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategories = selectedCategories.length === 0 || 
      project.tags.some(tag => selectedCategories.includes(tag));
    
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategories && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Logiciel Solutions - UX Portfolio</title>
        <meta name="description" content="Explore our UX/UI design portfolio showcasing innovative solutions across various industries" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero onSearch={handleSearch} />
        
        <ProjectCategories 
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
        />
        
        <ProjectGrid projects={filteredProjects} />
        <Testimonial />
      </main>
    </div>
  );
}