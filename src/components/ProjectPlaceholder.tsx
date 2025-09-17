interface ProjectPlaceholderProps {
  name: string;
  className?: string;
}

export default function ProjectPlaceholder({ name, className = '' }: ProjectPlaceholderProps) {
  return (
    <div 
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-ls-gray-100 to-ls-gray-200 ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`
      }}
    >
      <div className="text-center p-4">
        <div className="text-primary font-medium text-lg mb-2">
          {name}
        </div>
        <div className="text-sm text-ls-gray-600">
          Click to view details
        </div>
      </div>
    </div>
  );
}