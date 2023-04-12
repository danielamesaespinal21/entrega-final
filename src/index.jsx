import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextTemaProvider from "./context/ContextTema";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextTemaProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextTemaProvider>
);
