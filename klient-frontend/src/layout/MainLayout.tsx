import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      
      <div className="w-full max-w-screen px-40">
        <TopNav />
      </div>

      <div className="flex-1 w-full flex justify-center px-40">
        <div className="w-full max-w-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}