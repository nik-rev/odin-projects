import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/defaults.css";
import "./styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
