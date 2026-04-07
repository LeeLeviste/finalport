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
            {project.linkUrl && (
              <p className={styles.projectLinkWrap}>
                <a
                  className={styles.projectLink}
                  href={project.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel || "Click here."}
                </a>
              </p>
            )}
            {project.images?.length > 0 && (
              <div className={styles.projectImageRow}>
                {project.images.map((imageSrc, index) => (
                  <a
                    key={`${project.name}-${index}`}
                    className={styles.projectImageLink}
                    href={imageSrc}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} preview ${index + 1}`}
                  >
                    <img
                      className={`${styles.projectImage} ${styles.projectImageSplit} ${project.imageLayout === "wide" ? styles.projectImageWide : ""}`}
                      src={imageSrc}
                      alt={`${project.name} preview ${index + 1}`}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            )}
            {project.image && !project.images?.length && (
              <a
                className={styles.projectImageLink}
                href={project.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} preview`}
              >
                <img
                  className={styles.projectImage}
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                />
              </a>
            )}
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
