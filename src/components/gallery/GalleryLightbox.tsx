import { useEffect, useRef } from 'react';
import type { GalleryLightboxContent } from '../../data/gallery';
import DemoBadge from '../common/DemoBadge';
import DemoImage from '../common/DemoImage';

type GalleryLightboxProps = {
  item: GalleryLightboxContent | null;
  onClose: () => void;
};

export default function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="gallery-lightbox"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-lightbox-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="gallery-lightbox__header">
          <div>
            <p className="gallery-eyebrow">{item.kind === 'image' ? 'Foto karya' : 'Status aset'}</p>
            <h2 id="gallery-lightbox-title">{item.title}</h2>
          </div>
          <button ref={closeButtonRef} className="gallery-lightbox__close" type="button" aria-label="Tutup lightbox" onClick={onClose}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </header>
        {item.kind === 'image' ? (
          <div className="gallery-lightbox__image-wrap">
            <DemoImage className="gallery-lightbox__image-frame" imageClassName="gallery-lightbox__image" src={item.src} alt={item.alt} loading="eager" />
            <DemoBadge label="Foto Ilustrasi / Konten Demo" />
          </div>
        ) : (
          <div className="gallery-lightbox__placeholder" role="img" aria-label={item.alt}>
            <span className="gallery-lightbox__placeholder-mark" aria-hidden="true">HC</span>
            <p>Development placeholder</p>
          </div>
        )}
        <p className="gallery-lightbox__description">{item.description}</p>
      </section>
    </div>
  );
}