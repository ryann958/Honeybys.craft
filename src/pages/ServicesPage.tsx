import { useEffect } from 'react';
import { business } from '../data/business';
import { confirmedServices, servicePageContent } from '../data/services';
import WhatsAppCta from '../components/home/WhatsAppCta';
import { setPageMetadata } from '../lib/seo';
import '../styles/services.css';

const servicesTitle = `Services | ${business.brandName}`;
const servicesDescription = `Informasi layanan custom boneka ${business.brandName}. Kategori dan detail layanan resmi sedang menunggu konfirmasi.`;

export default function ServicesPage() {
  useEffect(() => {
    setPageMetadata({ title: servicesTitle, description: servicesDescription });
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero" aria-labelledby="services-title">
        <div className="services-container services-hero__layout">
          <div className="services-hero__copy">
            <p className="services-eyebrow">Layanan / Custom boneka</p>
            <h1 id="services-title">{servicePageContent.title}</h1>
            <p>{servicePageContent.intro}</p>
            <WhatsAppCta>Konsultasikan ide Anda</WhatsAppCta>
          </div>
          <aside className="services-hero__profile" aria-label="Informasi usaha">
            <span className="services-hero__profile-label">Studio profile</span>
            <strong>{business.brandName}</strong>
            <dl>
              <div><dt>Pemilik</dt><dd>{business.ownerName}</dd></div>
              <div><dt>Berlokasi</dt><dd>{business.location}</dd></div>
              <div><dt>Sejak</dt><dd>{business.establishedYear}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="services-details" aria-labelledby="services-details-title">
        <div className="services-container services-details__layout">
          <div className="services-details__copy">
            <p className="services-eyebrow">Ruang lingkup layanan</p>
            <h2 id="services-details-title">Setiap permintaan dimulai dari percakapan.</h2>
            <p>{servicePageContent.detailIntro}</p>
            {confirmedServices.length > 0 ? (
              <ul className="services-confirmed-list">
                {confirmedServices.map((service) => (
                  <li key={service.id}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    {service.image && (
                      <img src={service.image} alt={service.imageAlt ?? ''} loading="lazy" decoding="async" />
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="services-pending" role="status">
                <span className="services-pending__index">01 / Konfirmasi</span>
                <h3>{servicePageContent.pendingTitle}</h3>
                <p>{servicePageContent.pendingDescription}</p>
              </div>
            )}
          </div>

          <div className="services-details__visual" role="img" aria-label="Placeholder visual layanan; aset resmi belum tersedia.">
            <span className="services-details__visual-index">LAYANAN / 00</span>
            <span className="services-details__monogram" aria-hidden="true">HC</span>
            <p>Visual layanan menunggu aset resmi.</p>
          </div>
        </div>
      </section>

      <section className="services-bottom-cta" aria-labelledby="services-cta-title">
        <div className="services-container services-bottom-cta__inner">
          <div>
            <p className="services-eyebrow">Langkah pertama</p>
            <h2 id="services-cta-title">Ceritakan ide boneka custom Anda.</h2>
            <p>Detail dan ketersediaan layanan akan dibahas sebelum pemesanan.</p>
          </div>
          <WhatsAppCta>Hubungi via WhatsApp</WhatsAppCta>
        </div>
      </section>
    </div>
  );
}