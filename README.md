# Asisten Chat Pro

Website promosi jasa pembuatan asisten chat online untuk bisnis. Dibuat dengan **React JS**, **Vite**, dan **Tailwind CSS** dengan gaya neo-brutalism.

## Fitur

- Landing page responsive
- Desain neo-brutalism profesional
- Section promosi lengkap: hero, masalah, fitur, proses, paket, FAQ, dan CTA
- Tombol konsultasi WhatsApp
- Build production siap deploy

## Kebutuhan

Pastikan sudah terinstall:

- Node.js versi 20+ direkomendasikan
- npm

Cek versi:

```bash
node -v
npm -v
```

## Cara Install

Clone repository:

```bash
git clone git@github.com:rhmnsae/muy.git
cd muy
```

Install dependency:

```bash
npm install
```

Jalankan mode development:

```bash
npm run dev
```

Lalu buka URL yang muncul di terminal, biasanya:

```text
http://localhost:5173
```

## Build Production

Untuk membuat versi production:

```bash
npm run build
```

Hasil build akan masuk ke folder:

```text
dist/
```

Untuk preview hasil build:

```bash
npm run preview
```

## Struktur Project

```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src
    ├── main.jsx
    └── styles.css
```

## Deploy

Project ini bisa dideploy ke layanan static hosting seperti:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Hosting biasa yang mendukung file static dari folder `dist/`

Perintah build untuk deploy:

```bash
npm run build
```

Output directory:

```text
dist
```

## Catatan

Nomor WhatsApp CTA saat ini diset di file:

```text
src/main.jsx
```

Cari bagian:

```js
const waNumber = '628977279290'
```

Ganti nomor tersebut jika ingin memakai nomor WhatsApp lain.
