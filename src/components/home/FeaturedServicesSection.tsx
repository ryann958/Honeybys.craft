import { Link } from 'react-router-dom';
import { featuredServices } from '../../data/homepage';
import DemoBadge from '../common/DemoBadge';
import DemoImage from '../common/DemoImage';
import { demoContent } from '../../data/demoContent';

export default function FeaturedServicesSection() {
  return (
    <section className="home-services" aria-labelledby="home-services-title">
      <div className="home-container">
        <div className="home-section-heading home-section-heading--split">
          <div>
            <p className="home-eyebrow">Ruang untuk berkreasi</p>
            <h2 id="home-services-title">Satu ide, banyak kemungkinan.</h2>
          </div>
          <p className="home-section-heading__aside">
            Terima custom satuan tanpa minimum order. Pilih produk dan karakter yang ingin kamu wujudkan bersama kami.
          </p>
        </div>

        <div className="home-services__list">
          {featuredServices.map((service, index) => (
            <article className="home-service" key={service.name}>
              <Link className="home-service__link" to="/services" aria-label={`Pelajari ${service.name} di halaman Services`}>
                <div className={`home-service__visual home-service__visual--${service.layout}`}>
                  <DemoImage
                    className={`home-service__media home-service__media--${service.layout}`}
                    src={service.image.src}
                    alt={`${service.image.alt} ${demoContent.disclaimer}`}
                  />
                  <DemoBadge label={demoContent.imageBadge} />
                </div>
                <span className="home-service__meta">Kategori sementara / 0{index + 1}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="home-service__arrow" aria-hidden="true">Lihat detail</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="home-section-link">
          <Link className="home-button home-button--outline" to="/services">Jelajahi Services</Link>
        </div>
      </div>
    </section>
  );
}