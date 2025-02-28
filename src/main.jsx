import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./Style/index.css";
import "./Style/components/navBar.css";
import "./Style/components/table.css";
import "./Style/variables.css";
import "./Style/components/home.css";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar className="navBar-Component" />
      <App />
    </BrowserRouter>
  </StrictMode>
);
