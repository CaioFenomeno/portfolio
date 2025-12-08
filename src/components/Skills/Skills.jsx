import styles from "./Skills.module.css";

// Importando ícones do react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiVite, SiStyledcomponents } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Habilidades</h2>

      {/* Container dos ícones */}
      <div className={styles.icons}>
        <FaHtml5 title="HTML5" className={styles.icon} />
        <FaCss3Alt title="CSS3" className={styles.icon} />
        <FaJs title="JavaScript" className={styles.icon} />
        <FaReact title="React" className={styles.icon} />
        <SiVite title="Vite" className={styles.icon} />
        <SiStyledcomponents title="Styled Components" className={styles.icon} />
        <FaGithub title="GitHub" className={styles.icon} />
      </div>
    </section>
  );
}
