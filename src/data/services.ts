export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const confirmedServices: ServiceCategory[] = [
  { id: 'custom-doll', name: 'Boneka Custom', description: 'Boneka satuan tanpa minimum order, dibuat berdasarkan desain dan karakter pilihanmu.' },
  { id: 'felt-doll', name: 'Boneka Flanel', description: 'Boneka flanel dengan detail personal untuk hadiah, koleksi, atau kebutuhan spesial.' },
  { id: 'mascot', name: 'Maskot', description: 'Maskot custom untuk brand, komunitas, event, sekolah, dan kebutuhan promosi.' },
  { id: 'custom-pillow', name: 'Bantal Custom', description: 'Bantal karakter dengan desain dan ukuran yang dapat disesuaikan.' },
  { id: 'bag-pouch', name: 'Tas & Pouch', description: 'Tas dan pouch custom yang praktis, unik, dan sesuai karakter pilihanmu.' },
];

export const servicePageContent = {
  title: 'Layanan custom untuk setiap karakter dan cerita.',
  intro: 'Mulai dari satu pesanan tanpa minimum order. Kami membuat boneka, maskot, bantal, tas, dan pouch berdasarkan desain pilihanmu.',
  detailIntro: 'Kamu bisa membawa desain sendiri atau memilih inspirasi dari anime, karakter game, idol K-pop, hingga animal plushie.',
  pendingTitle: 'Konsultasikan kebutuhanmu.',
  pendingDescription: 'Jumlah, ukuran, bahan, dan detail pengerjaan dibahas bersama melalui WhatsApp.',
} as const;