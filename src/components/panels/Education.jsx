import styles from "../../styles/Education.module.css";

function Education({ resume }) {
  const { education, activities } = resume;

  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <p className={styles.overline}>EDUCATION</p>
        <h2>Academic Timeline</h2>
      </header>

      <div className={styles.timeline}>
        <article className={styles.timelineItem}>
          <span className={styles.dot} />
          <div className={styles.content}>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p>{education.city}</p>
            <p>Expected Graduation: {education.expectedGraduation}</p>
          </div>
        </article>

        {activities.map((activity) => (
          <article key={activity.title} className={styles.timelineItem}>
            <span className={styles.dot} />
            <div className={styles.content}>
              <h3>{activity.title}</h3>
              <p>{activity.organization}</p>
              <p>{activity.period}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
