# Release Notes: Sabda Academy Website v1.0.0

**Release Title:** v1.0.0 - Peluncuran Resmi Website Sabda Academy & Kesiapan Produksi Vercel

Kami bangga mengumumkan peluncuran versi perdana (**v1.0.0**) dari website **Sabda Academy**! Rilis ini menghadirkan pengalaman digital lengkap bagi calon siswa dan orang tua untuk mengeksplorasi program belajar coding, membaca artikel edukatif, hingga mendaftar kelas uji coba (*trial class*). Versi ini juga telah dioptimasi penuh dan siap dideploy di platform cloud Vercel.

---

## 🚀 Fitur Utama (Key Features)

### 1. Halaman Utama & Profil Akademi (Landing Pages)
- **Desain UI/UX Eksklusif & Responsif:** Menggunakan sistem desain modern berbasis Tailwind CSS yang nyaman diakses dari smartphone, tablet, maupun desktop.
- **Metode Belajar Terstruktur:** Pengenalan tahapan kurikulum *Explore, Learn, Build, & Present*.
- **Showcase Karya & Testimoni:** Galeri proyek nyata buatan siswa dan ulasan dari para orang tua.
- **Footer Terpadu & Lokasi Maps:** Tautan interaktif lokasi fisik Sabda Academy via Google Maps yang diposisikan rapi di tengah footer halaman.

### 2. Alur Pendaftaran Trial Class (Conversion Flow)
- **Formulir Interaktif & Validasi Ketat:** Pendaftaran kelas uji coba yang intuitif dan cepat untuk orang tua calon siswa.
- **Aksesibilitas & Kontras Tinggi:** Optimalisasi kontras warna pada tombol aksi (*Call to Action*) untuk keterbacaan yang optimal dan ramah aksesibilitas.

### 3. Sistem Publikasi Blog (MDX Engine)
- **Format Konten Fleksibel:** Manajemen artikel menggunakan format MDX yang mendukung komponen interaktif dan tipografi ramah pembaca.
- **Edukasi Teknologi Anak:** Kanal berbagi wawasan seputar dunia pemrograman, kreativitas anak, dan berita kegiatan akademi.

---

## 🛠 Fondasi Teknis & Kesiapan Produksi (Tech Stack & Deployment)

- **Framework Next.js & React Modern:** Performa rendering cepat dengan arsitektur App Router dan efisiensi bundle statis.
- **Optimasi Deploy Vercel:**
  - Konfigurasi penanganan otomatis variabel URL (`VERCEL_URL` fallback) untuk mencegah kendala pembentukan URL metadata statis.
  - Pembaruan pustaka `next-mdx-remote` ke versi `^6.0.0` guna memenuhi standar keamanan terbaru dari Vercel Build System.
- **Fondasi SEO & A11y:** Penerapan metadata dinamis, OpenGraph, file `sitemap.xml`, `robots.txt`, dan struktur semantik HTML untuk indeksasi mesin pencari yang optimal.
- **Integrasi CLI:** Proyek telah terhubung langsung dengan Vercel CLI dan repositori GitHub untuk alur Continuous Integration & Continuous Deployment (CI/CD).

---

## 📋 Ringkasan Riwayat Perubahan (Changelog)
- `fix`: Upgrade pustaka `next-mdx-remote` ke versi 6 untuk keamanan dan kompatibilitas build Vercel.
- `fix`: Penanganan fallback URL lingkungan Vercel pada metadata halaman.
- `feat`: Penambahan dan penataan posisi tautan Google Maps di tengah footer.
- `feat`: Implementasi fondasi SEO, meta tag, dan aksesibilitas.
- `feat`: Alur formulir pendaftaran trial class dan penguatan kontras warna tombol CTA.
- `feat`: Sistem artikel blog berbasis MDX.
- `feat`: Halaman landing page lengkap (Home, Program, Kontak, FAQ, Tentang Kami).

---
*Terima kasih atas dukungan Anda dalam mewujudkan langkah pertama Sabda Academy. Mari bersama-sama menginspirasi anak-anak berkreasi melalui teknologi!*
