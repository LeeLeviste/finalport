import styles from "../styles/TaglineCard.module.css";

function TaglineCard({ resume }) {
  return (
    <section className={styles.card}>
      <p className={styles.quote}>Build systems that scale from models to interfaces.</p>
      <h1 className={styles.name}>{resume.name}</h1>
      <p className={styles.role}>{resume.role}</p>
      <div className={styles.metaRow}>
        <span className={styles.status}>{resume.internshipStatus}</span>
        <span className={styles.tag}>{resume.campusTag}</span>
      </div>
    </section>
  );
}

export default TaglineCard;
