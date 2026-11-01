import KartuProduk from './KartuProduk';

export default function DaftarProduk({ daftarProduk }) {
  // Syarat Instruksi 5c: Conditional Rendering jika kosong
  if (daftarProduk.length === 0) {
    return (
      <div className="state-kosong">
        <p>Belum ada data Produk. Silakan tambahkan melalui formulir di atas.</p>
      </div>
    );
  }

  // Syarat Instruksi 5a: Render list dengan .map() dan key unik
  return (
    <div className="grid-produk">
      {daftarProduk.map((item) => (
        <KartuProduk key={item.id} produk={item} />
      ))}
    </div>
  );
}