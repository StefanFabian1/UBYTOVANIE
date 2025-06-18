import { useContext } from "react";
import { ClientStatusContext } from "../context/ClientStatusContext";
import type { ClientStatus } from "../context/ClientStatusContext";
import { NavLink } from "react-router-dom";
import clsx from "classnames";

const tabs = [
  { to: "/", label: "Domov" },
  { to: "/requests", label: "Žiadosti" },
  { to: "/payments", label: "Platby" },
  { to: "/account", label: "Konto" },
];

export default function TopNav() {
  const { status, setStatus } = useContext(ClientStatusContext);
  return (
    <header className="hidden md:flex items-center justify-between h-14 px-8 backdrop-blur bg-white/70 sticky top-0 z-20">
      <span className="font-bold text-primary">MyDorm</span>
      <nav className="flex gap-6 text-sm">
        {tabs.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              clsx(isActive ? "text-primary font-medium" : "text-accent hover:text-primary")
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <select
        className="ml-8 border rounded px-2 py-1 text-sm"
        value={status}
        onChange={e => setStatus(e.target.value as ClientStatus)}
      >
        <option value="ubytovany">Ubytovaný</option>
        <option value="ziadost">Neubytovaný so žiadosťou</option>
        <option value="neubytovany">Neubytovaný bez žiadosti</option>
      </select>
    </header>
  );
} 