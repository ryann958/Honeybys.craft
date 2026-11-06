import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import DemoBadge from '../common/DemoBadge';
import DemoImage from '../common/DemoImage';
import { demoContent, demoImages } from '../../data/demoContent';
import WhatsAppCta from './WhatsAppCta';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const decoration = parallaxRef.current;
    if (!hero || !decoration) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      decoration.style.setProperty('--parallax-opacity', '0.42');
      decoration.style.setProperty('--parallax-offset', '0px');
      return;
    }

    let heroIsVisible = false;
    let frameId = 0;

    const updateDecoration = () => {
      frameId = 0;
      if (!heroIsVisible) return;

      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      const progress = Math.min(1, Math.max(0, (window.scrollY - heroTop) / hero.offsetHeight));
      decoration.style.setProperty('--parallax-opacity', `${0.55 * (1 - progress)}`);
      decoration.style.setProperty('--parallax-offset', `${progress * 96}px`);
    };

    const scheduleUpdate = () => {
      if (!heroIsVisible || frameId !== 0) return;
      frameId = window.requestAnimationFrame(updateDecoration);
    };

    const observer = new IntersectionObserver(([entry]) => {
      heroIsVisible = entry.isIntersecting;
      if (heroIsVisible) {
        scheduleUpdate();
      } else {
        decoration.style.setProperty('--parallax-opacity', '0');
        decoration.style.setProperty('--parallax-offset', '0px');
      }
    });

    observer.observe(hero);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section ref={heroRef} className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-container home-hero__layout">
        <div className="home-hero__copy">
          <div ref={parallaxRef} className="home-hero__parallax" aria-hidden="true">
            <span className="home-hero__parallax-mesh" />
            <span className="home-hero__parallax-contour" />
          </div>
          <div className="home-hero__copy-content">
            <p className="home-eyebrow"><span /> Handmade, personal, custom</p>
            <h1 id="home-hero-title">Dari sebuah ide, menjadi boneka yang personal.</h1>
            <p className="home-hero__description">
              {business.brandName} menghadirkan layanan custom boneka dari ide, karakter, atau referensi personal. Ceritakan konsepnya untuk dibahas bersama.
            </p>
            <div className="home-hero__actions">
              <WhatsAppCta>Mulai konsultasi</WhatsAppCta>
              <Link className="home-button home-button--text" to="/gallery">Lihat galeri</Link>
            </div>
            <p className="home-hero__footnote">Kontak resmi tersedia melalui WhatsApp.</p>
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__paper" aria-hidden="true" />
          <div className="home-hero__photo-frame">
            <DemoImage
              className="home-hero__media"
              src={demoImages.pinkBear.src}
              alt={`${demoImages.pinkBear.alt} ${demoContent.disclaimer}`}
              loading="eager"
            />
            <div className="home-hero__photo-badges">
              <DemoBadge label={demoContent.imageBadge} />
              <DemoBadge />
            </div>
          </div>
          <span className="home-hero__seal" aria-hidden="true">crafted<br />with care</span>
          <p className="home-hero__visual-note">Foto ilustrasi, bukan karya {business.brandName}.</p>
        </div>
      </div>
      <div className="home-hero__bottomline" aria-hidden="true">
        <span>Ide</span><span className="home-hero__bottomline-dot" /><span>Proses</span><span className="home-hero__bottomline-dot" /><span>Wujud</span>
      </div>
    </section>
  );
}