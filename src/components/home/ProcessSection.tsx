import { processSteps } from '../../data/homepage';

export default function ProcessSection() {
  return (
    <section className="home-process" aria-labelledby="home-process-title">
      <div className="home-container">
        <div className="home-process__intro">
          <p className="home-eyebrow">How it works</p>
          <h2 id="home-process-title">Dari obrolan awal menuju karya.</h2>
          <p>Alur umum ini membantu memulai percakapan. Detail dan ketentuan akhir dikonfirmasi bersama.</p>
        </div>
        <ol className="home-process__steps">
          {processSteps.map((step) => (
            <li className="home-process-step" key={step.number}>
              <span className="home-process-step__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}