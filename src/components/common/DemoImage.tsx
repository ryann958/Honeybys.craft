import { useEffect, useState } from 'react';

type DemoImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  loading?: 'eager' | 'lazy';
};

export default function DemoImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  loading = 'lazy',
}: DemoImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <span className={`demo-image ${className}`.trim()}>
      {hasError ? (
        <span className="demo-image__fallback" role="img" aria-label={`${alt} Foto ilustrasi demo tidak tersedia.`}>
          <span className="demo-image__fallback-mark" aria-hidden="true">HC</span>
          <span>Foto Ilustrasi / tidak tersedia</span>
        </span>
      ) : (
        <img
          className={imageClassName}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setHasError(true)}
        />
      )}
    </span>
  );
}