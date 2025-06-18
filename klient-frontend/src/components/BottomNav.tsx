import { NavLink } from "react-router-dom";
import { Home, FileText, CreditCard, User } from "lucide-react";
import clsx from "classnames";

const tabs = [
  { to: "/", icon: Home, label: "Domov" },
  { to: "/requests", icon: FileText, label: "Žiadosti" },
  { to: "/payments", icon: CreditCard, label: "Platby" },
  { to: "/account", icon: User, label: "Konto" },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10 flex h-14 bg-surface border-t">
      {tabs.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            clsx(
              "flex-1 flex flex-col items-center justify-center text-xs",
              isActive ? "text-primary" : "text-accent"
            )
          }
        >
          <Icon className="h-5 w-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
} 