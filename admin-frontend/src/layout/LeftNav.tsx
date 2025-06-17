import { NavLink, useParams } from "react-router-dom";
import { modules } from "../constants/navigation";
import type { ModuleNav } from "../constants/navigation";
import clsx from "classnames";
import { useRole } from "../context/RoleContext";
import { permissions } from "../constants/roles";

export default function LeftNav() {
  const { module } = useParams();
  const { role } = useRole();
  const allowed = permissions[role] || [];
  const current: ModuleNav | undefined = modules.find((m) => m.slug === module);

  return (
    <aside className="w-64 border-r bg-surface-1">
      <h2 className="p-4 text-base font-semibold">
        {current ? current.label : "Neznámy modul"}
      </h2>
      {current && allowed.includes(current.slug) ? (
        <nav className="flex flex-col gap-1 p-2">
          {current.subItems.length ? (
            current.subItems.map((s) => (
              <NavLink
                key={s.slug}
                to={`/${current.slug}/${s.slug}`}
                className={({ isActive }) =>
                  clsx("rounded-md px-3 py-2 text-sm", {
                    "bg-primary/20 text-primary font-medium": isActive,
                    "hover:bg-primary/10 text-accent": !isActive,
                  })
                }
              >
                {s.label}
              </NavLink>
            ))
          ) : (
            <p className="px-3 py-2 text-xs text-accent">Žiadne položky</p>
          )}
        </nav>
      ) : (
        <p className="px-3 py-2 text-xs text-accent">Nemáte oprávnenie</p>
      )}
    </aside>
  );
} 