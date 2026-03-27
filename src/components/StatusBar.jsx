import { useEffect, useMemo, useState } from "react";
import styles from "../styles/StatusBar.module.css";

function StatusBar({ name, currentFile }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(
    () =>
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }),
    [now]
  );

  return (
    <footer className={styles.statusBar}>
      <div className={styles.section}>Portfolio</div>
      <div className={styles.section}>{name} | {currentFile}</div>
      <div className={`${styles.section} ${styles.clock}`}>Local {formattedTime}</div>
    </footer>
  );
}

export default StatusBar;
