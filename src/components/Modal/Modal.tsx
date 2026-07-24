import { useEffect, useRef } from 'react';

export type ModalImage = {
  title: string;
  url: string;
};

type ModalProps = {
  images: ModalImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

function Modal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const image = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && images.length > 1) onPrevious();
      if (event.key === 'ArrowRight' && images.length > 1) onNext();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 bg-bg-primary/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${image.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="absolute top-6 right-6 w-10 h-10 bg-bg-surface hover:bg-bg-surface/80 border border-border rounded-lg flex items-center justify-center transition-colors z-10"
        aria-label="Close image preview"
        onClick={onClose}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-3 md:left-6 w-10 h-10 bg-bg-surface hover:bg-bg-surface/80 border border-border rounded-lg flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
            onClick={onPrevious}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            className="absolute right-3 md:right-6 w-10 h-10 bg-bg-surface hover:bg-bg-surface/80 border border-border rounded-lg flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
            onClick={onNext}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="max-w-6xl w-full flex flex-col items-center px-10">
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg border border-border shadow-2xl"
        />
        <p className="mt-4 text-text-muted text-sm font-medium">{image.title}</p>
        <p className="mt-2 text-text-muted text-xs font-mono">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default Modal;
