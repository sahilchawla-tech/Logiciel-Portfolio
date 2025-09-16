interface ProjectPlaceholderProps {
  name: string;
  className?: string;
}

export default function ProjectPlaceholder({ name, className = '' }: ProjectPlaceholderProps) {
  return (
    <div 
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 ${className}`}
    >
      <span className="text-primary font-medium text-lg text-center px-4">
        {name}
      </span>
    </div>
  );
}
