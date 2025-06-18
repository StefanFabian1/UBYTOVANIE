import { createContext, useState } from "react";
import type { ReactNode } from "react";

export type ClientStatus = "ubytovany" | "ziadost" | "neubytovany";
export type ApplicantRole = "student" | "externy_student" | "host";

export const ClientStatusContext = createContext<{
  status: ClientStatus;
  setStatus: (s: ClientStatus) => void;
  role: ApplicantRole;
  setRole: (r: ApplicantRole) => void;
}>({ status: "ubytovany", setStatus: () => {}, role: "student", setRole: () => {} });

export function ClientStatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ClientStatus>("ubytovany");
  const [role, setRole] = useState<ApplicantRole>("student");
  return (
    <ClientStatusContext.Provider value={{ status, setStatus, role, setRole }}>
      {children}
    </ClientStatusContext.Provider>
  );
} 