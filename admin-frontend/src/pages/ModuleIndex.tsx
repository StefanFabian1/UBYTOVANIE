import { useParams } from "react-router-dom";
import DashboardPage from "./Dashboard";
import PlaceholderPage from "./PlaceholderPage";

export default function ModuleIndex() {
  const { module } = useParams();
  if (module === "dashboard") {
    return <DashboardPage />;
  }
  return <PlaceholderPage title="Sekcia" />;
} 