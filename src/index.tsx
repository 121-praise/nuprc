import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AllCompanies } from "./screens/AllCompanies/AllCompanies";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AllCompanies />
  </StrictMode>,
);
