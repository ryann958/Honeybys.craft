import { useEffect, useState } from 'react';
import { business } from '../data/business';
import { galleryItems, galleryPlaceholder, type GalleryLightboxContent } from '../data/gallery';
import WhatsAppCta from '../components/home/WhatsAppCta';
import DemoBadge from '../components/common/DemoBadge';
import DemoImage from '../components/common/DemoImage';
import GalleryEmptyState from '../components/gallery/GalleryEmptyState';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { setPageMetadata } from '../lib/seo';
import '../styles/gallery.css';

const galleryTitle = `Gallery | ${business.brandName}`;
const galleryDescription = `Galeri karya boneka custom ${business.brandName}. Foto portofolio terverifikasi akan ditampilkan setelah tersedia.`;

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryLightboxContent | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  useEffect(() => {
    setPageMetadata({ title: galleryTitle, description: galleryDescription });
  }, []);

  const categories = [...new Set(galleryItems.map((item) => item.category))];
  const visibleItems = selectedCategory === 'Semua'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero" aria-labelledby="gallery-title">
        <div className="gallery-container gallery-hero__layout">
          <div>
            <p className="gallery-eyebrow">Portfolio / {business.brandName}</p>
            <h1 id="gallery-title">Ruang untuk karya yang akan bercerita.</h1>
            <p>
              Galeri ini disiapkan untuk dokumentasi karya asli {business.brandName}. Foto portofolio terverifikasi belum tersedia, jadi belum ada karya yang ditampilkan.
            </p>
          </div>
          <aside className="gallery-hero__status" aria-label="Status galeri">
            <span className="gallery-hero__status-number">{galleryItems.length.toString().padStart(2, '0')}</span>
            <span>foto ilustrasi demo</span>
          </aside>
        </div>
      </section>

      <section className="gallery-work" aria-labelledby="gallery-work-title">
        <div className="gallery-container">
          <div className="gallery-work__heading">
            <div>
              <p className="gallery-eyebrow">Foto ilustrasi / Konten demo</p>
              <h2 id="gallery-work-title">Contoh visual boneka plush</h2>
            </div>
            <p>Placeholder pengembangan diberi label dan tidak merepresentasikan hasil karya asli.</p>
          </div>

          {galleryItems.length === 0 ? (
            <GalleryEmptyState onPreview={() => setSelectedItem(galleryPlaceholder)} />
          ) : (
            <>
              {categories.length > 1 && (
                <div className="gallery-filters" role="group" aria-label="Filter kategori galeri">
                  {['Semua', ...categories].map((category) => (
                    <button
                      key={category}
                      className={`gallery-filter${selectedCategory === category ? ' gallery-filter--active' : ''}`}
                      type="button"
                      aria-pressed={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
              <div className="gallery-grid">
                {visibleItems.map((item) => (
                  <figure className="gallery-item" key={item.id}>
                    <button
                      className="gallery-item__image-button"
                      type="button"
                      aria-label={`Buka gambar ${item.title}`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <DemoImage className="gallery-item__image-content" src={item.src} alt={item.alt} />
                      <DemoBadge label="Foto Ilustrasi / Konten Demo" />
                    </button>
                    <figcaption>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a className="gallery-item__source" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Foto: {item.photographer} / {item.licenseLabel}
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="gallery-cta" aria-labelledby="gallery-cta-title">
        <div className="gallery-container gallery-cta__inner">
          <div>
            <p className="gallery-eyebrow">Diskusikan ide Anda</p>
            <h2 id="gallery-cta-title">Ingin membahas boneka custom?</h2>
            <p>Mulai percakapan mengenai karakter atau konsep yang Anda bayangkan.</p>
          </div>
          <WhatsAppCta>Konsultasi via WhatsApp</WhatsAppCta>
        </div>
      </section>

      <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}