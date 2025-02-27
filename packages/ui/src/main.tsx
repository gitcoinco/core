import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Preview } from "./Preview.tsx";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Preview />
    </StrictMode>,
  );
}
