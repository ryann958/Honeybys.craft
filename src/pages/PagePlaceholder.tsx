import { useEffect } from 'react';
import { business } from '../data/business';
import { setPageMetadata } from '../lib/seo';

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PagePlaceholder({
  eyebrow,
  title,
  description = 'Konten halaman ini akan disiapkan pada fase berikutnya.',
}: PagePlaceholderProps) {
  useEffect(() => {
    setPageMetadata({ title: `${title} | ${business.brandName}`, description });
  }, [description, title]);

  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <div className="page-placeholder__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="page-placeholder__description">{description}</p>
      </div>
      <div className="page-placeholder__mark" aria-hidden="true">HC</div>
    </section>
  );
}