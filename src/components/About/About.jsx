import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <img
          src="/profile.jpg"
          alt="Foto de perfil"
          className={styles.profile}
        />

        <div className={styles.text}>
          <h2>Sobre Mim</h2>
          <p>
            Sou Caio, desenvolvedor Full Stack em formação com foco em criar
            interfaces modernas, responsivas e experiências digitais limpas.
          </p>
          <p>
            Tenho estudado diariamente para me tornar um profissional sólido,
            evoluindo sempre em JavaScript, React, Node.js e boas práticas de
            desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}
