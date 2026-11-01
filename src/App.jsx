import { useState, useEffect } from 'react';
import Header from './components/Header';
import RingkasanProduk from './components/RingkasanProduk';
import FormTambahProduk from './components/FormTambahProduk';
import DaftarProduk from './components/DaftarProduk';
import './App.css';

export default function App() {
  const [daftarProduk, setDaftarProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://dummyjson.com/products/category/laptops';

  const fetchProduk = async () => {
    setLoading(true);
    setError(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Gagal mengambil data (Status: ${response.status})`);
      }

      const data = await response.json();

      const formatData = data.products.map((item) => ({
        id: item.id,
        nama: item.title,
        kategori: 'Laptop & Gadget',
        harga: item.price * 16000, // Konversi USD ke Rupiah agar serasi
        stok: item.stock,
      }));

      setDaftarProduk(formatData);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat memuat data dari server.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProduk();
  }, []);

  const handleTambahProduk = (produkBaru) => {
    setDaftarProduk([produkBaru, ...daftarProduk]);
  };

  return (
    <div className="app-container">
      <Header
        judul="Katalog Produk Toko Gadget"
        deskripsi="Sistem manajemen inventaris terintegrasi dengan DummyJSON API"
      />

      <RingkasanProduk daftarProduk={daftarProduk} />

      <main className="content-layout">
        <section className="form-section">
          <FormTambahProduk onTambahProduk={handleTambahProduk} />
        </section>

        <section className="list-section">
          <h3>Daftar Produk Toko</h3>

          <DaftarProduk
            daftarProduk={daftarProduk}
            loading={loading}
            error={error}
            onCobaLagi={fetchProduk}
          />
        </section>
      </main>
    </div>
  );
}