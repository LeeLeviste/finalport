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
          <h3>Location</h3>
          <p>{resume.location}</p>
        </article>

        <article className={styles.card}>
          <h3>Activity</h3>
          <p>{resume.activities[0]?.title}</p>
          <p>{resume.activities[0]?.organization}</p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
