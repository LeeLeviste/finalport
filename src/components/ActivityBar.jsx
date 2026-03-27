import styles from "../styles/ActivityBar.module.css";

const ITEMS = [
  { id: "explorer", label: "Explorer", glyph: "EX" },
  { id: "search", label: "Search", glyph: "SR" },
  { id: "source", label: "Source Control", glyph: "SC" },
  { id: "extensions", label: "Extensions", glyph: "XT" }
];

function ActivityBar() {
  return (
    <aside className={styles.activityBar} aria-label="Activity bar">
      <div className={styles.topItems}>
        {ITEMS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.item} ${index === 0 ? styles.active : ""}`}
            aria-label={item.label}
            title={item.label}
          >
            <span>{item.glyph}</span>
          </button>
        ))}
      </div>
      <div className={styles.bottomItem}>
        <button type="button" className={styles.item} aria-label="Account" title="Account">
          <span>ME</span>
        </button>
      </div>
    </aside>
  );
}

export default ActivityBar;
