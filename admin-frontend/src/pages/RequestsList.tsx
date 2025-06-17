import { useState, useMemo } from "react";
import { useRequestColumns } from "../context/RequestColumnsContext";

interface Request {
  id: number;
  applicant: string;
  date: string; // ISO
  block: string;
  facility: string;
  status: "Nová" | "Schválená" | "Zamietnutá";
  urgent?: boolean;
}

const data: Request[] = [
  { id: 245, applicant: "J. Novák", date: "2025-06-15", block: "A", facility: "Dorm Alfa", status: "Schválená" },
  { id: 246, applicant: "K. Miháliková", date: "2025-06-16", block: "B", facility: "Dorm Beta", status: "Nová", urgent: true },
  { id: 247, applicant: "R. Kováč", date: "2025-06-16", block: "C", facility: "Dorm Gamma", status: "Nová" },
  { id: 240, applicant: "L. Szabo", date: "2025-06-14", block: "A", facility: "Dorm Alfa", status: "Zamietnutá" },
];

export default function RequestsListPage() {
  const [statusFilter, setStatusFilter] = useState<string>("Všetky");
  const [search, setSearch] = useState<string>("");
  const [blockFilter, setBlockFilter] = useState<string>("Všetky");
  const [facilityFilter, setFacilityFilter] = useState<string>("Všetky");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [onlyUrgent, setOnlyUrgent] = useState<boolean>(false);

  const { visible } = useRequestColumns();

  const filtered = useMemo(() => {
    return data.filter((r) => {
      const statusOk = statusFilter === "Všetky" || r.status === statusFilter;
      const searchOk = r.applicant.toLowerCase().includes(search.toLowerCase());
      const blockOk = blockFilter === "Všetky" || r.block === blockFilter;
      const facilityOk = facilityFilter === "Všetky" || r.facility === facilityFilter;
      const dateOk =
        (!dateFrom || r.date >= dateFrom) && (!dateTo || r.date <= dateTo);
      const urgentOk = !onlyUrgent || r.urgent;
      return statusOk && searchOk && blockOk && facilityOk && dateOk && urgentOk;
    });
  }, [statusFilter, search, blockFilter, facilityFilter, dateFrom, dateTo, onlyUrgent]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Zoznam žiadostí</h2>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border px-2 py-1 text-sm bg-surface-0"
          >
            <option>Všetky</option>
            <option>Nová</option>
            <option>Schválená</option>
            <option>Zamietnutá</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Blok:</label>
          <select
            value={blockFilter}
            onChange={(e) => setBlockFilter(e.target.value)}
            className="rounded-md border px-2 py-1 text-sm bg-surface-0"
          >
            <option>Všetky</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Zariadenie:</label>
          <select
            value={facilityFilter}
            onChange={(e) => setFacilityFilter(e.target.value)}
            className="rounded-md border px-2 py-1 text-sm bg-surface-0"
          >
            <option>Všetky</option>
            <option>Dorm Alfa</option>
            <option>Dorm Beta</option>
            <option>Dorm Gamma</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Od:</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="rounded-md border px-2 py-1 text-sm bg-surface-0"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Do:</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="rounded-md border px-2 py-1 text-sm bg-surface-0"
          />
        </div>
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={onlyUrgent}
            onChange={(e) => setOnlyUrgent(e.target.checked)}
          />
          Urgentné
        </label>
        <input
          type="text"
          placeholder="Hľadať žiadateľa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md border px-2 py-1 text-sm bg-surface-0"
        />
      </div>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-surface-1">
            {visible.id && <th className="border px-2 py-1 text-left">#</th>}
            {visible.applicant && <th className="border px-2 py-1 text-left">Žiadateľ</th>}
            {visible.date && <th className="border px-2 py-1 text-left">Dátum</th>}
            {visible.block && <th className="border px-2 py-1 text-left">Blok</th>}
            {visible.facility && <th className="border px-2 py-1 text-left">Zariadenie</th>}
            {visible.status && <th className="border px-2 py-1 text-left">Stav</th>}
            {visible.urgent && <th className="border px-2 py-1 text-left">Urgent</th>}
          </tr>
        </thead>
        <tbody>
          {filtered.map((r) => (
            <tr key={r.id} className="even:bg-surface-1/50">
              {visible.id && <td className="border px-2 py-1">{r.id}</td>}
              {visible.applicant && <td className="border px-2 py-1">{r.applicant}</td>}
              {visible.date && <td className="border px-2 py-1">{r.date}</td>}
              {visible.block && <td className="border px-2 py-1">{r.block}</td>}
              {visible.facility && <td className="border px-2 py-1">{r.facility}</td>}
              {visible.status && (
                <td className="border px-2 py-1">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      r.status === "Nová"
                        ? "bg-blue-100 text-blue-700"
                        : r.status === "Schválená"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              )}
              {visible.urgent && <td className="border px-2 py-1 text-center">{r.urgent ? "⚠️" : ""}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 