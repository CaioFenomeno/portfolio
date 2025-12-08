// src/components/Footer/Footer.jsx

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Caio — Desenvolvedor Frontend.  
        Todos os direitos reservados.
      </p>
    </footer>
  );
}
