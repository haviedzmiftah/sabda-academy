# Sabda Academy: Positioning dan User Flow

## Status

- Dokumen: Research baseline
- Issue: [#1](https://github.com/haviedzmiftah/sabda-academy/issues/1)
- Tanggal: 2026-09-06
- Pemilik: Sabda Academy

Dokumen ini menjadi baseline strategi untuk desain dan implementasi website. Temuan ini perlu divalidasi melalui wawancara orang tua, mentor, dan siswa setelah MVP dirilis.

## 1. Target Audiens

### Audiens utama: orang tua pengambil keputusan

Orang tua berusia sekitar 28-45 tahun yang ingin anaknya memiliki keterampilan digital, tetapi membutuhkan program yang aman, terarah, dan sesuai usia. Mereka tidak selalu memahami teknis pemrograman dan lebih peduli pada perkembangan anak daripada daftar teknologi.

**Kebutuhan utama**

- Memahami manfaat belajar coding untuk perkembangan anak.
- Menemukan program yang sesuai usia dan tingkat kemampuan.
- Mendapat kepastian tentang kualitas mentor, keamanan, jadwal, dan hasil belajar.
- Mengetahui proses pendaftaran serta biaya tanpa harus mencari terlalu lama.
- Melihat bukti nyata berupa karya dan testimoni siswa.

**Hambatan dan kekhawatiran**

- Anak cepat bosan atau merasa coding terlalu sulit.
- Program terlalu berorientasi pada teori atau sekadar bermain.
- Mentor kurang mampu berkomunikasi dengan anak.
- Jadwal, perangkat, dan format kelas tidak cocok.
- Tidak ada laporan perkembangan yang dapat dipahami orang tua.

**Pemicu keputusan**

- Trial class yang mudah dipesan.
- Penjelasan program berdasarkan usia dan level, bukan jargon teknis.
- Portofolio karya siswa.
- Testimoni orang tua yang relevan.
- Respons cepat melalui WhatsApp.

### Audiens pengguna: anak usia 7-17 tahun

Anak adalah pengguna pengalaman belajar, meskipun orang tua biasanya mengambil keputusan dan melakukan pembayaran.

**Kebutuhan utama**

- Aktivitas belajar yang menyenangkan dan menghasilkan karya.
- Tantangan yang sesuai kemampuan.
- Mentor yang suportif dan tidak menghakimi.
- Kesempatan mempresentasikan hasil karya.
- Rasa bangga karena dapat membuat game, animasi, atau website sendiri.

**Prinsip pengalaman anak**

- Gunakan bahasa sederhana dan visual yang ceria.
- Tampilkan hasil karya, bukan hanya daftar materi.
- Hindari klaim bahwa anak harus menjadi programmer sejak dini.
- Pastikan komunikasi dan pendaftaran tetap mengarahkan keputusan kepada orang tua.

### Audiens pendukung: sekolah atau mitra edukasi

Sekolah dan komunitas dapat menjadi kanal akuisisi, tetapi bukan fokus MVP. Kebutuhan mereka adalah program yang terstruktur, jadwal fleksibel, dan materi yang dapat dipertanggungjawabkan.

## 2. Positioning

### Pernyataan positioning

> Sabda Academy adalah bimbel koding anak berbasis project yang membantu anak membangun kreativitas, logika, dan rasa percaya diri melalui karya digital yang menyenangkan, dengan pendampingan mentor dan perkembangan yang dapat dipahami orang tua.

### Value proposition

**Untuk orang tua:** program belajar koding yang terarah, aman, dan terlihat hasilnya.  
**Untuk anak:** tempat untuk membuat karya digital sendiri dengan cara yang menyenangkan.  
**Pembeda utama:** project-based learning yang menggabungkan eksplorasi, pendampingan mentor, dan presentasi karya.

### Pilar pesan

1. **Belajar dengan membuat** — setiap program berujung pada karya yang dapat dilihat.
2. **Sesuai tahap perkembangan** — materi dan tantangan disesuaikan dengan usia serta kemampuan.
3. **Mentor yang mendampingi** — anak memperoleh arahan, umpan balik, dan ruang untuk bertanya.
4. **Perkembangan yang terlihat** — orang tua memahami proses dan hasil belajar anak.

### Tone komunikasi

- Hangat dan meyakinkan untuk orang tua.
- Ceria, positif, dan membangkitkan rasa ingin tahu untuk anak.
- Jelas dan konkret, tanpa jargon teknis berlebihan.
- Tidak menggunakan fear-based marketing atau janji karier yang berlebihan.

## 3. Sitemap MVP

```text
/
├── program/
│   └── [slug]/
├── tentang-kami/
├── blog/
│   └── [slug]/
├── faq/
├── kontak/
└── daftar-trial/
```

### Tujuan setiap halaman

| Halaman | Tujuan bisnis | Informasi minimum | CTA |
| --- | --- | --- | --- |
| `/` | Membangun pemahaman dan kepercayaan | Value proposition, program, bukti karya, testimoni, FAQ | Daftar trial class |
| `/program/` | Membantu memilih program | Kategori usia, level, format, hasil belajar | Lihat detail / Daftar trial |
| `/program/[slug]/` | Menjawab pertanyaan sebelum mendaftar | Kurikulum, durasi, prasyarat, karya akhir, FAQ program | Daftar trial class |
| `/tentang-kami/` | Memperkuat kredibilitas | Misi, metode, mentor, nilai pembelajaran | Konsultasi program |
| `/blog/` | Mendatangkan traffic organik | Daftar artikel, kategori, tanggal | Baca artikel / Daftar trial |
| `/blog/[slug]/` | Memberi edukasi dan membangun kepercayaan | Artikel, author, tanggal, artikel terkait | Coba trial class |
| `/faq/` | Mengurangi keraguan | Usia, jadwal, perangkat, format, biaya, trial | Hubungi via WhatsApp |
| `/kontak/` | Menyediakan kanal komunikasi | WhatsApp, email, lokasi, jam respons | Chat sekarang |
| `/daftar-trial/` | Mengumpulkan lead | Form singkat, ekspektasi trial, consent | Kirim pendaftaran |

## 4. User Flow Utama

### Flow A: pengunjung baru dari landing page

```text
Landing page
  -> Memahami value proposition
  -> Melihat program yang sesuai usia
  -> Membaca bukti karya/testimoni
  -> Membuka FAQ atau detail program bila masih ragu
  -> Klik "Daftar Trial Class"
  -> Mengisi form
  -> Melihat konfirmasi dan kanal tindak lanjut
```

### Flow B: pengunjung yang belum siap mendaftar

```text
Landing page / Blog
  -> Membaca artikel atau FAQ
  -> Menyimpan pemahaman tentang manfaat dan metode belajar
  -> Klik WhatsApp untuk bertanya
  -> Mendapat rekomendasi program
  -> Daftar trial class
```

### Flow C: memilih program

```text
Halaman Program
  -> Memilih rentang usia atau level
  -> Membandingkan detail program
  -> Membuka detail program
  -> Memeriksa jadwal, format, dan perangkat
  -> Daftar trial class
```

### Flow D: pendaftaran trial

```text
Halaman Daftar Trial
  -> Mengisi nama orang tua
  -> Mengisi nama dan usia anak
  -> Memilih program / minat
  -> Mengisi nomor WhatsApp
  -> Menyetujui penggunaan data untuk tindak lanjut
  -> Submit
  -> Melihat status berhasil atau instruksi menghubungi WhatsApp
```

**Catatan UX:** form MVP harus singkat. Detail seperti jadwal pilihan dapat ditanyakan pada tahap tindak lanjut agar conversion rate tidak turun.

## 5. Arah Copy

### Hero yang direkomendasikan

**Eyebrow:** Belajar coding dengan cara yang menyenangkan  
**Headline:** Bantu anak menciptakan karya digitalnya sendiri  
**Deskripsi:** Di Sabda Academy, anak belajar logika, kreativitas, dan problem solving melalui project coding yang sesuai usia, didampingi mentor yang suportif.  
**CTA utama:** Daftar Trial Class  
**CTA sekunder:** Lihat Program

### Alternatif headline untuk A/B test

1. Dari rasa ingin tahu menjadi karya digital.
2. Coding bukan hanya mengetik kode. Anak belajar berpikir, berkarya, dan percaya diri.
3. Tempat anak belajar coding sambil membuat sesuatu yang mereka banggakan.

### CTA dan microcopy

| Konteks | CTA | Microcopy pendukung |
| --- | --- | --- |
| Hero | Daftar Trial Class | Kenali minat anak sebelum memilih program |
| Program | Lihat Program | Temukan level yang sesuai usia dan pengalaman |
| Detail program | Coba Program Ini | Konsultasikan kesiapan anak dengan tim kami |
| FAQ | Tanya via WhatsApp | Kami bantu memilih program yang tepat |
| Footer | Mulai dari Trial Class | Langkah pertama untuk mengenal pengalaman belajar Sabda Academy |

### Copy yang perlu dihindari

- “Jaminan anak menjadi programmer profesional.”
- “Anak pasti unggul dari teman-temannya.”
- Klaim jumlah siswa, rating, atau hasil belajar sebelum datanya tersedia.
- Jargon seperti framework atau bahasa pemrograman di headline utama tanpa konteks manfaat.

## 6. Prioritas Validasi

Sebelum atau sesudah MVP, validasi pertanyaan berikut:

1. Rentang usia dan format kelas mana yang paling banyak dicari?
2. Apakah orang tua lebih tertarik pada hasil karya, perkembangan soft skill, atau kurikulum teknis?
3. Informasi apa yang paling sering ditanyakan sebelum trial?
4. Apakah istilah “trial class” dipahami dan dianggap menarik?
5. Kanal kontak mana yang paling nyaman untuk tindak lanjut?

**Metode minimum:** wawancara 5 orang tua, uji copy kepada 5-10 responden, dan review data klik CTA setelah landing page aktif.

## 7. Definition of Done untuk Issue #1

- [x] Persona orang tua, anak, dan audiens pendukung terdokumentasi.
- [x] Positioning, value proposition, diferensiasi, dan tone komunikasi terdokumentasi.
- [x] Sitemap MVP dan tujuan tiap halaman ditetapkan.
- [x] User flow landing page, blog, pemilihan program, dan trial class ditetapkan.
- [x] Copy direction hero, CTA, dan microcopy tersedia.
- [ ] Validasi dengan pengguna nyata dilakukan pada fase discovery lanjutan.
