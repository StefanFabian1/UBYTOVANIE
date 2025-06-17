import { modules } from "./navigation";

export type Role = "admin" | "referent" | "finance";

export const roleLabels: Record<Role, string> = {
  admin: "Admin",
  referent: "Referent",
  finance: "Finančný",
};

export const permissions: Record<Role, string[]> = {
  admin: modules.map((m) => m.slug),
  referent: ["dashboard", "requests", "housing", "reservations", "services"],
  finance: ["dashboard", "fees", "data", "documents", "dictionaries"],
}; 