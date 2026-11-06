import { customerImages } from './customerImages';

export type GalleryItem = {
  kind: 'image';
  id: string;
  title: string;
  description: string;
  category: string;
} & { src: string; alt: string };

export type GalleryPlaceholder = {
  kind: 'placeholder';
  title: string;
  description: string;
  alt: string;
};

export type GalleryLightboxContent = GalleryItem | GalleryPlaceholder;

export const galleryItems: GalleryItem[] = [
  { ...customerImages.one, id: 'custom-boneka-01', title: 'Boneka custom karakter', description: 'Hasil custom Honeybys.craft.', category: 'Boneka Custom', kind: 'image' },
  { ...customerImages.two, id: 'custom-boneka-02', title: 'Boneka custom handmade', description: 'Hasil custom Honeybys.craft.', category: 'Boneka Custom', kind: 'image' },
  { ...customerImages.three, id: 'custom-boneka-03', title: 'Karakter custom pilihan', description: 'Hasil custom Honeybys.craft.', category: 'Boneka Custom', kind: 'image' },
  { ...customerImages.four, id: 'custom-boneka-04', title: 'Boneka custom personal', description: 'Hasil custom Honeybys.craft.', category: 'Boneka Custom', kind: 'image' },
  { ...customerImages.five, id: 'custom-boneka-05', title: 'Koleksi custom Honeybys.craft', description: 'Hasil custom Honeybys.craft.', category: 'Boneka Custom', kind: 'image' },
];

export const galleryPlaceholder: GalleryPlaceholder = {
  kind: 'placeholder',
  title: 'Galeri Honeybys.craft',
  description: 'Galeri karya Honeybys.craft.',
  alt: 'Galeri karya Honeybys.craft.',
};