import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
