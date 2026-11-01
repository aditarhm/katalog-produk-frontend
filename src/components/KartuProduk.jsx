export default function KartuProduk({ produk }) {
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="kartu-produk">
      <div className="kartu-badge">{produk.kategori}</div>
      <h4>{produk.nama}</h4>
      <p className="kartu-harga">{formatRupiah(produk.harga)}</p>
      <p className="kartu-stok">
        Sisa Stok: <strong>{produk.stok} unit</strong>
      </p>
    </div>
  );
}