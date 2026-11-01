import { useState } from 'react';
import Header from './components/Header';
import RingkasanProduk from './components/RingkasanProduk';
import FormTambahProduk from './components/FormTambahProduk';
import DaftarProduk from './components/DaftarProduk';
import './App.css';

export default function App() {
  // State daftar produk dengan data awal yang realistis
  const [daftarProduk, setDaftarProduk] = useState([
    {
      id: 1,
      nama: 'Keyboard Mechanical Keychron K2',
      kategori: 'Elektronik',
      harga: 1250000,
      stok: 8,
    },
    {
      id: 2,
      nama: 'Mouse Wireless Logitech MX Master 3S',
      kategori: 'Aksesoris',
      harga: 1450000,
      stok: 12,
    },
    {
      id: 3,
      nama: 'Monitor LG UltraGear 24 Inch 144Hz',
      kategori: 'Elektronik',
      harga: 2100000,
      stok: 5,
    },
    {
      id: 4,
      nama: 'Headset Gaming SteelSeries Arctis Nova',
      kategori: 'Audio',
      harga: 950000,
      stok: 15,
    },
  ]);

  const handleTambahProduk = (produkBaru) => {
    setDaftarProduk([produkBaru, ...daftarProduk]);
  };

  return (
    <div className="app-container">
      <Header
        judul="Katalog Produk Toko Gadget"
        deskripsi="Sistem manajemen inventaris dan katalog barang toko"
      />

      <RingkasanProduk daftarProduk={daftarProduk} />

      <main className="content-layout">
        <section className="form-section">
          <FormTambahProduk onTambahProduk={handleTambahProduk} />
        </section>

        <section className="list-section">
          <h3>Daftar Produk Toko</h3>
          <DaftarProduk daftarProduk={daftarProduk} />
        </section>
      </main>
    </div>
  );
}