import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '../../data/projects';
import ImageModal from '../../components/ImageModal';

export default function ProjectDetailPage() {
  const [selectedImage, setSelectedImage] = useState<{url: string; title: string} | null>(null);
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find(
    (p) => String(p.id) === String(id) || p.slug === id
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="container mx-auto">
          <p className="text-accent">Project not found.</p>
          <Link href="/" className="text-primary hover:underline">← Back to portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{project.name} – Case Study</title>
      </Head>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-8">
          {project.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase text-accent mb-2">Company</div>
                <div className="bg-ls-gray-100 rounded-lg p-4 text-secondary">{project.name}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-accent mb-2">Category</div>
                <div className="bg-ls-gray-100 rounded-lg p-4 text-secondary">{project.category}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-accent mb-2">Timeline</div>
                <div className="bg-ls-gray-100 rounded-lg p-4 text-secondary">{project.timeline}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-accent mb-2">Project Date</div>
                <div className="bg-ls-gray-100 rounded-lg p-4 text-secondary">{project.projectDate}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-accent mb-2">Focus Areas</div>
                <div className="bg-ls-gray-100 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.focusAreas.map((area) => (
                      <span key={area} className="px-3 py-1 text-sm rounded-full bg-white border border-ls-gray-200 text-secondary">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase text-accent mb-2">Services we provided</div>
                <div className="bg-ls-gray-100 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span key={s} className="px-3 py-1 text-sm rounded-full bg-white border border-ls-gray-200 text-secondary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-3">
            {/* Hero images */}
            <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                {(project.heroImage || project.name === 'JobProgress') ? (
                  <img
                    src={project.heroImage || '/project-jobprogress.jpg'}
                    alt={`${project.name} Hero Image`}
                    className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage({
                      url: project.heroImage || '/project-jobprogress.jpg',
                      title: `${project.name} Hero Image`
                    })}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-ls-gray-100 to-ls-gray-200 flex items-center justify-center">
                    <span className="text-accent">Project hero coming soon</span>
                  </div>
                )}
              </div>
            </div>

            {/* About */}
            <div className="mt-10 mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
                About the Project
              </h2>
              <p className="text-secondary/80 text-lg leading-relaxed max-w-3xl">
                {project.about}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-md bg-ls-gray-100 text-secondary border border-ls-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Sections */}
            <div className="space-y-16">
              {/* Requirement */}
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Requirement</h2>
                <p className="text-accent text-lg leading-relaxed">
                  {project.requirement || "Requirement details coming soon..."}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Challenges</h2>
                <p className="text-accent text-lg leading-relaxed">
                  {project.challenges || "Challenge details coming soon..."}
                </p>
              </div>

              {/* How we convert the problem to the solution */}
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">How we convert the problem to the solution</h2>
                <p className="text-accent text-lg leading-relaxed">
                  {project.solutions || "Solution details coming soon..."}
                </p>
              </div>

              {/* Onboarding Experience */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-secondary mb-8">Onboarding Experience</h2>
                <div className="space-y-6">
                  {/* Onboarding Step 1 */}
                  <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={`/project-${project.slug}-onboarding1.jpg`}
                        alt={`${project.name} Onboarding Step 1`}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          url: `/project-${project.slug}-onboarding1.jpg`,
                          title: `${project.name} Onboarding Step 1`
                        })}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-secondary">Initial Setup</h3>
                      <p className="text-accent mt-1">Quick and easy account creation process</p>
                    </div>
                  </div>

                  {/* Onboarding Step 2 */}
                  <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={`/project-${project.slug}-onboarding2.jpg`}
                        alt={`${project.name} Onboarding Step 2`}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          url: `/project-${project.slug}-onboarding2.jpg`,
                          title: `${project.name} Onboarding Step 2`
                        })}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-secondary">Profile Configuration</h3>
                      <p className="text-accent mt-1">Customize your workspace preferences</p>
                    </div>
                  </div>

                  {/* Onboarding Step 3 */}
                  <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={`/project-${project.slug}-onboarding3.jpg`}
                        alt={`${project.name} Onboarding Step 3`}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          url: `/project-${project.slug}-onboarding3.jpg`,
                          title: `${project.name} Onboarding Step 3`
                        })}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-secondary">Ready to Go</h3>
                      <p className="text-accent mt-1">Start managing your projects efficiently</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Project Images */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-secondary mb-8">Project Highlights</h2>
                <div className="space-y-6">
                  {/* Image 1 */}
                  <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={`/project-${project.slug}-highlight1.jpg`}
                        alt={`${project.name} Highlight 1`}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          url: `/project-${project.slug}-highlight1.jpg`,
                          title: `${project.name} Highlight 1`
                        })}
                      />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={`/project-${project.slug}-highlight2.jpg`}
                        alt={`${project.name} Highlight 2`}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          url: `/project-${project.slug}-highlight2.jpg`,
                          title: `${project.name} Highlight 2`
                        })}
                      />
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="relative rounded-xl overflow-hidden border border-ls-gray-200 bg-white p-6">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                      <img
                        src={`/project-${project.slug}-highlight3.jpg`}
                        alt={`${project.name} Highlight 3`}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          url: `/project-${project.slug}-highlight3.jpg`,
                          title: `${project.name} Highlight 3`
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Views - Only show for JobProgress */}
            {project.name === 'JobProgress' && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-secondary mb-8">Mobile Experience</h2>
                <div className="space-y-6">
                  <div className="flex justify-center items-center gap-4">
                    {/* Phone 1 - Job Status */}
                    <button 
                      onClick={() => setSelectedImage({
                        url: '/project-jobprogress-mobile1.jpg',
                        title: 'JobProgress Mobile - Job Status'
                      })}
                      className="relative w-[200px] aspect-[9/19] bg-ls-gray-900 rounded-xl overflow-hidden p-1.5 shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <div className="absolute inset-0 m-1.5 rounded-lg overflow-hidden">
                        <img
                          src="/project-jobprogress-mobile1.jpg"
                          alt="JobProgress Mobile - Job Status"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </button>

                    {/* Phone 2 - Customer Management */}
                    <button
                      onClick={() => setSelectedImage({
                        url: '/project-jobprogress-mobile2.jpg',
                        title: 'JobProgress Mobile - Customer Management'
                      })}
                      className="relative w-[200px] aspect-[9/19] bg-ls-gray-900 rounded-xl overflow-hidden p-1.5 shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <div className="absolute inset-0 m-1.5 rounded-lg overflow-hidden">
                        <img
                          src="/project-jobprogress-mobile2.jpg"
                          alt="JobProgress Mobile - Customer Management"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </button>

                    {/* Phone 3 - Photo Documentation */}
                    <button
                      onClick={() => setSelectedImage({
                        url: '/project-jobprogress-mobile3.jpg',
                        title: 'JobProgress Mobile - Photo Documentation'
                      })}
                      className="relative w-[200px] aspect-[9/19] bg-ls-gray-900 rounded-xl overflow-hidden p-1.5 shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <div className="absolute inset-0 m-1.5 rounded-lg overflow-hidden">
                        <img
                          src="/project-jobprogress-mobile3.jpg"
                          alt="JobProgress Mobile - Photo Documentation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </button>
                  </div>

                  {/* Feature Labels */}
                  <div className="flex justify-center gap-4 text-center px-4">
                    <div className="w-[200px]">
                      <h4 className="text-sm font-medium text-secondary">Job Status</h4>
                      <p className="text-xs text-accent mt-1">Real-time updates and tracking</p>
                    </div>
                    <div className="w-[200px]">
                      <h4 className="text-sm font-medium text-secondary">Customer Portal</h4>
                      <p className="text-xs text-accent mt-1">Client management and communication</p>
                    </div>
                    <div className="w-[200px]">
                      <h4 className="text-sm font-medium text-secondary">Field Documentation</h4>
                      <p className="text-xs text-accent mt-1">Photos and signatures on-site</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10">
              <Link href="/" className="text-primary hover:underline">← Back to portfolio</Link>
            </div>

            {/* Image Modal */}
            <ImageModal
              isOpen={!!selectedImage}
              onClose={() => setSelectedImage(null)}
              imageUrl={selectedImage?.url || ''}
              title={selectedImage?.title || ''}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
