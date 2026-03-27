import styles from "../../styles/Contact.module.css";

function Contact({ resume }) {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <p className={styles.overline}>CONTACT</p>
        <h2>Connect</h2>
      </header>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>Email</h3>
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
        </article>

        <article className={styles.card}>
          <h3>Phone</h3>
          <p>{resume.phone}</p>
        </article>

        <article className={styles.card}>
          <h3>Github</h3>
          <a href={resume.github} target="_blank" rel="noreferrer">
            {resume.github}
          </a>
        </article>

        <article className={styles.card}>
          <h3>Linkedin</h3>
          <a href={resume.linkedin} target="_blank" rel="noreferrer">
            {resume.linkedin}
          </a>
        </article>

        <article className={styles.card}>
          <h3>Location</h3>
          <p>{resume.location}</p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
