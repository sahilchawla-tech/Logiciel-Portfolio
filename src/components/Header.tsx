import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logiciel-logo.png"
                alt="Logiciel Solutions"
                width={300}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-secondary hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="text-secondary hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            type="button"
            className="md:hidden p-2 rounded-md text-secondary hover:text-primary"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
