# Release Notes: Sabda Academy Website v1.1.0

**Release Title:** v1.1.0 - Optimasi Performa Statis (SSG), Dukungan Tabel GFM, & Turbopack Dev Engine

Rilis minor versi **v1.1.0** ini membawa peningkatan signifikan pada performa website, transisi rute blog menjadi Static Site Generation (SSG) instan, dukungan tabel responsif berbasis GitHub Flavored Markdown (GFM), serta publikasi artikel edukasi terbaru.

---

## 🚀 Fitur Baru & Peningkatan (New Features & Enhancements)

### 1. Optimasi Performa & Static Site Generation (SSG) untuk Blog
- **Transisi ke Halaman Statis Murni:** Halaman `/blog` kini sepenuhnya berstatus `○ (Static)`, menghilangkan overhead server rendering (SSR) dinamis sehingga halaman terbuka secara instan dari cache edge/CDN.
- **Client Component `BlogList`:** Filter kategori artikel dipindahkan ke komponen klien interaktif dengan transisi cepat tanpa perlu request ulang ke server.
- **Turbopack Dev Engine:** Mengaktifkan flag `--turbopack` pada alur development lokal untuk mempercepat waktu kompilasi awal dan Fast Refresh hingga 4x–10x lebih cepat.

### 2. Dukungan Penuh Tabel Markdown (GitHub Flavored Markdown)
- **Integrasi `remark-gfm`:** Menambahkan pustaka parser resmi GFM ke dalam alur render `next-mdx-remote`.
- **Komponen Tabel Responsif & Estetis:** Elemen `<table>`, `<th>`, dan `<td>` kini terbungkus otomatis dalam card yang rapi (`shadow-card`, `rounded-2xl`) dengan dukungan scroll horizontal (`overflow-x-auto`) yang nyaman dibaca di perangkat smartphone.

### 3. Penambahan Artikel Blog Edukasi Baru
- **Artikel:** *"Apa Itu Koding? Kenalkan Dunia Coding ke Anak Sejak Dini"* (`/blog/kenalkan-dunia-koding-ke-anak-sejak-dini`).
- Menghadirkan panduan komprehensif bagi orang tua mengenai pentingnya melatih logika dan pola pikir komputasional pada anak sejak dini, lengkap dengan komparasi manfaat berbasis tabel interaktif.

### 4. Fleksibilitas Parser Konten Multi-Format
- Parser konten di `lib/content.ts` kini mendukung format Markdown ganda (`.md` dan `.mdx`) secara otomatis serta penanganan fallback slug yang fleksibel.

---

## 📋 Ringkasan Perubahan (Changelog)
- `feat(blog)`: Tambah dukungan parsing tabel GFM (`remark-gfm`) dan styling tabel responsif di MDX.
- `feat(blog)`: Tambah artikel edukasi *"Kenalkan Dunia Koding ke Anak Sejak Dini"*.
- `perf(blog)`: Ubah halaman `/blog` menjadi Static Site Generation (SSG) dengan komponen klien `BlogList`.
- `perf(dx)`: Aktifkan Turbopack (`next dev --turbopack`) untuk alur development lokal.
- `fix(content)`: Dukung format file `.md` dan `.mdx` pada engine pembaca konten.
- `chore`: Bump versi aplikasi ke `v1.1.0`.

---
*Sabda Academy — Membantu anak belajar coding, kreativitas, dan problem solving melalui project yang menyenangkan.*
