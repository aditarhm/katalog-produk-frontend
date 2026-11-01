export default function RingkasanProduk({ daftarProduk }) {
  const totalJenis = daftarProduk.length;
  const totalStok = daftarProduk.reduce((acc, curr) => acc + Number(curr.stok || 0), 0);

  return (
    <section className="ringkasan-container">
      <div className="card-stat">
        <span className="stat-label">Total Jenis Produk</span>
        <strong className="stat-value">{totalJenis}</strong>
      </div>
      <div className="card-stat">
        <span className="stat-label">Total Unit Tersedia</span>
        <strong className="stat-value">{totalStok} Pcs</strong>
      </div>
    </section>
  );
}