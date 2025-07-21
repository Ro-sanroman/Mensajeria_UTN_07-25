import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // ---> Nos habilita a usar las herramientas del react-router
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
