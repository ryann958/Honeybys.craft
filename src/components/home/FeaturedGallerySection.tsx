import { Link } from 'react-router-dom';
import { featuredGallery } from '../../data/homepage';
import DemoBadge from '../common/DemoBadge';
import DemoImage from '../common/DemoImage';
import { demoContent } from '../../data/demoContent';

export default function FeaturedGallerySection() {
  return (
    <section className="home-gallery" aria-labelledby="home-gallery-title">
      <div className="home-container">
        <div className="home-section-heading home-section-heading--gallery">
          <div>
            <p className="home-eyebrow">Galeri karya</p>
            <h2 id="home-gallery-title">Inspirasi visual untuk memulai.</h2>
          </div>
          <p className="home-section-heading__aside">
            Beberapa hasil custom kami untuk menjadi inspirasi pesananmu.
          </p>
        </div>

        <div className="home-gallery__grid">
          {featuredGallery.map((item) => (
            <figure className={`home-gallery-item home-gallery-item--${item.layout}`} key={item.number}>
              <div className={`home-gallery-item__visual home-gallery-item__visual--${item.layout}`}>
                <DemoImage
                  className="home-gallery-item__media"
                  src={item.image.src}
                  alt={`${item.image.alt} ${demoContent.disclaimer}`}
                />
                <DemoBadge label={demoContent.imageBadge} />
              </div>
              <figcaption>
                <span>{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="home-section-link">
          <Link className="home-button home-button--text" to="/gallery">Kunjungi halaman Gallery</Link>
        </div>
      </div>
    </section>
  );
}