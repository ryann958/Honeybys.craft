import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DemoBadge from '../components/common/DemoBadge';
import DemoImage from '../components/common/DemoImage';
import { demoArticles } from '../data/articles';
import { business } from '../data/business';
import { demoContent } from '../data/demoContent';
import { setPageMetadata } from '../lib/seo';
import '../styles/articles.css';

const articlesTitle = `Articles | ${business.brandName}`;
const articlesDescription = `Kumpulan artikel demo tentang boneka custom dan referensi visual dari ${business.brandName}.`;

export default function ArticlesPage() {
  useEffect(() => {
    setPageMetadata({ title: articlesTitle, description: articlesDescription, image: demoArticles[0]?.cover.src });
  }, []);

  const [featuredArticle, ...otherArticles] = demoArticles;

  return (
    <div className="articles-page">
      <section className="articles-hero" aria-labelledby="articles-title">
        <div className="articles-container articles-hero__inner">
          <p className="articles-eyebrow">Jurnal / {business.brandName}</p>
          <h1 id="articles-title">Catatan seputar boneka custom.</h1>
          <p>Artikel contoh untuk membantu menyiapkan ide dan referensi. Semua artikel di halaman ini adalah konten demo, bukan panduan resmi tentang proses usaha.</p>
          <DemoBadge />
        </div>
      </section>

      {featuredArticle && (
        <section className="articles-featured" aria-label="Artikel demo pilihan">
          <div className="articles-container">
            <Link className="articles-featured__link" to={`/articles/${featuredArticle.slug}`}>
              <div className="articles-featured__visual">
                <DemoImage className="articles-featured__image" src={featuredArticle.cover.src} alt={`${featuredArticle.cover.alt} ${demoContent.disclaimer}`} loading="eager" />
                <div className="articles-featured__badges">
                  <DemoBadge />
                  <DemoBadge label={demoContent.imageBadge} />
                </div>
              </div>
              <div className="articles-featured__copy">
                <p className="articles-eyebrow">{featuredArticle.category} / {featuredArticle.publicationLabel}</p>
                <h2>{featuredArticle.title}</h2>
                <p>{featuredArticle.excerpt}</p>
                <span className="articles-featured__read">Baca artikel demo</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="articles-list" aria-labelledby="articles-list-title">
        <div className="articles-container">
          <div className="articles-list__heading">
            <div>
              <p className="articles-eyebrow">Semua tulisan</p>
              <h2 id="articles-list-title">Ide untuk dibawa ke konsultasi.</h2>
            </div>
            <p>Temukan ide dan referensi untuk kebutuhan custommu.</p>
          </div>
          <div className="articles-grid">
            {otherArticles.map((article) => (
              <article className="article-card" key={article.slug}>
                <Link className="article-card__link" to={`/articles/${article.slug}`}>
                  <div className="article-card__image">
                    <DemoImage className="article-card__image-content" src={article.cover.src} alt={`${article.cover.alt} ${demoContent.disclaimer}`} />
                    <DemoBadge label={demoContent.imageBadge} />
                  </div>
                  <div className="article-card__copy">
                    <div className="article-card__meta">
                      <span>{article.category}</span>
                      <span>{article.publicationLabel}</span>
                    </div>
                    <DemoBadge />
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span className="article-card__read">Baca artikel</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}