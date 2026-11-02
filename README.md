# Abdullah Abdul Ghani — Portfolio

Portofolio personal berbasis React + Vite dengan desain light, clean, responsif, dan siap deploy ke Vercel.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite.

## Build untuk produksi

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

1. Ekstrak folder proyek ini.
2. Buat repository baru di GitHub, misalnya `portfolio`.
3. Upload seluruh isi folder proyek ke repository tersebut.
4. Login ke https://vercel.com menggunakan GitHub.
5. Pilih **Add New → Project**, lalu import repository `portfolio`.
6. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
7. Klik **Deploy**.

Setiap push ke branch produksi yang terhubung akan memicu deployment baru.

## Sebelum dipublikasikan, personalisasi bagian ini

Buka `src/main.jsx`, lalu:
- Ganti `emailkamu@example.com` dengan email aktif pada bagian kontak (ada dua kemunculan).
- Periksa kembali deskripsi dan teknologi pada setiap proyek.
- Tambahkan tautan demo IBTI Semanda Residence jika tersedia.
- Tambahkan tautan LinkedIn jika ingin ditampilkan.
- Pastikan kamu memiliki izin untuk menampilkan nama, screenshot, dan informasi proyek SATU TVRI.

## Struktur

- `src/main.jsx` — konten, komponen, dan data proyek.
- `src/style.css` — seluruh styling responsif.
- `index.html` — metadata dan judul halaman.
