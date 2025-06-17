import { createContext, useContext, useState } from "react";

export type RequestColumn = "id" | "applicant" | "date" | "block" | "facility" | "status" | "urgent";

export const columnLabels: Record<RequestColumn, string> = {
  id: "#",
  applicant: "Žiadateľ",
  date: "Dátum",
  block: "Blok",
  facility: "Zariadenie",
  status: "Stav",
  urgent: "Urgentné",
};

interface Ctx {
  visible: Record<RequestColumn, boolean>;
  toggle: (c: RequestColumn) => void;
}

const defaultState: Record<RequestColumn, boolean> = {
  id: true,
  applicant: true,
  date: true,
  block: true,
  facility: true,
  status: true,
  urgent: false,
};

const RequestColumnsContext = createContext<Ctx | undefined>(undefined);

export function RequestColumnsProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState<Record<RequestColumn, boolean>>(defaultState);
  const toggle = (c: RequestColumn) => setVisible((v) => ({ ...v, [c]: !v[c] }));
  return (
    <RequestColumnsContext.Provider value={{ visible, toggle }}>
      {children}
    </RequestColumnsContext.Provider>
  );
}

export function useRequestColumns() {
  const ctx = useContext(RequestColumnsContext);
  if (!ctx) throw new Error("useRequestColumns must be within provider");
  return ctx;
} 