# Sabda Academy: UI/UX Design System

## Status

- Dokumen: Design baseline
- Issue: [#2](https://github.com/haviedzmiftah/sabda-academy/issues/2)
- Tanggal: 2026-09-06
- Referensi positioning: [01-positioning-and-user-flow.md](../research/01-positioning-and-user-flow.md)

Dokumen ini adalah single source of truth untuk implementasi UI Sabda Academy. Nilai visual dibuat hangat dan energik untuk anak, dengan struktur yang tenang dan kredibel untuk orang tua.

## 1. Visual Direction

### Konsep: Curious Confidence

- **Curious:** aksen kuning, bentuk organik, ilustrasi project, dan micro-interaction ringan.
- **Confidence:** navy sebagai anchor, whitespace luas, grid konsisten, dan tipografi yang mudah dibaca.
- **Elegant:** jumlah warna dan dekorasi dibatasi; setiap section memiliki satu tujuan utama.

### Prinsip desain

1. **Parent-first clarity** — manfaat, usia, format, dan CTA terlihat sebelum detail teknis.
2. **Show the outcome** — tampilkan karya dan proses anak, bukan hanya daftar materi.
3. **Friendly, not childish** — gunakan ilustrasi ceria tanpa membuat brand terlihat seperti produk balita.
4. **Progressive disclosure** — detail lanjutan berada di halaman program, FAQ, atau accordion.
5. **Accessible by default** — keyboard, focus state, contrast, ukuran teks, dan reduced motion dipikirkan sejak awal.

### Moodboard direction

Gunakan referensi visual berikut saat membuat aset:

- Foto atau ilustrasi anak sedang membuat project, bukan stock photo yang terlalu staged.
- Screenshot game, animasi, atau website siswa dalam frame kartu yang rapi.
- Bentuk dekoratif seperti blob, grid dot, dan garis koneksi hanya sebagai aksen.
- Hindari background penuh pattern, neon berlebihan, dan animasi yang mengalihkan fokus CTA.

## 2. Design Tokens

### Warna

| Token | Hex | Penggunaan |
| --- | --- | --- |
| `brand.ink` | `#172554` | Heading, navbar, footer |
| `brand.navy` | `#1E3A8A` | Primary button, link aktif |
| `brand.blue` | `#2563EB` | Link, focus ring, informasi |
| `brand.yellow` | `#FACC15` | Aksen utama, badge, highlight |
| `brand.yellow-soft` | `#FEF3C7` | Background aksen dan callout |
| `brand.coral` | `#F97316` | Aksen sekunder, status perhatian |
| `surface.canvas` | `#FFFCF5` | Background halaman |
| `surface.white` | `#FFFFFF` | Card dan form |
| `surface.muted` | `#F1F5F9` | Section alternatif, input disabled |
| `text.primary` | `#172033` | Body text utama |
| `text.secondary` | `#475569` | Deskripsi dan metadata |
| `border.default` | `#CBD5E1` | Border card dan input |
| `status.success` | `#15803D` | Berhasil |
| `status.error` | `#B91C1C` | Error validasi |

Penggunaan warna teks utama di atas background putih/canvas ditujukan untuk memenuhi kontras WCAG AA. Jangan menggunakan `brand.yellow` sebagai warna teks atau background button dengan teks putih; gunakan sebagai fill aksen dengan teks `brand.ink`.

### Tipografi

- **Display:** `Plus Jakarta Sans`, fallback `ui-sans-serif, system-ui, sans-serif`.
- **Body:** `Inter`, fallback `ui-sans-serif, system-ui, sans-serif`.
- **Code/label teknis:** `JetBrains Mono`, fallback `ui-monospace, monospace`.

| Style | Desktop | Tablet | Mobile | Weight | Penggunaan |
| --- | ---: | ---: | ---: | ---: | --- |
| Display XL | 64/72 | 56/64 | 40/48 | 700 | Hero headline |
| Display L | 48/56 | 40/48 | 32/40 | 700 | Section headline |
| Heading M | 32/40 | 28/36 | 24/32 | 700 | Card group / page title |
| Heading S | 24/32 | 22/30 | 20/28 | 700 | Card title |
| Body L | 20/32 | 18/30 | 18/28 | 400 | Hero description |
| Body M | 16/26 | 16/26 | 16/26 | 400 | Default body |
| Body S | 14/22 | 14/22 | 14/22 | 400 | Metadata |
| Label | 12/16 | 12/16 | 12/16 | 700 | Badge dan eyebrow |

### Layout, spacing, dan shape

- Container maksimum: `1200px`.
- Gutter: `24px` desktop/tablet, `20px` mobile.
- Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px`.
- Section vertical padding: `96px` desktop, `72px` tablet, `56px` mobile.
- Grid: 12 kolom desktop, 8 kolom tablet, 4 kolom mobile.
- Radius: `8px` small, `16px` medium, `24px` large, `999px` pill.
- Shadow card: `0 12px 32px rgba(23, 37, 84, 0.08)`.
- Shadow elevated: `0 20px 48px rgba(23, 37, 84, 0.14)`.

## 3. Komponen Reusable

### Layout

- `SiteHeader` — logo, desktop navigation, primary CTA, mobile menu.
- `SiteFooter` — link group, contact, social, legal.
- `Container` — max width dan responsive gutter.
- `Section` — vertical rhythm dan optional surface variant.

### Content

- `SectionHeading` — eyebrow, heading, description, optional action.
- `ProgramCard` — usia, level, format, outcome, CTA.
- `ProjectCard` — thumbnail, kategori, judul, nama/usia opsional.
- `TestimonialCard` — quote, avatar/inisial, nama, relasi.
- `ArticleCard` — cover, category, title, excerpt, metadata.
- `StatItem` — angka dan label; hanya gunakan jika data sudah tervalidasi.
- `FaqAccordion` — satu pertanyaan terbuka secara default, keyboard accessible.

### Conversion dan feedback

- `Button` — variants `primary`, `secondary`, `ghost`, `whatsapp`; minimum height `48px`.
- `TrialForm` — label selalu terlihat, error inline, loading, success, error.
- `WhatsAppButton` — floating hanya mobile; tidak menutupi form atau cookie notice.
- `Badge` — usia, level, status, kategori.
- `Toast/Alert` — feedback submit dan error global dengan `role="status"` atau `role="alert"`.

### State komponen

Semua komponen interaktif wajib memiliki:

1. Default
2. Hover (desktop pointer)
3. Focus-visible (keyboard)
4. Active/pressed
5. Disabled
6. Loading bila melakukan request
7. Error bila input atau request gagal

## 4. Wireframe dan High-Fidelity Specification

High-fidelity build mengikuti spesifikasi berikut. Setiap blok diberi nama komponen agar dapat langsung dipetakan ke implementasi Next.js.

### Home `/`

```text
AnnouncementBar (opsional)
SiteHeader
Hero: copy + CTA | visual project siswa
TrustStrip: mentor / project / kelas / progress
ProgramSection: 3-4 ProgramCard
BenefitsSection: 4 benefit dengan icon
LearningMethod: Explore -> Learn -> Build -> Present
ProjectShowcase: 3 ProjectCard
TestimonialSection: 2-3 TestimonialCard
FaqPreview: 5 FaqAccordion
FinalCta: trial class + WhatsApp
SiteFooter
```

### Program `/program`

```text
SiteHeader
PageHero: title + filter usia/level
ProgramGrid: ProgramCard
HowToChoose: langkah memilih program
FaqPreview
FinalCta
SiteFooter
```

### Detail program `/program/[slug]`

```text
Breadcrumb
ProgramHero: title + age/level badge + CTA
OutcomeSection: hasil yang akan dibuat/dikuasai
CurriculumTimeline
ClassDetails: durasi, format, jadwal, perangkat
StudentProjectPreview
ProgramFaq
StickyMobileCta
SiteFooter
```

### Tentang, FAQ, dan Kontak

- **Tentang:** page hero, misi, metode, nilai, mentor, bukti proses, CTA.
- **FAQ:** search/filter opsional, accordion dikelompokkan (program, teknis, pembayaran), CTA WhatsApp.
- **Kontak:** kanal WhatsApp sebagai prioritas, email, lokasi/format kelas, jam respons, form pertanyaan singkat.

### Blog `/blog` dan `/blog/[slug]`

- Blog index: featured article, category filter, article grid, pagination/load more.
- Detail: breadcrumb, title, metadata, cover, MDX content, share action, related articles, CTA trial.
- Jangan menaruh CTA agresif di tengah paragraf; gunakan callout setelah bagian yang relevan.

## 5. Responsive Behavior

| Breakpoint | Lebar | Behavior |
| --- | --- | --- |
| Mobile | `< 768px` | 1 kolom, menu drawer, CTA full-width di area form, card stack, sticky bottom CTA hanya pada detail/trial |
| Tablet | `768-1023px` | 2 kolom, nav ringkas, hero copy di atas visual bila ruang terbatas, grid 2 kolom |
| Desktop | `>= 1024px` | 12 kolom, nav penuh, hero 5/7 kolom, grid 3-4 kolom, hover affordance aktif |

### Aturan mobile khusus

- Header tinggi maksimum `72px`; menu drawer memiliki focus trap dan tombol close.
- Body tidak boleh overflow horizontal.
- Tap target minimum `44x44px`.
- Form menggunakan satu kolom dan input tinggi minimum `48px`.
- Tabel atau timeline diubah menjadi card/stack, bukan dipaksa menyusut.
- Floating WhatsApp dan sticky CTA tidak boleh menutup tombol submit atau konten penting.

## 6. Interaksi dan Aksesibilitas

### Navigasi

- Link aktif memiliki indikator bukan hanya perubahan warna.
- Menu mobile menggunakan `aria-expanded`, `aria-controls`, dan dapat ditutup dengan `Escape`.
- Setelah drawer dibuka, fokus dipindahkan ke tombol close dan dikembalikan ke trigger saat ditutup.

### Button, link, dan form

- Semua input memiliki label programatik dan `autocomplete` yang sesuai.
- Error terhubung ke input melalui `aria-describedby`.
- Error tidak hanya dibedakan dengan warna; gunakan teks dan ikon.
- Submit menampilkan state loading dan mencegah double submit.
- Focus-visible menggunakan ring `brand.blue` minimal 2px dengan offset 2px.
- Urutan tab mengikuti urutan visual dan tujuan pengguna.

### Motion

- Transition umum: `150-200ms ease-out`.
- Animasi reveal maksimal satu kali per section dan tidak menggeser layout.
- Hormati `prefers-reduced-motion: reduce` dengan menonaktifkan transform dan autoplay.
- Tidak menggunakan carousel autoplay untuk konten penting.

## 7. Quality Checklist

- [x] Visual direction dan moodboard direction ditetapkan.
- [x] Token warna, tipografi, spacing, radius, dan shadow ditetapkan.
- [x] Komponen reusable serta state interaksinya ditetapkan.
- [x] Wireframe/high-fidelity specification untuk seluruh halaman MVP tersedia.
- [x] Behavior mobile, tablet, dan desktop ditetapkan.
- [x] Focus state, contrast, keyboard, form, dan reduced motion ditetapkan.
- [ ] Validasi visual melalui Figma/prototype atau implementasi frontend dilakukan pada fase berikutnya.

