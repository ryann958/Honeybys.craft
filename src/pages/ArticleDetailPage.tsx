import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DemoBadge from '../components/common/DemoBadge';
import DemoImage from '../components/common/DemoImage';
import WhatsAppCta from '../components/home/WhatsAppCta';
import { articleDemoDisclaimer, demoArticles } from '../data/articles';
import { business } from '../data/business';
import { demoContent } from '../data/demoContent';
import { setPageMetadata } from '../lib/seo';
import '../styles/articles.css';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = demoArticles.find((item) => item.slug === slug);
  const title = article ? `${article.title} | ${business.brandName}` : `Artikel tidak ditemukan | ${business.brandName}`;
  const description = article?.excerpt ?? 'Artikel yang dicari tidak tersedia.';

  useEffect(() => {
    setPageMetadata({ title, description, image: article?.cover.src });
  }, [article, description, title]);

  if (!article) {
    return (
      <section className="article-not-found" aria-labelledby="article-not-found-title">
        <div className="articles-container">
          <p className="articles-eyebrow">Articles / 404</p>
          <h1 id="article-not-found-title">Artikel tidak ditemukan.</h1>
          <p>Slug artikel tidak tersedia. Kembali ke daftar untuk memilih artikel demo yang ada.</p>
          <Link className="home-button home-button--outline" to="/articles">Kembali ke Articles</Link>
        </div>
      </section>
    );
  }

  const relatedArticles = demoArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <div className="article-detail">
      <header className="article-detail__header articles-container">
        <Link className="article-detail__back" to="/articles">Kembali ke Articles</Link>
        <div className="article-detail__badges"><DemoBadge /><DemoBadge label={demoContent.imageBadge} /></div>
        <p className="articles-eyebrow">{article.category} / {article.publicationLabel}</p>
        <h1>{article.title}</h1>
        <p className="article-detail__excerpt">{article.excerpt}</p>
      </header>

      <figure className="article-detail__cover articles-container">
        <DemoImage className="article-detail__cover-image" src={article.cover.src} alt={`${article.cover.alt} ${demoContent.disclaimer}`} loading="eager" />
      </figure>

      <article className="article-detail__body">
        <p className="article-detail__disclaimer">{articleDemoDisclaimer}</p>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </article>

      <aside className="article-related articles-container" aria-labelledby="article-related-title">
        <h2 id="article-related-title">Artikel demo lainnya</h2>
        <div className="article-related__list">
          {relatedArticles.map((item) => (
            <Link key={item.slug} to={`/articles/${item.slug}`}>
              <DemoBadge />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </aside>

      <section className="article-detail__cta" aria-labelledby="article-cta-title">
        <div className="articles-container article-detail__cta-inner">
          <div>
            <p className="articles-eyebrow">Langkah berikutnya</p>
            <h2 id="article-cta-title">Ada ide boneka custom?</h2>
            <p>Diskusikan kebutuhan Anda langsung melalui WhatsApp.</p>
          </div>
          <WhatsAppCta>Konsultasi via WhatsApp</WhatsAppCta>
        </div>
      </section>
    </div>
  );
}