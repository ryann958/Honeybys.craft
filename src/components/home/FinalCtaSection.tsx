import { business } from '../../data/business';
import WhatsAppCta from './WhatsAppCta';

export default function FinalCtaSection() {
  return (
    <section className="home-final-cta" aria-labelledby="home-final-cta-title">
      <div className="home-container home-final-cta__inner">
        <div>
          <p className="home-eyebrow">Mari mulai dari ide</p>
          <h2 id="home-final-cta-title">Ada karakter yang ingin Anda wujudkan?</h2>
          <p>Ceritakan konsep awalnya. Detail berikutnya dapat dibahas bersama saat konsultasi.</p>
        </div>
        <div className="home-final-cta__contact">
          <WhatsAppCta className="home-button--light">Konsultasi via WhatsApp</WhatsAppCta>
          <p className="home-final-cta__hours">
            <span>Jam operasional</span>
            <strong>{business.operatingHours}</strong>
          </p>
        </div>
        <span className="home-final-cta__ornament" aria-hidden="true">HC</span>
      </div>
    </section>
  );
}