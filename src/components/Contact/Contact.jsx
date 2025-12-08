// Importa o arquivo de estilos CSS
import styles from "./Contact.module.css";

// Importa ícones do react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contato</h2>

      <p className={styles.subtitle}>
        Entre em contato comigo através das redes abaixo:
      </p>

      <div className={styles.icons}>
        {/* GitHub */}
        <a
          href="https://github.com/CaioFenomeno"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCard}
        >
          <FaGithub className={styles.icon} />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCard}
        >
          <FaLinkedin className={styles.icon} />
          <span>LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href=""
          className={styles.iconCard}
        >
          <FaEnvelope className={styles.icon} />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
