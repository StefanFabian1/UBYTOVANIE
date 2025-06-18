import type { ReactNode } from "react";

export default function Card({ children, title }: { children: ReactNode; title: ReactNode }) {
  return (
    <div className="bg-white border rounded shadow-sm p-3 h-full flex flex-col">
      <h3 className="font-semibold mb-2 text-primary flex items-center text-base">{title}</h3>
      {children}
    </div>
  );
} 