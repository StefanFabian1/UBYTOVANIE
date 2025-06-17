import { useParams } from "react-router-dom";

interface Props {
  title: string;
}

export default function PlaceholderPage({ title }: Props) {
  const { module, section } = useParams();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-accent">
        Modul: {module} / Sekcia: {section ?? "—"}
      </p>
      <p className="text-accent">Táto sekcia ešte nie je implementovaná.</p>
    </div>
  );
} 