import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav";
import TopMenu from "./TopMenu";
import Header from "./Header";
import RightPanel from "./RightPanel";
import { RequestColumnsProvider } from "../context/RequestColumnsContext";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-0 text-surface-900 dark:bg-surface-0-dark dark:text-white">
      <Header />
      <TopMenu />
      <RequestColumnsProvider>
        <div className="flex flex-1 min-h-0">
          <LeftNav />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
          <RightPanel />
        </div>
      </RequestColumnsProvider>
    </div>
  );
} 