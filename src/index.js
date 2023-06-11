import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// App component
import App from "./App";

// style
import "./styles/tailwind.css";
import "./styles/components.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// عبد العزيز
