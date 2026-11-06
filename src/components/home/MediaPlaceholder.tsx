type MediaPlaceholderProps = {
  label: string;
  number: string;
  variant?: 'portrait' | 'landscape' | 'square';
  className?: string;
};

export default function MediaPlaceholder({
  label,
  number,
  variant = 'portrait',
  className = '',
}: MediaPlaceholderProps) {
  return (
    <div
      className={`home-media-placeholder home-media-placeholder--${variant} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span className="home-media-placeholder__index" aria-hidden="true">{number}</span>
      <span className="home-media-placeholder__frame" aria-hidden="true">
        <span className="home-media-placeholder__monogram">HC</span>
        <span className="home-media-placeholder__caption">Foto karya</span>
        <span className="home-media-placeholder__status">Belum tersedia</span>
      </span>
    </div>
  );
}