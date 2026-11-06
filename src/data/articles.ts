import { demoContent, demoImages, type DemoImage } from './demoContent';

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type DemoArticle = {
  slug: string;
  title: string;
  excerpt: string;
  cover: DemoImage;
  category: string;
  publicationLabel: string;
  isDemo: true;
  sections: ArticleSection[];
};

export const demoArticles: DemoArticle[] = [
  {
    slug: 'mengenal-proses-boneka-custom-demo',
    title: 'Mengenal Proses Pembuatan Boneka Custom',
    excerpt: 'Catatan demo tentang hal-hal yang dapat dibicarakan saat merencanakan boneka custom.',
    cover: demoImages.elephantShark,
    category: 'Panduan Demo',
    publicationLabel: 'Tanggal demo',
    isDemo: true,
    sections: [
      {
        heading: 'Mulai dari gagasan',
        paragraphs: [
          'Sebuah ide dapat dimulai dari karakter, ilustrasi, atau gambaran sederhana. Catatan ini merupakan konten demo untuk menunjukkan format artikel, bukan penjelasan tentang proses aktual Honeybys.craft.',
          'Sebelum berdiskusi, Anda dapat mencatat tujuan pembuatan dan detail yang paling penting bagi Anda.',
        ],
      },
      {
        heading: 'Detail perlu dikonfirmasi',
        paragraphs: [
          'Bahan, ukuran, harga, jumlah minimum, dan estimasi waktu berbeda menurut kebutuhan dan penyedia layanan. Informasi tersebut perlu dikonfirmasi langsung sebelum menjadi bagian dari kesepakatan.',
        ],
      },
    ],
  },
  {
    slug: 'inspirasi-hadiah-personal-demo',
    title: 'Inspirasi Hadiah Personal dengan Boneka Custom',
    excerpt: 'Beberapa pertanyaan ringan untuk membantu memilih konsep hadiah yang terasa personal.',
    cover: demoImages.pinkBear,
    category: 'Inspirasi Demo',
    publicationLabel: 'Tanggal demo',
    isDemo: true,
    sections: [
      {
        heading: 'Pikirkan cerita di balik hadiah',
        paragraphs: [
          'Karakter, warna, atau benda yang bermakna dapat menjadi titik awal mencari ide hadiah. Artikel ini adalah contoh editorial, bukan contoh pesanan atau hasil pelanggan Honeybys.craft.',
          'Tuliskan siapa penerimanya dan suasana yang ingin disampaikan. Tidak perlu menetapkan semua detail sebelum konsultasi.',
        ],
      },
      {
        heading: 'Pastikan detail sebelum memesan',
        paragraphs: [
          'Sampaikan konsep dan tanyakan detail yang belum diketahui. Ketersediaan desain, ukuran, bahan, harga, dan waktu pengerjaan harus dikonfirmasi oleh penyedia layanan.',
        ],
      },
    ],
  },
  {
    slug: 'menyiapkan-referensi-boneka-custom-demo',
    title: 'Cara Menyiapkan Referensi untuk Membuat Boneka Custom',
    excerpt: 'Checklist sederhana untuk merapikan ide visual sebelum memulai konsultasi.',
    cover: demoImages.plushDucks,
    category: 'Panduan Demo',
    publicationLabel: 'Tanggal demo',
    isDemo: true,
    sections: [
      {
        heading: 'Pilih referensi yang membantu',
        paragraphs: [
          'Kumpulkan gambar, ilustrasi, atau catatan yang menjelaskan bentuk dan karakter yang Anda bayangkan. Tandai bagian yang paling penting agar mudah dijelaskan.',
          'Referensi berfungsi sebagai bahan pembicaraan. Kesesuaian desain dan hak penggunaan gambar perlu dibahas sebelum pengerjaan.',
        ],
      },
      {
        heading: 'Siapkan pertanyaan',
        paragraphs: [
          'Tanyakan hal-hal yang belum jelas, seperti opsi ukuran, bahan, harga, jumlah minimum, dan estimasi waktu. Jawaban untuk setiap detail harus dikonfirmasi oleh penyedia layanan.',
        ],
      },
    ],
  },
  {
    slug: 'daya-tarik-boneka-handmade-demo',
    title: 'Mengapa Boneka Handmade Memiliki Daya Tarik Tersendiri?',
    excerpt: 'Artikel demo singkat tentang ide personal dan pilihan boneka handmade.',
    cover: demoImages.wolfKoala,
    category: 'Inspirasi Demo',
    publicationLabel: 'Tanggal demo',
    isDemo: true,
    sections: [
      {
        heading: 'Pilihan yang berangkat dari ide',
        paragraphs: [
          'Sebagian orang tertarik pada benda yang berhubungan dengan cerita atau karakter tertentu. Artikel ini merupakan contoh konten umum dan bukan klaim mengenai hasil, bahan, atau metode kerja Honeybys.craft.',
        ],
      },
      {
        heading: 'Cari informasi yang terverifikasi',
        paragraphs: [
          'Sebelum memesan, bicarakan detail desain dan tanyakan informasi yang belum tersedia. Ketentuan dapat berbeda dan perlu dikonfirmasi langsung dengan penyedia layanan.',
        ],
      },
    ],
  },
];

export const articleDemoDisclaimer = demoContent.disclaimer;