import styles from "../../styles/ReadMe.module.css";

function ReadMe({ resume }) {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <p className={styles.overline}>---</p>
        <p className={styles.metaLine}>name: {resume.name}</p>
        <p className={styles.metaLine}>role: {resume.role}</p>
        <p className={styles.metaLine}>location: {resume.location}</p>
        <p className={styles.overline}>---</p>
      </header>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h3># {resume.greeting}</h3>
          <p>{resume.about}</p>
        </article>
      </div>
    </section>
  );
}

export default ReadMe;
