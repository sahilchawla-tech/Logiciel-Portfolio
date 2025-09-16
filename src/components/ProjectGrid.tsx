import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProjectPlaceholder from './ProjectPlaceholder';

interface Project {
  id: number;
  name: string;
  mainGoal: string;
  categories: string[];
  imageUrl: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-accent">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-lg 
                  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="relative h-64">
                    <ProjectPlaceholder 
                      name={project.name}
                      className="absolute inset-0 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary mb-2 
                      group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-accent mb-4">
                      {project.mainGoal}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 text-sm rounded-full bg-ls-gray-100 
                            text-secondary"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
