import Image from 'next/image';
import Link from 'next/link';
import ProjectPlaceholder from './ProjectPlaceholder';

interface Project {
  id: number;
  name: string;
  summary: string;
  tags: string[];
  cardImage?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-accent">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group animate-slide-up"
              >
                <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out group">
                  <div className="relative h-[300px] overflow-hidden">
                    {project.cardImage ? (
                      <img
                        src={project.cardImage}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-ls-gray-100 to-ls-gray-200 flex items-center justify-center">
                        <span className="text-accent">{project.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col flex-grow p-6">
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold text-primary mb-2">
                        {project.name}
                      </h2>
                      <h3 className="text-2xl font-bold text-secondary mb-4">
                        {project.summary}
                      </h3>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((category) => (
                          <span
                            key={category}
                            className="px-3 py-1 text-sm rounded-md bg-ls-gray-100 text-secondary whitespace-nowrap"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}