# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Honeybys.craft --- Website Jasa Custom Boneka

**Versi:** 2.0\
**Tanggal:** 6 November 2026\
**Status:** Draft acuan implementasi

------------------------------------------------------------------------

## 1. Ringkasan Produk

Honeybys.craft adalah website profil bisnis untuk layanan pembuatan
boneka custom. Website berfungsi sebagai media branding, portofolio,
informasi layanan, dan sarana calon pelanggan menghubungi bisnis untuk
konsultasi melalui WhatsApp.

Website harus membangun kesan **premium, hangat, kreatif, ramah, dan
handmade**. Pengunjung perlu memahami karakter layanan, melihat hasil
karya, mengetahui proses pemesanan, lalu menghubungi Honeybys.craft.

Website ini bukan toko online. Tidak ada proses pembelian otomatis atau
pembayaran di dalam website.

### Informasi bisnis terverifikasi

-   Brand: Honeybys.craft.
-   Pemilik: Siwi Setianingsih.
-   Tahun berdiri: 2017.
-   Lokasi: Solo, Jawa Tengah.
-   WhatsApp: `+6285877766376`.
-   Jam operasional: 08.00-21.00 WIB.
-   Email: belum tersedia.
-   Alamat lengkap: belum tersedia.

## 2. Tujuan

1.  Memperkuat identitas dan kepercayaan terhadap brand Honeybys.craft.
2.  Menampilkan layanan custom boneka dengan penjelasan yang mudah
    dipahami.
3.  Menyajikan galeri hasil karya sebagai portofolio.
4.  Menjelaskan alur konsultasi dan pengerjaan secara ringkas.
5.  Mengarahkan calon pelanggan ke WhatsApp untuk konsultasi gratis.
6.  Menyediakan artikel untuk informasi dan dukungan SEO.

### Indikator keberhasilan

-   Pengunjung dapat menemukan layanan, galeri, dan kontak dengan mudah.
-   Tombol WhatsApp terlihat dan berfungsi pada halaman yang relevan.
-   Seluruh halaman utama dapat diakses melalui navigasi.
-   Tampilan responsif di ponsel, tablet, dan desktop.
-   Halaman memiliki metadata dasar SEO dan struktur konten yang baik.

## 3. Target Pengguna

-   Individu yang ingin membuat boneka berdasarkan karakter, ilustrasi,
    atau ide pribadi.
-   Komunitas, kreator, atau pemilik karakter yang membutuhkan
    merchandise boneka.
-   Perusahaan atau organisasi yang membutuhkan maskot.
-   Calon pelanggan yang ingin melihat contoh karya dan berkonsultasi
    sebelum memesan.

## 4. Ruang Lingkup

### Termasuk dalam proyek

-   Website publik multi-halaman.
-   Navigasi dan footer bersama.
-   Halaman Home, Services, Gallery, Contact, Articles, dan Article
    Detail.
-   Tombol konsultasi WhatsApp.
-   Galeri dengan filter kategori dan tampilan gambar lebih besar
    (lightbox).
-   Konten artikel berbasis file lokal/Markdown.
-   SEO dasar, aksesibilitas dasar, dan desain responsif.
-   Animasi ringan yang tidak mengganggu performa.

### Tidak termasuk dalam proyek

-   Dashboard admin.
-   Halaman login admin atau pelanggan.
-   Database, Supabase, atau backend khusus.
-   CMS.
-   Katalog dengan sistem transaksi.
-   Keranjang belanja dan checkout.
-   Payment gateway atau pembayaran online.
-   Pelacakan status pesanan.
-   Kalkulasi harga otomatis atau sistem quotation otomatis.
-   Live chat otomatis.
-   Sistem akun pelanggan.

Konten dan aset dikelola langsung melalui file proyek oleh
pengembang/pengelola website.

## 5. Struktur Halaman dan Routing

