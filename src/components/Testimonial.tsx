export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">How Did We Transform</span>{' '}
            <span className="text-secondary">Several</span>
            <br />
            <span className="text-secondary">Startups Like You</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Testimonial Text */}
          <div className="space-y-6">
            <blockquote className="text-lg md:text-xl text-secondary leading-relaxed">
              &ldquo;Logiciel Solutions has far surpassed any of our expectations
              during the years we have partnered with the entire team to
              create the planet's #1 Home Improvement Contractor Business
              Management Platform. We highly recommend this Company
              without ANY RESERVATION.&rdquo;
            </blockquote>

            <div className="flex items-center space-x-4">
              <div>
                <div className="font-semibold text-secondary text-lg">David Buzzelli</div>
                <div className="text-accent">Co-Founder, JOBPROGRESS, LLC.</div>
              </div>
              <div className="flex-1 border-t border-ls-gray-200"></div>
              <button 
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Next testimonial"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-8 h-8"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-ls-gray-100 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-lg shadow">
              ▶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
