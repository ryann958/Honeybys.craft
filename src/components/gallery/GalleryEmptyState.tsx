type GalleryEmptyStateProps = {
  onPreview: () => void;
};

export default function GalleryEmptyState({ onPreview }: GalleryEmptyStateProps) {
  return (
    <div className="gallery-empty-state">
      <button
        className="gallery-empty-state__preview"
        type="button"
        aria-label="Buka preview placeholder portofolio"
        onClick={onPreview}
      >
        <span className="gallery-empty-state__index">DEVELOPMENT / PLACEHOLDER</span>
        <span className="gallery-empty-state__monogram" aria-hidden="true">HC</span>
        <span className="gallery-empty-state__preview-label">Preview placeholder</span>
      </button>
      <div className="gallery-empty-state__copy">
        <p className="gallery-eyebrow">Belum ada aset karya</p>
        <h3>Foto karya asli akan ditambahkan setelah tersedia.</h3>
        <p>Belum ada gambar portofolio terverifikasi. Preview ini hanya menunjukkan status aset dan bukan hasil karya Honeybys.craft.</p>
        <button className="gallery-empty-state__text-button" type="button" onClick={onPreview}>
          Lihat status placeholder
        </button>
      </div>
    </div>
  );
}