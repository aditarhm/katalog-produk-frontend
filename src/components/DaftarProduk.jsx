import KartuProduk from './KartuProduk';

export default function DaftarProduk({ daftarProduk }) {
  if (daftarProduk.length === 0) {
    return (
      <div className="state-kosong">
        <p>Belum ada data Produk. Silakan tambahkan melalui formulir di atas.</p>
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