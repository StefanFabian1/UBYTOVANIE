import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import RequestsPage from "./pages/RequestsPage";
import PaymentsPage from "./pages/PaymentsPage";
import AccountPage from "./pages/AccountPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}> 
          <Route index element={<HomePage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
