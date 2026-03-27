import { useEffect, useRef, useState } from "react";
import asciiName from "../data/name.txt?raw";
import asciiPortrait from "../data/banner.txt?raw";
import styles from "../styles/AsciiPanel.module.css";

const getMaxLineLength = (text) =>
  text
    .split("\n")
    .reduce((longest, line) => (line.length > longest ? line.length : longest), 0);

const getFittedFontSize = (asciiText, availableWidth, maxSize, minSize) => {
  const maxChars = Math.max(1, getMaxLineLength(asciiText));
  const charWidthFactor = 0.62;
  const rawSize = availableWidth / (maxChars * charWidthFactor);
  return Math.max(minSize, Math.min(maxSize, rawSize));
};

function AsciiPanel({ onDragStart, resume }) {
  const panelRef = useRef(null);
  const [nameFontSize, setNameFontSize] = useState(7);
  const [portraitFontSize, setPortraitFontSize] = useState(5);

  useEffect(() => {
    const updateFontSizes = () => {
      if (!panelRef.current) {
        return;
      }

      const availableWidth = Math.max(120, panelRef.current.clientWidth - 4);
      setNameFontSize(getFittedFontSize(asciiName, availableWidth, 7, 3));
      setPortraitFontSize(getFittedFontSize(asciiPortrait, availableWidth, 5, 2));
    };

    updateFontSizes();

    const observer = new ResizeObserver(updateFontSizes);
    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    window.addEventListener("resize", updateFontSizes);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFontSizes);
    };
  }, []);

  return (
    <aside className={styles.window} aria-label="ASCII profile panel">
      <div className={styles.titleBar} onMouseDown={onDragStart}>
        <div className={styles.windowControls}>
          <span className={`${styles.control} ${styles.controlClose}`} />
          <span className={`${styles.control} ${styles.controlMinimize}`} />
          <span className={`${styles.control} ${styles.controlMaximize}`} />
        </div>
        <span className={styles.titleText}>C:\\Users\\LeeRyan - cmd.exe</span>
        <span className={styles.titleSpacer} aria-hidden="true" />
      </div>

      <div className={styles.panel} ref={panelRef}>
        <pre
          className={styles.asciiName}
          style={{ fontSize: `${nameFontSize}px` }}
        >
          {asciiName}
        </pre>

        <pre
          className={styles.asciiPortrait}
          style={{ fontSize: `${portraitFontSize}px` }}
        >
          {asciiPortrait}
        </pre>

        <div style={{ fontFamily: "var(--runtime-font-mono)", fontSize: "12px", lineHeight: 1.8 }}>
          <p style={{ color: "var(--syntax-blue)" }}>C:\\Users\\LeeRyan&gt; type README.md</p>
          <p style={{ color: "var(--text-bright)" }}>name: {resume.name}</p>
          <p style={{ color: "var(--text-bright)" }}>role: {resume.role}</p>
          <p style={{ color: "var(--text-bright)" }}>location: {resume.location}</p>
          <p style={{ color: "var(--text-bright)" }}>{resume.greeting}</p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>{resume.about}</p>
          <br />
          <p style={{ color: "var(--syntax-blue)" }}>C:\\Users\\LeeRyan&gt; whoami</p>
          <p style={{ color: "var(--text-bright)" }}>Lee Ryan Leviste</p>
          <br />
          <p style={{ color: "var(--syntax-blue)" }}>C:\\Users\\LeeRyan&gt; role</p>
          <p style={{ color: "var(--text-bright)" }}>CS Student · AI Enthusiast</p>
          <br />
          <p style={{ color: "var(--syntax-blue)" }}>C:\\Users\\LeeRyan&gt; status</p>
          <p style={{ color: "var(--syntax-green)" }}>Open to Internships</p>
          <br />
          <p style={{ color: "var(--syntax-blue)" }}>C:\\Users\\LeeRyan&gt; org</p>
          <p style={{ color: "var(--text-bright)" }}>GDG on Campus · Mapua</p>
          <br />
          <p style={{ color: "var(--syntax-blue)" }}>
            C:\\Users\\LeeRyan&gt; <span className={styles.cursor}>_</span>
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AsciiPanel;
