import styles from "../../styles/Projects.module.css";

function Projects({ resume }) {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <p className={styles.overline}>## Projects</p>
        <h2>### Featured</h2>
      </header>

      <div className={styles.projectGrid}>
        {resume.projects.featured.map((project) => (
          <article key={project.name} className={styles.projectCard}>
            <h3>- {project.name}</h3>
            <p className={styles.stack}>{project.stack}</p>
            <p className={styles.description}>{project.description}</p>
          </article>
        ))}
      </div>

      {resume.projects.other.length > 0 && (
        <>
          <header className={styles.subHeader}>
            <h2>### Other Work</h2>
          </header>

          <div className={styles.projectGrid}>
            {resume.projects.other.map((project) => (
              <article key={project.name} className={styles.projectCard}>
                <h3>- {project.name}</h3>
                <p className={styles.description}>{project.description}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
