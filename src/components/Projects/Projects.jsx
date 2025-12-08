import React from 'react';
import styles from './Projects.module.css'; // Importando o CSS Module
import { projectsData } from './ProjectsData'; // Importando os dados separados
import { FaGithub } from 'react-icons/fa'; // Ícone para o botão de repositório

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>

      <div className={styles.cards}>
        {projectsData.map((project) => (
          <article key={project.id} className={styles.card}>
            
            {/* Imagem do Projeto */}
            <div className={styles.imageBox}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.thumb} 
              />
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {/* Ícones das Tecnologias */}
              <div className={styles.techs}>
                {project.techs.map((TechIcon, index) => (
                  <div key={index} className={styles.techIcon}>
                    <TechIcon />
                  </div>
                ))}
              </div>

              {/* Botões / Links */}
              <div className={styles.buttons}>
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.btn}
                >
                  <FaGithub /> Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;