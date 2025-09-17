interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className="relative z-10 max-w-[90vw] max-h-[90vh] animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Image Container */}
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-medium text-secondary">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

