import KartuProduk from './KartuProduk';

export default function DaftarProduk({ daftarProduk, loading, error, onCobaLagi }) {

  if (loading) {
    return (
      <div className="status-box loading-box">
        <div className="spinner"></div>
        <p>Sedang memuat data produk dari API...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-box error-box">
        <p className="error-title">⚠️ Pengambilan Data Gagal</p>
        <p className="error-message">{error}</p>
        <button className="btn-retry" onClick={onCobaLagi}>
          🔄 Coba Lagi
        </button>
      </div>
    );
  }

  if (daftarProduk.length === 0) {
    return (
      <div className="state-kosong">
        <p>Belum ada data Produk. Silakan tambahkan melalui formulir di samping.</p>
      </div>
    );
  }

  return (
    <div className="grid-produk">
      {daftarProduk.map((item) => (
        <KartuProduk key={item.id} produk={item} />
      ))}
    </div>
  );
}