Setiap menu utama wajib memiliki halaman/route tersendiri. Jangan
menjadikan semua menu hanya sebagai anchor section pada homepage.

  -----------------------------------------------------------------------
  Route                   Halaman                 Tujuan
  ----------------------- ----------------------- -----------------------
  `/`                     Home                    Memperkenalkan brand
                                                  dan mengarahkan
                                                  pengunjung ke
                                                  layanan/WhatsApp

  `/services`             Services                Menjelaskan layanan
                                                  custom boneka

  `/gallery`              Gallery                 Menampilkan portofolio
                                                  hasil karya

  `/contact`              Contact                 Menyediakan informasi
                                                  dan jalur konsultasi

  `/articles`             Articles                Menampilkan daftar
                                                  artikel

  `/articles/:slug`       Article Detail          Menampilkan isi artikel
                                                  berdasarkan slug
  -----------------------------------------------------------------------

Navbar dan footer digunakan bersama pada seluruh halaman. Tombol
WhatsApp mengambang dapat ditampilkan secara konsisten selama tidak
menutupi konten penting di layar kecil.

## 6. Rincian Fitur per Halaman

### 6.1 Home (`/`)

Urutan section yang disarankan:

1.  **Hero**
    -   Headline utama yang memperkenalkan layanan custom boneka.
    -   Deskripsi singkat dan jelas.
    -   CTA utama: konsultasi melalui WhatsApp.
    -   Visual utama berupa foto karya/ilustrasi brand yang relevan.
2.  **Brand Introduction**
    -   Penjelasan singkat tentang Honeybys.craft.
    -   Menonjolkan karakter handmade, personal, dan custom.
3.  **Services Preview**
    -   Ringkasan beberapa jenis layanan.
    -   Setiap item mengarah ke halaman Services.
4.  **Featured Gallery**
    -   Pilihan karya unggulan.
    -   CTA menuju halaman Gallery.
5.  **How It Works**
    -   Gambaran proses konsultasi hingga hasil akhir.
    -   Hindari menjanjikan durasi atau ketentuan yang belum
        dikonfirmasi.
6.  **Why Choose Us**
    -   Keunggulan yang benar-benar dapat dibuktikan oleh pemilik
        bisnis.
    -   Jangan menulis klaim seperti "terbaik", "nomor satu", atau
        garansi tertentu tanpa dasar.
7.  **Testimonials (opsional)**
    -   Hanya tampilkan testimoni asli yang telah disetujui pemiliknya.
    -   Jika belum tersedia, section dapat dihilangkan.
8.  **Final CTA**
    -   Ajakan konsultasi melalui WhatsApp.

### 6.2 Services (`/services`)

-   Intro halaman layanan.
-   Daftar layanan dalam layout card atau editorial sections.
-   Setiap layanan memiliki nama, deskripsi, dan foto/ilustrasi bila
    tersedia.
-   CTA konsultasi WhatsApp.

Contoh kategori awal untuk bahan konfirmasi, bukan klaim layanan
final: - Custom Character Doll. - Corporate Mascot. - Custom Plush
Pillow. - Educational Plush.

Kategori final harus mengikuti layanan yang benar-benar disediakan oleh
Honeybys.craft.

### 6.3 Gallery (`/gallery`)

-   Grid portofolio yang mengutamakan foto karya.
-   Filter kategori bila jumlah karya dan kategorinya memadai.
-   Lightbox untuk melihat gambar dalam ukuran lebih besar.
-   Setiap karya dapat memiliki judul dan deskripsi singkat.
-   Layout responsif dan gambar dioptimalkan agar halaman tidak berat.
-   CTA konsultasi di bagian akhir.

Jangan membuat gambar portofolio fiktif yang seolah-olah merupakan hasil
karya asli. Aset sementara harus diberi status placeholder selama
pengembangan.

### 6.4 Contact (`/contact`)

-   Menampilkan brand, pemilik, lokasi Solo, Jawa Tengah, nomor WhatsApp,
    dan jam operasional 08.00-21.00 WIB dari konfigurasi bisnis terpusat.
-   Tombol WhatsApp menggunakan helper bersama dan pesan konsultasi
    resmi.
-   Email dan alamat lengkap tidak ditampilkan karena belum tersedia.
-   Foto plush Pexels pada halaman adalah ilustrasi demo dan bukan karya
    Honeybys.craft.
