# SEOUL BITE — Website HTML, CSS, JavaScript Murni

Website promosi UMKM makanan Korea (Kimbab dan Korean Spicy Chicken) yang dikonversi menjadi **HTML, CSS, dan JavaScript vanilla**. Tidak menggunakan React, TypeScript, framework, atau website builder.

## Isi folder
- `index.html` — struktur dan konten halaman (Home, Menu/Product, About, Gallery, Contact)
- `style.css` — desain, warna, layout, dan responsive design
- `script.js` — interaksi JavaScript

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` langsung di browser; atau gunakan ekstensi Live Server di VS Code.
3. Koneksi internet diperlukan untuk font Google dan foto dari URL sumber gambar.

## Interaksi JavaScript yang digunakan
- Navigasi hamburger pada tampilan mobile.
- Tombol mode gelap/terang.
- Filter menu berdasarkan kategori.
- Pencarian produk.
- Tombol tambah pesanan dengan notifikasi toast.
- Validasi nama, email, dan pesan pada formulir kontak.
- Tahun footer otomatis.

## Catatan
Formulir kontak saat ini melakukan validasi di browser dan belum mengirim data ke email/server. Agar pesan benar-benar diterima, perlu dihubungkan ke backend atau layanan formulir. Link sosial, nomor kontak, alamat, harga, dan konten produk dapat disesuaikan dengan data bisnis yang sebenarnya.

## Deployment singkat
**GitHub:** buat repository baru, upload semua file/folder project, lalu commit.

**Vercel:** import repository GitHub di Vercel. Karena website ini statis, tidak memerlukan build command; pilih folder root (`./`) sebagai output. Setelah deploy, Vercel memberikan URL website.
