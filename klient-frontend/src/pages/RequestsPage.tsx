import { Link } from "react-router-dom";

export default function RequestsPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Moje žiadosti</h2>
      <p className="text-accent text-sm">Zatiaľ nemáte žiadne podané žiadosti.</p>
      <Link to="/requests/new" className="self-start rounded-md bg-primary text-white px-3 py-1 text-sm">Nová žiadosť</Link>
    </div>
  );
} 