-   Tidak perlu membuat form yang mengirim data ke backend.
-   Bila form kontak statis tidak memiliki tujuan pengiriman yang nyata,
    jangan tampilkan seolah-olah form tersebut berfungsi.

### 6.5 Articles (`/articles`)

-   Daftar artikel dengan judul, ringkasan, gambar, tanggal demo, dan
    kategori.
-   Setiap artikel mengarah ke route detail.
-   Konten demo dikelola melalui data lokal terstruktur dan memiliki label
    "Konten Demo".
-   Foto cover memiliki label "Foto Ilustrasi" dan kredit sumber.
-   Sediakan empty state yang rapi jika belum ada artikel.

### 6.6 Article Detail (`/articles/:slug`)

-   Judul dan metadata artikel.
-   Gambar utama jika tersedia.
-   Isi artikel demo dengan struktur heading yang benar dan disclaimer
    bahwa konten bukan proses atau klaim resmi Honeybys.craft.
-   Navigasi kembali ke daftar artikel.
-   Artikel terkait dapat ditambahkan jika sesuai dan tidak membebani
    implementasi.
-   Metadata SEO dinamis per artikel, termasuk canonical dan Open Graph.
-   Slug tidak dikenal menampilkan halaman not-found.

## 7. Alur Pengguna Utama

1.  Pengunjung membuka homepage.
2.  Pengunjung memahami brand dan melihat contoh karya.
3.  Pengunjung membuka halaman Services atau Gallery untuk mendapatkan
    informasi lebih lanjut.
4.  Pengunjung menekan CTA WhatsApp.
5.  Konsultasi dan pembahasan detail dilakukan langsung melalui
    WhatsApp.

Website tidak menghitung harga atau membuat pesanan otomatis. Detail
kebutuhan dan kesepakatan ditangani dalam konsultasi.

## 8. Arah Visual dan Design System

### Konsep visual

**Premium Peach Handmade Studio**

Kesan yang ingin dicapai: - Premium tetapi tetap hangat. - Kreatif dan
handmade. - Ramah, lembut, dan personal. - Modern dengan sentuhan
editorial. - Tidak terlalu ramai atau terlihat seperti template toko
online generik.

### Palet warna

  Peran                 Warna             Hex
  --------------------- ----------------- -----------
  Background utama      Warm ivory        `#FFF5EF`
  Background sekunder   Soft peach        `#F8D8C8`
  Accent lembut         Peach coral       `#F2A995`
  Accent utama          Coral             `#E98578`
  Teks utama            Deep warm brown   `#754D49`
  Teks sekunder         Muted taupe       `#806D67`
  Surface/card          White             `#FFFFFF`

Gunakan warna accent secara terukur. Pastikan kontras teks dan tombol
tetap terbaca.

### Tipografi

-   Heading: **Playfair Display**.
-   Body/UI: **DM Sans**.
-   Gunakan hierarki ukuran dan ketebalan yang konsisten.
-   Pastikan fallback font tersedia jika font eksternal gagal dimuat.

### Komponen dan gaya

-   Whitespace yang cukup.
-   Komposisi asimetris/editorial bila mendukung konten.
-   Sudut card lembut dan konsisten.
-   Shadow tipis, bukan efek berat.
-   Bentuk dekoratif organik secukupnya.
-   Foto produk/karya menjadi fokus utama.
-   Transisi dan animasi ringan; hormati preferensi reduced motion.
-   Hindari efek berlebihan, autoplay yang mengganggu, dan animasi yang
    menurunkan performa.

## 9. Navigasi dan Komponen Bersama

### Navbar

-   Logo/wordmark Honeybys.craft.
-   Menu: Home, Services, Gallery, Articles, Contact.
-   Navigasi menuju route masing-masing.
-   Mobile navigation yang mudah digunakan.
-   Penanda halaman aktif.

### Footer

-   Identitas brand.
-   Link navigasi.
-   Link media sosial hanya jika tersedia.
-   Informasi kontak hanya jika telah dikonfirmasi.
-   Copyright dengan tahun dinamis atau tahun yang dikelola secara
    konsisten.
