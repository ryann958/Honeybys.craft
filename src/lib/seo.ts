export type PageMetadata = {
  title: string;
  description: string;
  image?: string;
};

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }

  meta.content = content;
}

export function setPageMetadata({ title, description, image }: PageMetadata) {
  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);

  if (image) {
    const absoluteImage = new URL(image, window.location.origin).href;
    setMeta('property', 'og:image', absoluteImage);
  } else {
    document.head.querySelector('meta[property="og:image"]')?.remove();
  }

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = `${window.location.origin}${window.location.pathname}`;
}