import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/defaults.css";
import "./styles/fonts.css";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
