// Importa o React Hook necessário para inicializar o AOS
import { useEffect } from "react";

// Importa a biblioteca de animações AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Importa os componentes principais da aplicação
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Importa estilos globais de animação personalizados (se você tiver)
import "./styles/animations.css";

// Componente principal da aplicação
export default function App() {
  // useEffect roda uma vez ao carregar a página
  useEffect(() => {
    // Inicializa a biblioteca AOS para animações ao scroll
    AOS.init({
      duration: 800,      // Duração padrão das animações
      once: true,         // Anima apenas uma vez ao aparecer
      easing: "ease-out", // Suavização mais agradável
    });
  }, []);

  return (
    <>
      {/* ======== Header (Navegação Fixa) ======== */}
      <Header />

      {/* ======== Seção Sobre Mim ======== */}
      <About />

      {/* ======== Seção Projetos ======== */}
      <Projects />

      {/* ======== Seção Habilidades ======== */}
      <Skills />

      {/* ======== Seção Contato ======== */}
      <Contact />

      {/* ======== Rodapé ======== */}
      <Footer />
    </>
  );
}
