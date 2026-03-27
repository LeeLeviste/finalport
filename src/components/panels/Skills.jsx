import styles from "../../styles/Skills.module.css";

function Skills({ resume }) {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <p className={styles.overline}>SKILLS</p>
        <h2>Technical Toolkit</h2>
      </header>

      <div className={styles.section}>
        <h3>Programming Languages and Frameworks</h3>
        <p className={`${styles.commentLine} ${styles.languageLine}`}>
          {resume.skills.languages.join(", ")}
        </p>
      </div>

      <div className={styles.section}>
        <h3>ML and AI Stack</h3>
        <p className={`${styles.commentLine} ${styles.mlLine}`}>
          {resume.skills.mlAi.join(", ")}
        </p>
      </div>

      <div className={styles.section}>
        <h3>Core Tools</h3>
        <p className={`${styles.commentLine} ${styles.toolLine}`}>
          {resume.skills.tools.join(", ")}
        </p>
      </div>
    </section>
  );
}

export default Skills;
