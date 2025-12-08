// src/components/Projects/ProjectsData.js

// Importando os ícones de tecnologias
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiVite } from "react-icons/si";

// Lista de projetos renderizados automaticamente no Projects.jsx
// Cada objeto é um card do projeto
export const projectsData = [
  {
    id: 1,
    title: "Restaurant Online",
    description:
      "Aplicação simulando um restaurante online, com páginas, navegação, cardápio e sistema organizado.",

    // Ícones usados para mostrar tecnologias utilizadas
    techs: [FaReact, FaJs, FaCss3Alt, SiVite],

    // Caminho direto para a imagem dentro da pasta /public/projects
    image: "/projects/restaurant.png",

    // Link para o repositório no GitHub
    repo: "https://github.com/CaioFenomeno/restaurant-online",
  },

  {
    id: 2,
    title: "Todo React Avançado",
    description:
      "Sistema de tarefas completo, com persistência, filtros, interface otimizada e componentes avançados.",
    techs: [FaReact, FaJs, FaCss3Alt],
    image: "/projects/todolist.png",
    repo: "https://github.com/CaioFenomeno/todo-react-avancado",
  },

  {
    id: 3,
    title: "Pet & Style (HTML + CSS)",
    description:
      "Website completo e otimizado inspirado em um petshop moderno, com layout clean e responsivo.",
    techs: [FaHtml5, FaCss3Alt],
    image: "/projects/pet.png",
    repo: "https://github.com/CaioFenomeno/pet-style",
  },
];
