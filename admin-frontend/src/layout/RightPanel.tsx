import { Wifi, RefreshCw, Settings, Printer, FileDown } from "lucide-react";
import { useParams } from "react-router-dom";
import { useRequestColumns, columnLabels } from "../context/RequestColumnsContext";
import type { RequestColumn } from "../context/RequestColumnsContext";
import { useState } from "react";

function Item({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}

export default function RightPanel() {
  const { module } = useParams();
  const columnsCtx = module === "requests" ? useRequestColumns() : null;
  const [showCols, setShowCols] = useState<boolean>(false);

  return (
    <aside className="w-64 border-l bg-surface-1 p-4 text-xs text-accent flex flex-col justify-between gap-4 flex-shrink-0 sticky top-[88px] h-[calc(100vh-88px)]">
      {columnsCtx && (
        <div className="flex flex-col gap-1">
          <button
            className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-surface-1"
            onClick={() => setShowCols((s) => !s)}
          >
            <Settings className="h-3 w-3" />
            <span>{showCols ? "Skryť stĺpce" : "Nastaviť stĺpce"}</span>
          </button>
          {showCols && (
            <div className="mt-1 flex flex-col gap-1">
              {(Object.keys(columnsCtx.visible) as RequestColumn[]).map((c) => (
                <label key={c} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={columnsCtx.visible[c]}
                    onChange={() => columnsCtx.toggle(c)}
                  />
                  {columnLabels[c]}
                </label>
              ))}
            </div>
          )}
          {/* Výstupy */}
          <h4 className="mt-3 text-xs font-semibold">Výstupy</h4>
          <button
            className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-surface-1"
            onClick={() => window.print()}
          >
            <Printer className="h-3 w-3" />
            Tlačiť prehľad
          </button>
          <button
            className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-surface-1"
            onClick={() => alert("Export CSV - TODO")}
          >
            <FileDown className="h-3 w-3" />
            Export CSV
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Item icon={Wifi} label="API: online" />
        <Item icon={RefreshCw} label="Sync: 2 min" />
      </div>
    </aside>
  );
}
