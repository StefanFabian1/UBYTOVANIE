export interface SubItem {
  slug: string;
  label: string;
}

export interface ModuleNav {
  slug: string;
  label: string;
  subItems: SubItem[];
}

export const modules: ModuleNav[] = [
  {
    slug: "dashboard",
    label: "Dashboard",
    subItems: [],
  },
  {
    slug: "requests",
    label: "Žiadosti",
    subItems: [
      { slug: "new", label: "Vytvoriť žiadosť" },
      { slug: "list", label: "Zoznam žiadostí" },
      { slug: "types", label: "Správa typov žiadostí" },
    ],
  },
  {
    slug: "housing",
    label: "Ubytovanie",
    subItems: [
      { slug: "list", label: "Zoznam ubytovaných" },
      { slug: "assign", label: "Prideliť izbu" },
      { slug: "changes", label: "Evidencia zmien" },
      { slug: "checkout", label: "Odubytovanie" },
    ],
  },
  {
    slug: "reservations",
    label: "Rezervácie",
    subItems: [
      { slug: "new", label: "Nová rezervácia" },
      { slug: "calendar", label: "Kalendár rezervácií" },
      { slug: "history", label: "História rezervácií" },
    ],
  },
  {
    slug: "services",
    label: "Služby",
    subItems: [
      { slug: "overview", label: "Prehľad služieb" },
      { slug: "issue", label: "Nahlásenie poruchy" },
      { slug: "repairs", label: "Opravy a údržba" },
      { slug: "checks", label: "Revízie" },
      { slug: "inventory", label: "Inventár" },
    ],
  },
  {
    slug: "fees",
    label: "Poplatky",
    subItems: [
      { slug: "add", label: "Pridať poplatok" },
      { slug: "payments", label: "Úhrady a pohyby" },
      { slug: "invoices", label: "Generovanie faktúr" },
    ],
  },
  {
    slug: "data",
    label: "Importy/Exporty",
    subItems: [
      { slug: "import", label: "Import údajov" },
      { slug: "export", label: "Export údajov" },
      { slug: "templates", label: "Šablóny importu" },
    ],
  },
  {
    slug: "documents",
    label: "Dokumenty",
    subItems: [
      { slug: "create", label: "Vytvoriť dokument" },
      { slug: "attach", label: "Pripojiť súbor" },
      { slug: "templates", label: "Šablóny a typy" },
    ],
  },
  {
    slug: "dictionaries",
    label: "Číselníky",
    subItems: [
      { slug: "buildings", label: "Správa budov" },
      { slug: "room-types", label: "Typy izieb" },
      { slug: "fee-types", label: "Typy poplatkov" },
    ],
  },
]; 