import { useParams } from "react-router-dom";
import RequestsListPage from "./RequestsList";
import PlaceholderPage from "./PlaceholderPage";

export default function SectionPage() {
  const { module, section } = useParams();

  if (module === "requests" && section === "list") {
    return <RequestsListPage />;
  }

  return <PlaceholderPage title={section ?? "Sekcia"} />;
} 