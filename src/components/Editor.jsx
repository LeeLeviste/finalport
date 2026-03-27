import Projects from "./panels/Projects";
import Skills from "./panels/Skills";
import Education from "./panels/Education";
import Contact from "./panels/Contact";
import styles from "../styles/Editor.module.css";

const LINE_COUNT_BY_FILE = {
  projects: 88,
  skills: 58,
  education: 44,
  contact: 30
};

function Editor({ activeKey, resume }) {
  const lineCount = LINE_COUNT_BY_FILE[activeKey] ?? 40;

  return (
    <main className={styles.editor}>
      <aside className={styles.gutter} aria-hidden="true">
        {Array.from({ length: lineCount }, (_, index) => (
          <span key={index + 1} className={styles.lineNumber}>
            {index + 1}
          </span>
        ))}
      </aside>

      <section className={styles.content}>
        {activeKey === "projects" && <Projects resume={resume} />}
        {activeKey === "skills" && <Skills resume={resume} />}
        {activeKey === "education" && <Education resume={resume} />}
        {activeKey === "contact" && <Contact resume={resume} />}
      </section>
    </main>
  );
}

export default Editor;
