import styles from "../styles/TabBar.module.css";

function TabBar({ tabs, activeKey, onSelectTab, onCloseTab }) {
  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`${styles.tab} ${activeKey === tab.key ? styles.activeTab : ""}`}
        >
          <button
            type="button"
            className={styles.tabButton}
            onClick={() => onSelectTab(tab.key)}
          >
            <span className={styles.fileIcon} aria-hidden="true">
              md
            </span>
            <span className={styles.fileName}>{tab.label}</span>
          </button>
          {tabs.length > 1 && (
            <button
              type="button"
              className={styles.closeButton}
              aria-label={`Close ${tab.label}`}
              onClick={() => onCloseTab(tab.key)}
            >
              x
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TabBar;