-   Kredit developer yang bersifat sekunder: "Designed & Developed by
    Temanweb", tertaut ke `https://temanweb.my.id` dan dibuka pada tab
    baru.

### WhatsApp CTA

-   Tombol utama pada section CTA.
-   Floating WhatsApp button dapat digunakan.
-   Nomor WhatsApp resmi: `6285877766376`.
-   URL: `https://wa.me/6285877766376`.
-   Pesan awal: "Halo Honeybys.craft, saya ingin konsultasi mengenai
    pembuatan boneka custom. Bisa saya mendapatkan informasi lebih
    lanjut?"
-   Gunakan URL encoding untuk pesan dan buka tautan dengan aman di tab
    baru.

## 10. Konten dan Aset

Aset dan informasi yang masih dibutuhkan dari pemilik bisnis:

-   Logo atau wordmark resmi.
-   Foto hasil karya asli.
-   Daftar layanan yang benar-benar tersedia.
-   Link Instagram/media sosial.
-   Email dan alamat lengkap belum tersedia.
-   Testimoni asli jika tersedia.
-   Informasi proses, bahan, ukuran, minimum order, estimasi waktu, dan
    ketentuan lain hanya jika memang sudah ditetapkan.

### Aset visual demo sementara

Foto berikut diunduh lokal dari halaman Pexels untuk uji tampilan. Foto
selalu diberi label "Foto Ilustrasi" dan "Konten Demo"; foto tidak
mewakili pesanan atau karya Honeybys.craft. Foto tersedia di
`public/assets/images/gallery/demo/` dan digunakan ulang sebagai cover
artikel agar tidak menggandakan file.

-   Beruang plush pink, Karola G:
    `https://www.pexels.com/photo/pink-bear-plush-toy-on-white-bed-4887156/`
-   Boneka bebek, Vidal Balielo Jr.:
    `https://www.pexels.com/photo/toy-ducks-in-paper-bags-11281628/`
-   Gajah dan hiu plush, Chung-En Hu:
    `https://www.pexels.com/photo/animal-plush-toys-on-the-bed-5868299/`
-   Koleksi boneka plush, Tuğba Kobal Yılmaz:
    `https://www.pexels.com/photo/close-up-photo-of-plush-toys-15130364/`
-   Unicorn plush, Karola G:
    `https://www.pexels.com/photo/white-and-pink-unicorn-plush-toy-4887163/`
-   Dinosaurus plush, Nikita Nikitin:
    `https://www.pexels.com/photo/stuffed-toys-in-the-basket-9119278/`
-   Wolf dan koala plush, Miguel Cuenca:
    `https://www.pexels.com/photo/adorable-stuffed-animal-duo-by-window-light-36550173/`

Lisensi Pexels yang berlaku untuk aset demo: `https://www.pexels.com/license/`.

Selama aset belum tersedia, gunakan placeholder yang jelas untuk
kebutuhan development. Jangan menyajikan data placeholder sebagai
informasi bisnis yang benar.

## 11. Struktur Konten Lokal

Konten statis sebaiknya dipisahkan dari komponen UI agar mudah
diperbarui.

Contoh pengelompokan: - Data layanan. - Data galeri. - Data
artikel/metadata artikel. - Informasi brand dan kontak.

Artikel dapat menggunakan Markdown dengan metadata slug, title, excerpt,
date, cover image, dan kategori. Implementasi detail mengikuti framework
dan struktur repository yang sudah ada.

## 12. Persyaratan Teknis

-   Audit dan gunakan framework serta dependency yang sudah ada di
    repository.
-   Jangan mengganti framework tanpa alasan teknis yang kuat dan
    persetujuan.
-   Gunakan routing yang sesuai dengan stack proyek.
-   Komponen dibuat reusable dan terpisah berdasarkan tanggung jawab.
-   Gunakan semantic HTML.
-   Optimalkan ukuran gambar dan gunakan lazy loading untuk gambar
    non-kritis.
-   Sediakan alt text yang bermakna.
-   Pastikan navigasi keyboard dan focus state terlihat.
-   Terapkan responsive layout untuk mobile, tablet, dan desktop.
-   Hindari dependency baru jika fitur dapat dibuat dengan dependency
    yang sudah tersedia.
