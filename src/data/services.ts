export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const confirmedServices: ServiceCategory[] = [];

export const servicePageContent = {
  title: 'Custom boneka, dimulai dari ide yang ingin Anda ceritakan.',
  intro: 'Honeybys.craft berfokus pada layanan pembuatan boneka custom. Sampaikan karakter, ilustrasi, atau kebutuhan awal untuk dibahas bersama.',
  detailIntro: 'Kategori layanan resmi belum dikonfirmasi. Detail permintaan akan dibicarakan sebelum informasi pengerjaan ditetapkan.',
  pendingTitle: 'Daftar kategori layanan menunggu konfirmasi.',
  pendingDescription: 'Harga, bahan, ukuran, jumlah minimum, estimasi pengerjaan, dan ketentuan layanan belum tersedia untuk ditampilkan.',
} as const;