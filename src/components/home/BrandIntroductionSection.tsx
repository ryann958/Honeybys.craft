import { business } from '../../data/business';
import DemoBadge from '../common/DemoBadge';
import DemoImage from '../common/DemoImage';
import { demoContent, demoImages } from '../../data/demoContent';

export default function BrandIntroductionSection() {
  return (
    <section className="home-introduction" aria-labelledby="home-introduction-title">
      <div className="home-container home-introduction__layout">
        <div className="home-introduction__visual">
          <div className="home-introduction__photo-frame">
            <DemoImage
              className="home-introduction__media"
              src={demoImages.plushCollection.src}
              alt={`${demoImages.plushCollection.alt} ${demoContent.disclaimer}`}
            />
            <DemoBadge label={demoContent.imageBadge} />
          </div>
        </div>
        <div className="home-introduction__copy">
          <p className="home-eyebrow">Tentang {business.brandName}</p>
          <h2 id="home-introduction-title">Benda kecil, dengan cerita yang terasa dekat.</h2>
          <p>
            {business.brandName} berfokus pada layanan custom boneka. Usaha ini didirikan pada {business.establishedYear} dan dimiliki oleh {business.ownerName}.
          </p>
          <p>
            Berlokasi di {business.location}, setiap kebutuhan dibahas terlebih dahulu agar detail yang diinginkan dan kemungkinan pengerjaan dapat dikonfirmasi bersama.
          </p>
          <dl className="home-introduction__facts">
            <div>
              <dt>Didirikan</dt>
              <dd>{business.establishedYear}</dd>
            </div>
            <div>
              <dt>Pemilik</dt>
              <dd>{business.ownerName}</dd>
            </div>
            <div>
              <dt>Lokasi</dt>
              <dd>{business.location}</dd>
            </div>
          </dl>
          <span className="home-introduction__signature">{business.brandName}</span>
        </div>
      </div>
    </section>
  );
}