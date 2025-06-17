import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import SectionPage from "./pages/SectionPage";
import { RoleProvider } from "./context/RoleContext";
import ModuleIndex from "./pages/ModuleIndex";

export default function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path=":module" element={<RootLayout />}> 
            <Route index element={<ModuleIndex />} />
            <Route path=":section" element={<SectionPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}
