// Importa o React para usar JSX
import React from "react";

// Cria a ponte entre React e o DOM do navegador
import ReactDOM from "react-dom/client";

// Importa o componente principal da aplicação
import App from "./App";

// Importa estilos globais (vamos criar depois)
import "./styles/global.css";

// Renderiza o App dentro da div com id "root" lá no index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
