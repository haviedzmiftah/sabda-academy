# Workflow Blog MDX

Artikel blog berada di `content/blog/*.mdx`. Menambahkan artikel baru tidak memerlukan perubahan pada komponen React.

## Frontmatter wajib

```md
---
title: "Judul artikel"
slug: "judul-artikel"
description: "Ringkasan 1-2 kalimat untuk kartu dan metadata SEO."
category: "Parenting & Edukasi"
date: "2026-09-06"
author: "Sabda Academy"
readingTime: "5 menit"
image: "/images/blog/judul-artikel.jpg"
---
```

`image` bersifat opsional. Jika diisi, nilainya digunakan sebagai Open Graph image.

## Menambah dan memeriksa artikel

1. Buat file dengan nama slug di `content/blog/`.
2. Isi seluruh frontmatter dan tulis konten menggunakan Markdown/MDX.
3. Jalankan `npm run typecheck`, `npm run lint`, dan `npm run build`.
4. Periksa kartu di `/blog` dan metadata halaman detail.
5. Publikasikan perubahan melalui pull request.

Artikel otomatis tersedia di `/blog/[slug]`, masuk daftar kategori, dan memperoleh metadata Open Graph melalui `generateMetadata`.

## Pedoman editorial

- Gunakan bahasa Indonesia yang hangat, jelas, dan tidak menggurui.
- Fokus pada manfaat konkret untuk anak dan orang tua.
- Gunakan heading singkat dan paragraf pendek.
- Hindari klaim hasil atau statistik yang belum diverifikasi.
- Sertakan CTA hanya ketika relevan dengan konteks artikel.
