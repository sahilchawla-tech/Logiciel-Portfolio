import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCategories from '../components/ProjectCategories';
import ProjectGrid from '../components/ProjectGrid';

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Fintech',
    'SaaS',
    'Healthcare',
    'Real Estate'
  ];

  // Sample project data
  const projects = [
    {
      id: 1,
      name: 'Digital Banking Platform',
      mainGoal: 'Redesign the mobile banking experience to improve user engagement and increase daily active users by 45%',
      categories: ['Fintech', 'SaaS'],
      imageUrl: '/project-banking.jpg',
    },
    {
      id: 2,
      name: 'Healthcare Patient Portal',
      mainGoal: 'Create an intuitive patient portal that simplifies appointment scheduling and medical record access',
      categories: ['Healthcare', 'SaaS'],
      imageUrl: '/project-healthcare.jpg',
    },
    {
      id: 3,
      name: 'Real Estate Property Manager',
      mainGoal: 'Design a comprehensive platform for property managers to streamline tenant communications and maintenance requests',
      categories: ['Real Estate', 'SaaS'],
      imageUrl: '/project-realestate.jpg',
    },
    {
      id: 4,
      name: 'Investment Analytics Dashboard',
      mainGoal: 'Develop a data visualization dashboard that helps investors track and analyze their portfolio performance',
      categories: ['Fintech', 'SaaS'],
      imageUrl: '/project-investment.jpg',
    },
    {
      id: 5,
      name: 'Telemedicine Platform',
      mainGoal: 'Build a user-friendly telemedicine solution that connects patients with healthcare providers remotely',
      categories: ['Healthcare', 'SaaS'],
      imageUrl: '/project-telemedicine.jpg',
    },
    {
      id: 6,
      name: 'Property Listing Platform',
      mainGoal: 'Create an engaging property search experience with advanced filters and virtual tour capabilities',
      categories: ['Real Estate', 'SaaS'],
      imageUrl: '/project-listing.jpg',
    }
  ];

  const handleCategoryToggle = (category: string) => {
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
      project.categories.some(cat => selectedCategories.includes(cat));
    
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.mainGoal.toLowerCase().includes(searchQuery.toLowerCase());

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
      </main>
    </div>
  );
}
