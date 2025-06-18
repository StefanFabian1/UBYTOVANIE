import React from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { ClientStatusContext } from "../context/ClientStatusContext";
import { Link } from "react-router-dom";
import type { ApplicantRole } from "../context/ClientStatusContext";

const icons = {
  ubytovanie: (
    <svg className="inline-block h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
  ),
  platby: (
    <svg className="inline-block h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M2 9h20"/></svg>
  ),
  notifikacie: (
    <svg className="inline-block h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
  ),
};

const cardLinks = [
  { to: "/room", title: <><span>{icons.ubytovanie}</span>Aktuálne ubytovanie</>, content: <div className="text-sm mb-2">Blok A – Izba 203</div> },
  { to: "/payments", title: <><span>{icons.platby}</span>Najbližšie platby</>, content: <div className="text-sm">Žiadne poplatky do 30 dní</div> },
  { to: "/notifications", title: <><span>{icons.notifikacie}</span>Notifikácie</>, content: <ul className="list-disc pl-5 text-xs text-accent space-y-1 text-left mt-2"><li>Úspešne ste uhradili poplatok €120</li><li>Žiadosť #245 bola schválená</li></ul> },
  { to: "/bookings", title: <><span>{icons.ubytovanie}</span>Rezervace zařízení a služeb</>, content: <span className="text-xs text-accent">Možnosť rezervovať miestnosti, práčovňu, športoviská a ďalšie služby online.</span> },
  { to: "/visits", title: <><span>{icons.ubytovanie}</span>Návštěvy</>, content: <span className="text-xs text-accent">Evidencia a správa návštev na internáte jednoducho a prehľadne.</span> },
];

const offers: Record<ApplicantRole, { name: string; desc: string; icon: React.ReactNode; to: string }[]> = {
  student: [
    {
      name: "Študentský domov Alfa",
      desc: "Moderný internát v centre mesta, izby 2+2, wifi, študovňa, fitko.",
      icon: icons.ubytovanie,
      to: "/offer/alfa",
    },
    {
      name: "Študentský domov Beta",
      desc: "Pokojné prostredie, izby 3-lôžkové, spoločná kuchynka, práčovňa.",
      icon: icons.ubytovanie,
      to: "/offer/beta",
    },
  ],
  externy_student: [
    {
      name: "Ubytovňa Externum",
      desc: "Ubytovanie pre externých študentov, samostatné izby, parkovanie.",
      icon: icons.ubytovanie,
      to: "/offer/externum",
    },
    {
      name: "Privátna rezidencia Gamma",
      desc: "Komfortné bývanie, možnosť krátkodobého prenájmu, nonstop recepcia.",
      icon: icons.ubytovanie,
      to: "/offer/gamma",
    },
  ],
  host: [
    {
      name: "Hostel Delta",
      desc: "Cenovo dostupné ubytovanie pre hostí, izby s vlastnou kúpeľňou.",
      icon: icons.ubytovanie,
      to: "/offer/delta",
    },
    {
      name: "Penzión Omega",
      desc: "Rodinný penzión, raňajky v cene, blízko centra.",
      icon: icons.ubytovanie,
      to: "/offer/omega",
    },
  ],
};

export default function HomePage() {
  const { status, role, setRole } = useContext(ClientStatusContext);

  return (
    <>
      {/* Textový banner */}
      <div className="bg-blue-50 border border-blue-200 text-blue-900 p-4 rounded mb-6 text-center">
        {status === "ubytovany" && "Ste aktuálne ubytovaný. Všetky informácie o vašom pobyte nájdete nižšie."}
        {status === "ziadost" && "Vaša žiadosť o ubytovanie bola prijatá. Sledujte stav žiadosti alebo doplňte potrebné údaje."}
        {status === "neubytovany" && "Momentálne nie ste ubytovaný. Podajte si žiadosť o ubytovanie a získajte miesto na internáte."}
      </div>

      {/* Obsah podľa statusu */}
      {status === "ubytovany" && (
        <div className="w-full flex justify-center pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl w-full px-2">
            {cardLinks.map((card, idx) => (
              <Link
                to={card.to}
                key={idx}
                className="w-full max-w-sm mx-auto focus:outline-none"
                tabIndex={0}
              >
                <div className="transition shadow-sm hover:shadow-lg border rounded hover:border-primary cursor-pointer h-full flex flex-col">
                  <Card title={card.title}>
                    <div className="flex flex-col items-start flex-1 h-full">
                      {card.content}
                    </div>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {status === "ziadost" && (
        <div className="flex flex-col items-center gap-6 pb-24">
          <Card title="Stav žiadosti">
            Vaša žiadosť je v stave: <b>Spracováva sa</b>.<br />
            O výsledku vás budeme informovať emailom.
          </Card>
          <Button>Upraviť/doplniť údaje</Button>
        </div>
      )}
      {status === "neubytovany" && (
        <div className="flex flex-col items-center gap-6 pb-24 w-full">
          <div className="mb-4 flex gap-2 items-center">
            <label htmlFor="role" className="text-sm font-medium">Typ žiadateľa:</label>
            <select
              id="role"
              value={role}
              onChange={e => setRole(e.target.value as ApplicantRole)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="student">Študent</option>
              <option value="externy_student">Externý študent</option>
              <option value="host">Hosť</option>
            </select>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl w-full px-2">
              {offers[role].map((offer, idx) => (
                <Link
                  to={offer.to}
                  key={idx}
                  className="w-full max-w-sm mx-auto focus:outline-none"
                  tabIndex={0}
                >
                  <div className="transition shadow-sm hover:shadow-lg border rounded hover:border-primary cursor-pointer h-full flex flex-col">
                    <Card title={<><span>{offer.icon}</span>{offer.name}</>}>
                      <div className="flex flex-col items-start flex-1 h-full justify-between">
                        <span className="text-xs text-accent">{offer.desc}</span>
                        <div className="w-full flex justify-start mt-4">
                          <Link
                            to={role === "host" ? "/rezervacia" : "/ziadost"}
                            className="px-4 py-1 rounded bg-primary text-white text-sm font-medium hover:bg-primary/90 transition"
                            onClick={e => e.stopPropagation()}
                          >
                            Vybrať zariadenie
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}