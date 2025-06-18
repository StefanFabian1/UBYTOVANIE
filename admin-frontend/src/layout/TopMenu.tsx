import { NavLink } from "react-router-dom";
import { modules } from "../constants/navigation";
import { permissions } from "../constants/roles";
import { useRole } from "../context/RoleContext";
import clsx from "classnames";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

function Item({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}

export default function TopMenu() {
  const { role } = useRole();
  const allowed = permissions[role] || [];
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="flex items-center border-b bg-surface-1 py-2 overflow-x-auto my-1">
      <div className="hidden md:block w-64 text-xs text-accent border-r border-accent/20 pr-4 pl-4">Verzia 1.0 • {role}</div>
      <div className="flex gap-4 flex-1 px-4">
        {modules
          .filter((m) => allowed.includes(m.slug))
          .map((m) => (
            <NavLink
              key={m.slug}
              to={`/${m.slug}`}
              className={({ isActive }) =>
                clsx("text-sm font-medium", {
                  "text-primary underline": isActive,
                  "text-accent hover:text-primary": !isActive,
                })
              }
            >
              {m.label}
            </NavLink>
          ))}
      </div>
      
      <div className="hidden md:flex w-64 items-center justify-end gap-2 text-xs text-accent border-l border-accent/20 pl-1 pr-4 flex-shrink-0">
        <Item icon={Bell} label="Notifikácie: 3" />
        <span className="border-l border-accent/20 h-4"></span>
        <span>{now.toLocaleString()}</span>
      </div>
    </nav>
  );
} 