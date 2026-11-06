import { homepageFaqs } from '../../data/homepage';

export default function FaqSection() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-title">
      <div className="home-container home-faq__layout">
        <div className="home-faq__intro">
          <p className="home-eyebrow">Pertanyaan umum</p>
          <h2 id="home-faq-title">Sebelum mulai berdiskusi.</h2>
          <p>Informasi yang belum dikonfirmasi akan dibahas langsung sebelum menjadi bagian dari pesanan.</p>
        </div>
        <div className="home-faq__list">
          {homepageFaqs.map((item, index) => (
            <details className="home-faq-item" key={item.question}>
              <summary>
                <span className="home-faq-item__number">0{index + 1}</span>
                <span>{item.question}</span>
                <span className="home-faq-item__toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}