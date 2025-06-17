import { Gauge, Users, DollarSign } from "lucide-react";

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-md border bg-surface-1 p-4 shadow-sm">
      <Icon className="h-8 w-8 text-primary" />
      <div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-sm text-accent">{label}</div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={Gauge} label="Nové žiadosti" value="12" />
        <StatCard icon={Users} label="Aktuálne ubytovaní" value="280" />
        <StatCard icon={DollarSign} label="Nezaplatené poplatky" value="€ 1 450" />
      </div>

      <div className="rounded-md border bg-surface-1 p-4 shadow-sm">
        <h3 className="mb-2 text-lg font-semibold">Nedávne aktivity</h3>
        <ul className="list-disc pl-5 text-sm text-accent space-y-1">
          <li>Žiadosť #245 schválená</li>
          <li>Študent J. Novák uhradil poplatok €120</li>
          <li>Izba B-203 bola pridelená študentke K. Mihálikovej</li>
          <li>Vytvorená faktúra F/2025/001</li>
        </ul>
      </div>
    </div>
  );
} 