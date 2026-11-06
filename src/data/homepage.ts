import { customerImages } from './customerImages';

export const featuredServices = [
  {
    name: 'Boneka Custom',
    description: 'Boneka satuan hingga jumlah besar berdasarkan desain dan karakter pilihanmu.',
    image: customerImages.one,
    layout: 'portrait',
  },
  {
    name: 'Boneka Flanel & Maskot',
    description: 'Wujudkan maskot, karakter brand, anime, game, atau idol favoritmu.',
    image: customerImages.two,
    layout: 'landscape',
  },
  {
    name: 'Bantal Custom',
    description: 'Bantal karakter dengan desain, ukuran, dan detail yang bisa dipersonalisasi.',
    image: customerImages.three,
    layout: 'portrait',
  },
  {
    name: 'Tas & Pouch',
    description: 'Aksesori custom yang unik untuk hadiah, koleksi, atau kebutuhan brand.',
    image: customerImages.four,
    layout: 'landscape',
  },
] as const;

export const featuredGallery = [
  {
    number: '01',
    title: 'Boneka custom karakter',
    image: customerImages.one,
    layout: 'tall',
  },
  {
    number: '02',
    title: 'Boneka custom handmade',
    image: customerImages.three,
    layout: 'wide',
  },
  {
    number: '03',
    title: 'Koleksi custom Honeybys.craft',
    image: customerImages.five,
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
    number: '🤎',
    title: 'No Minimum Order',
    description: 'Pesan satuan? Tentu bisa! Kami menerima pesanan mulai dari satu buah.',
  },
  {
    number: '🧸',
    title: 'Custom Made',
    description: 'Dibuat berdasarkan desain dan karakter pilihanmu.',
  },
  {
    number: '🎨',
    title: 'Personalized Design',
    description: 'Karakter, outfit, hingga ekspresi bisa disesuaikan dengan keinginanmu.',
  },
  {
    number: '📦',
    title: 'Flexible Quantity',
    description: 'Menerima pesanan satuan, small batch, hingga big quantity.',
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