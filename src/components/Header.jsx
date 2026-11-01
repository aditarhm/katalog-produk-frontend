export default function Header({ judul, deskripsi }) {
  return (
    <header className="app-header">
      <h1>{judul}</h1>
      <p>{deskripsi}</p>
    </header>
  );
}