-   Tidak memerlukan backend, database, atau autentikasi.

### SEO dasar

-   Title dan meta description unik untuk setiap halaman.
-   Heading terstruktur dan tidak melompat tanpa alasan.
-   URL artikel yang mudah dibaca.
-   Open Graph metadata dasar.
-   Sitemap dan robots.txt bila sesuai dengan cara deployment.
-   Alt text pada gambar konten.
-   Konten halaman tidak hanya berupa teks yang dirender sebagai gambar.

## 13. Non-Functional Requirements

### Performance

-   Halaman tetap responsif pada perangkat kelas menengah.
-   Optimasi gambar menjadi prioritas.
-   Hindari library animasi besar bila tidak diperlukan.
-   Hindari layout shift yang mengganggu.

### Accessibility

-   Kontras warna memadai.
-   Elemen interaktif dapat diakses keyboard.
-   Label dan aria yang sesuai untuk kontrol yang memerlukan nama
    aksesibel.
-   Ukuran target sentuh nyaman pada perangkat mobile.

### Maintainability

-   Struktur file jelas.
-   Konten dipisahkan dari presentasi.
-   Komponen tidak dibuat terlalu besar.
-   Nama file dan komponen konsisten.

### Reliability

-   Semua route dapat dibuka langsung dan saat halaman di-refresh.
-   Link internal tidak rusak.
-   CTA WhatsApp mengarah ke nomor resmi setelah tersedia.
-   Empty state dan gambar gagal dimuat ditangani dengan baik.

## 14. Kriteria Penerimaan

Proyek dapat dianggap memenuhi kebutuhan awal apabila:

1.  Semua route yang ditentukan tersedia dan dapat dibuka langsung.
2.  Setiap menu navigasi mengarah ke halaman tersendiri.
3.  Navbar dan footer konsisten pada seluruh halaman.
4.  CTA WhatsApp bekerja setelah nomor resmi dimasukkan.
5.  Gallery filter/lightbox berfungsi jika fitur tersebut
    diimplementasikan.
6.  Artikel dapat ditampilkan dari sumber konten lokal.
7.  Tampilan responsif pada ukuran mobile, tablet, dan desktop.
8.  Tidak ada link internal yang rusak atau error console kritis.
9.  Tidak ada dashboard admin, login, database, checkout, atau payment
    gateway.
10. Konten bisnis, testimoni, dan portofolio tidak direkayasa.
11. Build produksi berhasil menggunakan perintah yang sesuai dengan
    repository.
12. SEO dasar tersedia pada halaman utama dan detail artikel.

## 15. Tahapan Implementasi

Pengerjaan dilakukan bertahap. Selesaikan dan laporkan satu fase sebelum
melanjutkan ke fase berikutnya.

### Phase 0 --- Repository Audit

-   Periksa framework, dependency, struktur folder, routing, styling,
    asset, scripts, build, dan deployment.
-   Laporkan kondisi repository dan rekomendasi struktur implementasi.
-   Jangan mengubah source code, memasang dependency, atau membuat fitur
    pada fase ini.

### Phase 1 --- Frontend Foundation

-   Siapkan fondasi desain, typography, color tokens, global styles,
    shared layout, navbar, footer, dan routing.
-   Pastikan tidak merusak konfigurasi proyek yang sudah ada.

### Phase 2 --- Homepage

-   Implementasikan seluruh section homepage sesuai konsep visual dan
    konten yang tersedia.
-   Gunakan placeholder yang jelas untuk aset yang belum diberikan.

### Phase 3 --- Services dan Gallery

**Status: selesai pada 6 November 2026.**

-   Buat halaman Services dan Gallery.
-   Implementasikan grid, filter, dan lightbox sesuai kebutuhan.

#### Keputusan implementasi Phase 3

-   Daftar kategori layanan belum dikonfirmasi. Halaman Services
    menampilkan status menunggu konfirmasi dan tidak mempublikasikan
    kategori contoh, harga, bahan, ukuran, jumlah minimum, estimasi
    pengerjaan, atau jaminan.
