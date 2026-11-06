import { useEffect } from 'react';
import DemoBadge from '../components/common/DemoBadge';
import DemoImage from '../components/common/DemoImage';
import WhatsAppCta from '../components/home/WhatsAppCta';
import { business } from '../data/business';
import { demoContent, demoImages } from '../data/demoContent';
import { getWhatsAppHref } from '../lib/whatsapp';
import { setPageMetadata } from '../lib/seo';
import '../styles/contact.css';

const contactTitle = `Contact | ${business.brandName}`;
const contactDescription = `Hubungi ${business.brandName} milik ${business.ownerName} di ${business.location} untuk membahas ide boneka custom.`;

export default function ContactPage() {
  useEffect(() => {
    setPageMetadata({ title: contactTitle, description: contactDescription, image: demoImages.pinkBear.src });
  }, []);

  const displayNumber = business.whatsappNumber.replace(/^62/, '0');

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-container contact-hero__layout">
          <div className="contact-hero__copy">
            <p className="contact-eyebrow">Contact / Honeybys.craft</p>
            <h1 id="contact-title">Let's Create Something Special</h1>
            <p>Ingin membahas ide boneka custom? Ceritakan karakter atau konsep yang Anda bayangkan kepada Siwi Setianingsih.</p>
            <WhatsAppCta>Chat via WhatsApp</WhatsAppCta>
            <p className="contact-hero__hours">Jam operasional: {business.operatingHours}</p>
          </div>
          <figure className="contact-hero__visual">
            <DemoImage className="contact-hero__photo" src={demoImages.pinkBear.src} alt={`${demoImages.pinkBear.alt} ${demoContent.disclaimer}`} />
            <div className="contact-hero__badges">
              <DemoBadge label={demoContent.imageBadge} />
              <DemoBadge />
            </div>
          </figure>
        </div>
      </section>

      <section className="contact-information" aria-labelledby="contact-information-title">
        <div className="contact-container contact-information__layout">
          <div className="contact-information__intro">
            <p className="contact-eyebrow">Informasi usaha</p>
            <h2 id="contact-information-title">Mulai dari percakapan yang jelas.</h2>
            <p>Untuk konsultasi dan pembahasan kebutuhan custom boneka, hubungi melalui WhatsApp resmi.</p>
          </div>
          <dl className="contact-information__list">
            <div>
              <dt>Brand</dt>
              <dd>{business.brandName}</dd>
            </div>
            <div>
              <dt>Pemilik</dt>
              <dd>{business.ownerName}</dd>
            </div>
            <div>
              <dt>Lokasi</dt>
              <dd>{business.location}</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd><a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">{displayNumber}</a></dd>
            </div>
            <div>
              <dt>Jam operasional</dt>
              <dd>{business.operatingHours}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="contact-container contact-cta__inner">
          <div>
            <p className="contact-eyebrow">Konsultasi</p>
            <h2 id="contact-cta-title">Ceritakan kebutuhan Anda.</h2>
          </div>
          <WhatsAppCta>Mulai chat</WhatsAppCta>
        </div>
      </section>
    </div>
  );
}