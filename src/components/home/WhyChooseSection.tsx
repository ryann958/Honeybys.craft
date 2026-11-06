import { studioPrinciples } from '../../data/homepage';

export default function WhyChooseSection() {
  return (
    <section className="home-principles" aria-labelledby="home-principles-title">
      <div className="home-container home-principles__layout">
        <div className="home-principles__intro">
          <p className="home-eyebrow">Cara kami memulai</p>
          <h2 id="home-principles-title">Yang penting, ide Anda didengar.</h2>
          <p>Hal-hal yang menjadi dasar percakapan sebelum sebuah kebutuhan custom dibahas lebih jauh.</p>
        </div>
        <ol className="home-principles__list">
          {studioPrinciples.map((principle) => (
            <li className="home-principle" key={principle.number}>
              <span className="home-principle__number" aria-hidden="true">{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}