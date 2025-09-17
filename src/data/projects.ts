export type ProjectDetail = {
  id: number;
  slug: string;
  name: string;
  category: string;
  timeline: string;
  projectDate: string;
  focusAreas: string[];
  services: string[];
  summary: string;
  about: string;
  requirement: string;
  challenges: string;
  solutions: string;
  cardImage?: string; // Image shown on the homepage card
  heroImage?: string; // Image shown on the detail page hero section
  gallery?: string[]; // Additional images for the detail page
  tags: string[];
};

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: 'jobprogress',
    name: 'JobProgress',
    category: 'Enterprise Software',
    timeline: '3 Months',
    projectDate: 'January 2024 - March 2024',
    focusAreas: ['Design-Focused', 'User Experience', 'Workflow Optimization'],
    services: ['User Research', 'UI Design', 'Development'],
    summary: 'A Business Management Platform for Home Improvement Contractors.',
    about:
      'JobProgress is a comprehensive business management platform tailored for home improvement contractors. It streamlines lead management, estimating, scheduling, invoicing, and field operations to improve productivity and profitability.',
    requirement: 'The client needed a comprehensive business management solution specifically designed for home improvement contractors. They wanted to streamline their daily operations and improve overall efficiency.',
    challenges: 'The main challenge was creating an intuitive interface that could handle complex workflows while remaining accessible to users with varying levels of technical expertise. We also needed to ensure the platform worked seamlessly across both desktop and mobile devices.',
    solutions: 'We developed a user-friendly interface with role-based access control, automated workflow management, and real-time synchronization. The platform includes features like digital estimates, scheduling, and mobile-first field operations tools.',
    cardImage: '/project-jobprogress.jpg',
    heroImage: '/project-jobprogress-detail.jpg',
    tags: ['B2B', 'UX Design', 'Contractor Ops', 'Cloud'],
  },
  {
    id: 2,
    slug: 'rentzeme',
    name: 'RentZeme',
    category: 'Mobile App',
    timeline: '4 Months',
    projectDate: 'October 2023 - January 2024',
    focusAreas: ['User Experience', 'Mobile-First Design', 'Property Management'],
    services: ['Product Strategy', 'UI Design', 'Web & Mobile Development'],
    summary: 'A platform to effortlessly apply, sign leases, and manage your property.',
    cardImage: '/project-rentzeme.jpg',
    heroImage: '/project-rentzeme-detail.jpg',
    about:
      'RentZeme simplifies the rental lifecycle—applications, lease signing, rent collection, and maintenance—offering a unified experience for renters and landlords.',
    requirement: 'The client wanted to create a modern rental platform that would simplify the entire rental process for both landlords and tenants, from application to ongoing property management.',
    challenges: 'The key challenge was integrating multiple complex processes (applications, payments, maintenance) into a single, user-friendly platform while ensuring security and compliance with rental regulations.',
    solutions: 'We designed an intuitive platform with digital lease signing, automated rent collection, and a maintenance ticketing system. The solution includes secure document handling and real-time communication tools.',
    tags: ['B2C', 'Property Tech', 'Payments', 'Cloud'],
  },
  {
    id: 3,
    slug: 'analyst-intelligence',
    name: 'Analyst Intelligence',
    category: 'AI & ML',
    timeline: '12 Weeks',
    projectDate: 'July 2023 - September 2023',
    focusAreas: ['Data Visualization', 'AI Integration', 'Enterprise UX'],
    services: ['Data UX', 'Design System', 'Engineering'],
    summary: 'A platform to make sophisticated analytical capabilities instantly deployable.',
    about:
      'Analyst Intelligence enables teams to deploy advanced analytics quickly via configurable pipelines, reusable models, and rich visualization components.',
    requirement: 'The client needed a platform that would democratize access to advanced analytics capabilities, making it easier for teams to deploy and manage analytical solutions without deep technical expertise.',
    challenges: 'The main challenge was balancing the complexity of advanced analytics with the need for an accessible user interface. We also needed to ensure the platform could handle diverse data sources and analytical methods.',
    solutions: 'We created a modular platform with drag-and-drop pipeline building, pre-built analytical components, and customizable dashboards. The solution includes automated data validation and model monitoring features.',
    tags: ['B2B', 'Analytics', 'Data Viz', 'AI'],
  },
  {
    id: 4,
    slug: 'power-platform',
    name: 'Power Platform',
    category: 'Enterprise Software',
    timeline: '5 Months',
    projectDate: 'February 2023 - June 2023',
    focusAreas: ['Performance Optimization', 'Big Data UX', 'Real-time Analytics'],
    services: ['UX Research', 'Architecture', 'UI Engineering'],
    summary: 'A Big Data platform driving analytics for the Energy sector in the US.',
    about:
      'Power Platform ingests, processes, and visualizes large-scale telemetry and market data to support real-time decisions for energy providers and analysts.',
    requirement: 'The client required a robust platform to handle massive amounts of energy sector data, enabling real-time analysis and decision-making for power companies and market analysts.',
    challenges: 'The primary challenges were managing real-time data streams at scale, ensuring sub-second response times for critical operations, and presenting complex data in an actionable format.',
    solutions: 'We developed a scalable architecture with real-time data processing, custom visualization components, and predictive analytics capabilities. The platform includes automated alerting and decision support tools.',
    tags: ['Energy', 'Big Data', 'Cloud', 'B2B'],
  },
  {
    id: 5,
    slug: 'travel-buddy',
    name: 'Travel Buddy',
    category: 'Mobile App',
    timeline: '10 Weeks',
    projectDate: 'April 2023 - June 2023',
    focusAreas: ['Mobile UX', 'AI Implementation', 'Travel Experience'],
    services: ['Product Design', 'Prototyping', 'Mobile Development'],
    summary: 'AI powered travel partner with a touch of old travelling experience.',
    about:
      'Travel Buddy blends AI trip planning with nostalgic travel journaling—smart recommendations, offline notes, and itinerary sharing for modern explorers.',
    requirement: 'The client wanted to create an AI-powered travel companion app that would combine modern trip planning capabilities with the personal touch of traditional travel journaling.',
    challenges: 'The key challenge was integrating AI recommendations while maintaining a personal, authentic travel experience. We also needed to ensure the app worked effectively offline for travelers in remote locations.',
    solutions: 'We developed an app that uses AI for smart trip suggestions while allowing users to maintain personal travel journals. The solution includes offline functionality, photo integration, and social sharing features.',
    tags: ['B2C', 'AI', 'Travel', 'Mobile'],
  },
  {
    id: 6,
    slug: 'adlaunch',
    name: 'Adlaunch',
    category: 'AI & ML',
    timeline: '8 Weeks',
    projectDate: 'August 2023 - September 2023',
    focusAreas: ['AI/ML Integration', 'Marketing Automation', 'SMB Focus'],
    services: ['Product Strategy', 'UX/UI', 'MVP Engineering'],
    summary: 'AI powered Ads marketing tool for small to medium businesses.',
    about:
      'Adlaunch automates creative generation, audience targeting, and campaign optimization so SMBs can launch effective ads in minutes.',
    requirement: 'The client needed an AI-powered marketing tool that would enable small and medium businesses to create and manage effective ad campaigns without requiring extensive marketing expertise.',
    challenges: 'The main challenge was automating complex marketing decisions while keeping the interface simple enough for SMB owners. We also needed to ensure the AI-generated content maintained brand consistency.',
    solutions: 'We built a platform that uses AI to generate ad creatives, suggest targeting options, and optimize campaigns automatically. The solution includes performance analytics and budget management tools.',
    tags: ['SMB', 'Marketing Tech', 'Automation', 'AI'],
  },
];
