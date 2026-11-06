export const demoContent = {
  badge: '',
  imageBadge: '',
  disclaimer: '',
} as const;

export const demoImageLicense = {
  source: 'Pexels',
  label: 'Pexels License',
  url: 'https://www.pexels.com/license/',
} as const;

export type DemoImage = {
  src: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
};

export const demoImages = {
  pinkBear: {
    src: '/assets/images/gallery/demo/demo-plush-bear-pink.jpg',
    alt: 'Foto ilustrasi dua boneka plush pink di atas tempat tidur.',
    photographer: 'Karola G',
    sourceUrl: 'https://www.pexels.com/photo/pink-bear-plush-toy-on-white-bed-4887156/',
  },
  plushDucks: {
    src: '/assets/images/gallery/demo/demo-plush-ducks.jpg',
    alt: 'Foto ilustrasi boneka bebek plush dengan pita di dalam kantong kertas.',
    photographer: 'Vidal Balielo Jr.',
    sourceUrl: 'https://www.pexels.com/photo/toy-ducks-in-paper-bags-11281628/',
  },
  elephantShark: {
    src: '/assets/images/gallery/demo/demo-elephant-shark.jpg',
    alt: 'Foto ilustrasi boneka gajah dan hiu plush berdampingan.',
    photographer: 'Chung-En Hu',
    sourceUrl: 'https://www.pexels.com/photo/animal-plush-toys-on-the-bed-5868299/',
  },
  plushCollection: {
    src: '/assets/images/gallery/demo/demo-plush-collection.jpg',
    alt: 'Foto ilustrasi koleksi boneka teddy bear, gajah, dan singa plush.',
    photographer: 'Tuğba Kobal Yılmaz',
    sourceUrl: 'https://www.pexels.com/photo/close-up-photo-of-plush-toys-15130364/',
  },
  unicorn: {
    src: '/assets/images/gallery/demo/demo-unicorn-plush.jpg',
    alt: 'Foto ilustrasi boneka unicorn plush berwarna putih dan pink.',
    photographer: 'Karola G',
    sourceUrl: 'https://www.pexels.com/photo/white-and-pink-unicorn-plush-toy-4887163/',
  },
  dinosaurs: {
    src: '/assets/images/gallery/demo/demo-dinosaur-plushies.jpg',
    alt: 'Foto ilustrasi beberapa boneka dinosaurus plush di dalam keranjang.',
    photographer: 'Nikita Nikitin',
    sourceUrl: 'https://www.pexels.com/photo/stuffed-toys-in-the-basket-9119278/',
  },
  wolfKoala: {
    src: '/assets/images/gallery/demo/demo-wolf-koala.jpg',
    alt: 'Foto ilustrasi boneka serigala dan koala plush di dekat jendela.',
    photographer: 'Miguel Cuenca',
    sourceUrl: 'https://www.pexels.com/photo/adorable-stuffed-animal-duo-by-window-light-36550173/',
  },
} as const satisfies Record<string, DemoImage>;