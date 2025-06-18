import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      
      <div className="w-full max-w-screen px-60">
        <TopNav />
      </div>

      <div className="flex-1 w-full flex justify-center px-60">
        <div className="w-full max-w-screen px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}