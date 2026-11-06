import { demoContent, demoImages, demoImageLicense, type DemoImage } from './demoContent';

export type GalleryItem = {
  kind: 'image';
  id: string;
  title: string;
  description: string;
  category: string;
  demo: true;
  licenseLabel: string;
} & DemoImage;

export type GalleryPlaceholder = {
  kind: 'placeholder';
  title: string;
  description: string;
  alt: string;
};

export type GalleryLightboxContent = GalleryItem | GalleryPlaceholder;

const demoDescription = `${demoContent.disclaimer} Sumber foto: ${demoImageLicense.source}.`;

export const galleryItems: GalleryItem[] = [
  {
    ...demoImages.pinkBear,
    id: 'pink-plush-bears',
    title: 'Beruang plush dalam nuansa pink',
    description: demoDescription,
    category: 'Beruang & Hewan',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
  {
    ...demoImages.plushDucks,
    id: 'plush-ducks',
    title: 'Boneka bebek plush',
    description: demoDescription,
    category: 'Karakter Plush',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
  {
    ...demoImages.elephantShark,
    id: 'elephant-and-shark',
    title: 'Gajah dan hiu plush',
    description: demoDescription,
    category: 'Beruang & Hewan',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
  {
    ...demoImages.plushCollection,
    id: 'plush-animal-collection',
    title: 'Koleksi boneka plush',
    description: demoDescription,
    category: 'Koleksi Plush',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
  {
    ...demoImages.unicorn,
    id: 'unicorn-plush',
    title: 'Unicorn plush',
    description: demoDescription,
    category: 'Karakter Fantasi',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
  {
    ...demoImages.dinosaurs,
    id: 'dinosaur-plushies',
    title: 'Dinosaurus plush',
    description: demoDescription,
    category: 'Karakter Fantasi',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
  {
    ...demoImages.wolfKoala,
    id: 'wolf-and-koala',
    title: 'Serigala dan koala plush',
    description: demoDescription,
    category: 'Beruang & Hewan',
    kind: 'image',
    demo: true,
    licenseLabel: demoImageLicense.label,
  },
];

export const galleryPlaceholder: GalleryPlaceholder = {
  kind: 'placeholder',
  title: 'Preview placeholder portofolio',
  description: 'Ini adalah placeholder pengembangan, bukan foto atau portofolio asli Honeybys.craft.',
  alt: 'Placeholder berlabel untuk menandai bahwa foto karya asli belum tersedia.',
};