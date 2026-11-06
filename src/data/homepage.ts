import { demoImages } from './demoContent';

export const featuredServices = [
  {
    name: 'Custom Character Doll',
    description: 'Contoh kategori sementara untuk bahan pembahasan, bukan layanan yang sudah dikonfirmasi.',
    image: demoImages.unicorn,
    layout: 'portrait',
  },
  {
    name: 'Corporate Mascot',
    description: 'Contoh kategori sementara untuk bahan pembahasan, bukan layanan yang sudah dikonfirmasi.',
    image: demoImages.wolfKoala,
    layout: 'landscape',
  },
  {
    name: 'Custom Plush Pillow',
    description: 'Contoh kategori sementara untuk bahan pembahasan, bukan layanan yang sudah dikonfirmasi.',
    image: demoImages.plushDucks,
    layout: 'portrait',
  },
  {
    name: 'Educational Plush',
    description: 'Contoh kategori sementara untuk bahan pembahasan, bukan layanan yang sudah dikonfirmasi.',
    image: demoImages.plushCollection,
    layout: 'landscape',
  },
] as const;

export const featuredGallery = [
  {
    number: '01',
    title: 'Beruang plush pink / Foto ilustrasi',
    image: demoImages.pinkBear,
    layout: 'tall',
  },
  {
    number: '02',
    title: 'Boneka bebek plush / Foto ilustrasi',
    image: demoImages.plushDucks,
    layout: 'wide',
  },
  {
    number: '03',
    title: 'Gajah dan hiu plush / Foto ilustrasi',
    image: demoImages.elephantShark,
    layout: 'square',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Konsultasikan ide',
    description: 'Ceritakan karakter, kebutuhan, atau gambaran awal yang ingin dibahas.',
  },
  {
    number: '02',
    title: 'Kirim referensi',
    description: 'Siapkan ilustrasi atau referensi visual untuk menjadi bahan diskusi.',
  },
  {
    number: '03',
    title: 'Bahas detail',
    description: 'Ukuran, bahan, ketentuan, dan detail lain perlu dikonfirmasi bersama.',
  },
  {
    number: '04',
    title: 'Proses pengerjaan',
    description: 'Pengerjaan dibahas setelah kebutuhan dan detail pesanan disepakati.',
  },
  {
    number: '05',
    title: 'Penyelesaian',
    description: 'Penyerahan hasil mengikuti detail yang telah dikonfirmasi bersama.',
  },
] as const;

export const studioPrinciples = [
  {
    number: '01',
    title: 'Berangkat dari ide personal',
    description: 'Karakter, ilustrasi, atau kebutuhan Anda menjadi awal pembicaraan.',
  },
  {
    number: '02',
    title: 'Detail dibahas bersama',
    description: 'Kebutuhan dan kemungkinan pengerjaan dikonfirmasi sebelum melangkah lebih jauh.',
  },
  {
    number: '03',
    title: 'Alur yang mudah diikuti',
    description: 'Dari konsultasi hingga penyerahan, tahapannya dibicarakan dengan jelas.',
  },
] as const;

export const homepageFaqs = [
  {
    question: 'Apakah desain boneka bisa dibuat sesuai permintaan?',
    answer: 'Honeybys.craft berfokus pada boneka custom. Ceritakan desain atau karakter yang Anda bayangkan; detail yang dapat dikerjakan perlu dikonfirmasi saat konsultasi.',
  },
  {
    question: 'Bagaimana cara memulai konsultasi?',
    answer: 'Mulai lewat tombol konsultasi WhatsApp. Sampaikan ide dan kebutuhan awal; detail lanjutannya dibahas bersama sebelum pemesanan.',
  },
  {
    question: 'Apakah saya bisa mengirim referensi gambar?',
    answer: 'Anda dapat menyiapkan referensi gambar sebagai bahan pembahasan. Cara pengiriman dan detail penggunaannya akan dikonfirmasi saat konsultasi.',
  },
  {
    question: 'Bagaimana proses pemesanannya?',
    answer: 'Alur umum dimulai dari konsultasi ide, membahas referensi dan detail, proses pengerjaan, lalu penyelesaian dan penyerahan hasil. Ketentuan akhirnya perlu dikonfirmasi bersama.',
  },
  {
    question: 'Apakah ukuran boneka dapat disesuaikan?',
    answer: 'Informasi pilihan ukuran belum tersedia. Sampaikan preferensi ukuran saat konsultasi agar dapat dibahas dan dikonfirmasi.',
  },
] as const;