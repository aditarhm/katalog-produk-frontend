import { useState } from 'react';

export default function FormTambahProduk({ onTambahProduk }) {
  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('Elektronik');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama.trim() || !harga || !stok) {
      alert('Mohon isi semua field!');
      return;
    }

    const produkBaru = {
      id: Date.now(),
      nama,
      kategori,
      harga: Number(harga),
      stok: Number(stok),
    };

    onTambahProduk(produkBaru);

    // Reset form
    setNama('');
    setKategori('Elektronik');
    setHarga('');
    setStok('');
  };

  return (
    <form className="form-tambah" onSubmit={handleSubmit}>
      <h3>Tambah Produk Baru</h3>
      <div className="form-group">
        <label>Nama Produk:</label>
        <input
          type="text"
          placeholder="Contoh: Mouse Wireless Logitech"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Kategori:</label>
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="Elektronik">Elektronik</option>
          <option value="Aksesoris">Aksesoris</option>
          <option value="Perlengkapan Kerja">Perlengkapan Kerja</option>
          <option value="Audio">Audio</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Harga (Rp):</label>
          <input
            type="number"
            placeholder="Contoh: 150000"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Jumlah Stok:</label>
          <input
            type="number"
            placeholder="Contoh: 10"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn-submit">+ Tambah Produk</button>
    </form>
  );
}