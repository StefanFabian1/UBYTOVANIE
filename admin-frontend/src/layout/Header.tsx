import { LogOut } from "lucide-react";
import { useRole } from "../context/RoleContext";
import { roleLabels } from "../constants/roles";
import type { Role } from "../constants/roles";

export default function Header() {
  const { role, setRole } = useRole();
  return (
    <header className="flex items-center justify-between border-b bg-surface-1 px-4 py-2 gap-4">
      <h1 className="text-lg font-semibold">Ubytovací systém Ahoj Maros</h1>
      <div className="flex items-center gap-4">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="rounded-md border px-2 py-1 text-sm bg-surface-0"
        >
          {(Object.keys(roleLabels) as Role[]).map((r) => (
            <option key={r} value={r}>
              {roleLabels[r]}
            </option>
          ))}
        </select>
        <button className="flex items-center gap-2 text-sm hover:text-primary">
          <span className="hidden sm:inline">Logout</span>
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
} 