-   Belum ada foto portofolio asli yang tersedia. Halaman Gallery
    menampilkan empty state yang jelas; preview placeholder diberi label
    dan tidak disajikan sebagai karya. Grid dan filter hanya tampil saat
    ada aset terverifikasi dengan kategori memadai.
-   Lightbox mendukung gambar galeri, Escape, tombol tutup, klik backdrop,
    penguncian scroll latar, dan navigasi fokus. Empty-state preview
    menggunakan modal yang sama untuk memperlihatkan status placeholder.
-   Hero menggunakan dekorasi abstrak parallax hanya pada sisi kiri.
    Efek memakai IntersectionObserver dan update scroll berbasis
    requestAnimationFrame; dekorasi hilang saat Hero keluar viewport dan
    tetap statis saat prefers-reduced-motion aktif.
-   Footer bersama memuat kredit "Designed & Developed by Temanweb" di
    bagian bawah dengan tautan eksternal yang aman.

### Phase 4 --- Contact dan Articles

**Status: selesai pada 6 November 2026.**

-   Buat halaman Contact.
-   Implementasikan daftar artikel dan halaman detail artikel berbasis
    konten lokal.

#### Keputusan implementasi Phase 4

-   Contact menggunakan informasi usaha dan WhatsApp dari konfigurasi
    terpusat. Alamat dan email tidak ditampilkan. Tidak ada form kontak
    yang memberi kesan mengirim data.
-   Empat artikel demo lokal mencakup slug, title, excerpt, cover,
    kategori, body terstruktur, status demo, dan label "Tanggal demo".
    Tidak ada penulis atau tanggal publikasi bisnis yang dikarang.
-   Tujuh foto Pexels disimpan lokal, dioptimalkan, diberi label demo,
    deskripsi alt, fotografer, sumber, dan lisensi. Foto yang sama dipakai
    sebagai cover artikel tanpa salinan aset tambahan.
-   Contact, listing, detail, Gallery, serta placeholder route memakai
    metadata halaman yang diperbarui saat navigasi SPA. Detail artikel
    menetapkan title, description, canonical, dan Open Graph; slug tidak
    dikenal menampilkan not-found.
-   Komponen DemoImage menampilkan fallback berlabel jika aset gambar
    lokal gagal dimuat.

### Phase 5 --- Quality Assurance dan Deployment

-   Periksa seluruh route, responsivitas, aksesibilitas dasar, SEO,
    performa, link, dan console.
-   Jalankan build produksi.
-   Dokumentasikan hasil pemeriksaan dan cara menjalankan/deploy
    website.

## 16. Aturan Kerja untuk AI Coding Agent

1.  Baca PRD ini dan audit repository sebelum mengubah kode.
2.  Ikuti fase secara berurutan; jangan mengerjakan semua fase
    sekaligus.
3.  Kerjakan hanya fase yang diminta pengguna.
4.  Setelah menyelesaikan satu fase, berhenti dan laporkan hasil untuk
    mendapat persetujuan.
5.  Jangan membuat dashboard admin, login, backend, database, CMS,
    checkout, atau fitur transaksi.
6.  Jangan mengarang nomor WhatsApp, alamat, layanan, harga, testimoni,
    atau portofolio.
7.  Pertahankan framework, dependency, dan konfigurasi proyek yang sudah
    ada kecuali ada alasan teknis yang dijelaskan dan disetujui.
8.  Sebelum menambah dependency, jelaskan alasan dan alternatifnya.
9.  Laporkan file yang dibuat/diubah, keputusan teknis, pengujian yang
    dijalankan, hasilnya, dan kendala.
10. Jangan menghapus atau menimpa file proyek yang sudah ada tanpa
    memahami fungsinya.
11. Utamakan implementasi yang sederhana, ringan, mudah dirawat, dan
    konsisten dengan design system.

------------------------------------------------------------------------

**Dokumen ini adalah acuan kebutuhan produk Honeybys.craft versi 2.0.**
Jika terdapat detail bisnis yang belum diberikan, tandai sebagai
kebutuhan konfirmasi dan jangan mengisinya dengan asumsi.
