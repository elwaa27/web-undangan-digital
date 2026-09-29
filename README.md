# Undangan Pernikahan Digital — "Botanical Ink"

Undangan pernikahan satu-halaman, dibangun dengan **Next.js 14 (App Router)**,
**Tailwind CSS**, dan **Framer Motion**, lengkap dengan fitur **AI Wish Formatter**
bertenaga **Gemini API**.

## Konsep desain

Tema visual dibangun di sekitar motif **surat & amplop** — bukan template
"cream + serif + terracotta" yang umum dipakai situs undangan AI-generated.
Elemen signature-nya adalah **amplop bersegel di awal halaman**: tamu benar-benar
"membuka" undangan seperti membuka surat cinta fisik, sebelum konten utama terungkap.

- **Palet warna** — hijau emerald tua (`#1F3A2E`), kertas ivory (`#F7F3EA`), emas
  pudar (`#B8935A`), dan blush lembut (`#E8C4B8`) sebagai aksen sesekali.
- **Tipografi** — `Fraunces` (display, sedikit eksentrik) untuk judul, `Cormorant
  Garamond italic` untuk kutipan bernuansa tulisan tangan, dan `Plus Jakarta Sans`
  untuk teks isi yang tetap terbaca jernih di layar kecil.
- **Motion** — reveal bertahap (staggered) di Hero, animasi flap amplop terbuka,
  dan scroll-reveal halus di tiap seksi. Tidak ada animasi berlebihan yang mengganggu.

## Struktur proyek

```
wedding-invitation/
├── app/
│   ├── api/wish-formatter/route.ts   # Endpoint server yang memanggil Gemini API
│   ├── globals.css                   # Token desain, tekstur kertas, focus states
│   ├── layout.tsx                    # Font loader (Fraunces, Cormorant, Jakarta)
│   └── page.tsx                      # Merangkai seluruh seksi halaman
├── components/
│   ├── Envelope.tsx     # Signature element: gerbang amplop
│   ├── Hero.tsx         # Nama mempelai + kutipan, staggered animation
│   ├── Countdown.tsx    # Penghitung mundur real-time
│   ├── EventDetails.tsx # Akad & resepsi + tautan Google Maps
│   ├── RSVPForm.tsx     # Formulir konfirmasi kehadiran
│   ├── WishList.tsx     # Form ucapan + AI Wish Formatter + daftar ucapan
│   └── Footer.tsx
├── lib/config.ts        # SEMUA data undangan (nama, tanggal, lokasi, dsb.)
└── .env.local.example
```

## Menjalankan proyek

```bash
npm install
cp .env.local.example .env.local
# isi GEMINI_API_KEY di .env.local, dapatkan di https://aistudio.google.com/app/apikey
npm run dev
```

Buka `http://localhost:3000`.

## Kustomisasi cepat

Hampir semua konten (nama mempelai, tanggal, lokasi, rekening) diatur dari satu
tempat: **`lib/config.ts`**. Tidak perlu menyentuh komponen untuk mengganti data.

## Tentang AI Wish Formatter

Saat tamu mengirim ucapan di seksi **Ucapan & Doa**, teks dikirim ke
`/api/wish-formatter` (berjalan di server, API key tidak pernah terekspos ke
browser). Endpoint ini memanggil **Gemini 1.5 Flash** dengan prompt yang meminta
model merapikan diksi dan membuatnya lebih hangat/puitis **tanpa mengubah makna**
ucapan asli. Jika `GEMINI_API_KEY` belum diisi atau terjadi error, sistem otomatis
*fallback* menampilkan ucapan asli tamu apa adanya — fitur RSVP & wishlist tidak
akan pernah rusak hanya karena AI sedang bermasalah.

Tamu juga bisa mematikan opsi "Perindah ucapan otomatis dengan AI" bila ingin
ucapannya ditampilkan persis seperti yang mereka tulis.

## Menyambungkan RSVP & Wishlist ke penyimpanan sungguhan

Saat ini `RSVPForm.tsx` dan `WishList.tsx` menyimpan data hanya di state React
(sementara, hilang saat refresh) agar proyek bisa langsung dijalankan tanpa
database. Untuk produksi, sambungkan ke layanan seperti Supabase, Firebase, atau
Google Sheets API di titik yang sudah ditandai `// TODO` pada kedua komponen.

## Deploy

Proyek ini siap di-deploy ke **Vercel**:

```bash
vercel deploy
```

Jangan lupa tambahkan `GEMINI_API_KEY` di Environment Variables pada dashboard
Vercel, bukan hanya di `.env.local` lokal.
