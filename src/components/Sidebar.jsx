import TaglineCard from "./TaglineCard";
import styles from "../styles/Sidebar.module.css";

const iconStyle = {
  color: "var(--syntax-blue)",
  fontSize: "16px",
  marginRight: "6px",
  verticalAlign: "middle"
};

function Sidebar({ files, activeKey, onSelectFile, isOpen, onClose, resume }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.mobileHeader}>
        <h2 className={styles.mobileTitle}>Explorer</h2>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close sidebar"
        >
          Close
        </button>
      </div>

      <div className={styles.explorerHeader}>
        <p className={styles.explorerTitle}>Explorer</p>
        <p className={styles.projectFolder}>finalport</p>
      </div>

      <div className={styles.fileTreeWrap}>
        <p className={styles.treeTitle}>
          <i className="codicon codicon-files" style={iconStyle} aria-hidden="true" />
          Files
        </p>
        <ul className={styles.fileTree}>
          <li className={styles.folderItem}>
            <span className={styles.chevron} aria-hidden="true">
              ▾
            </span>
            <i className="codicon codicon-folder-opened" style={iconStyle} aria-hidden="true" />
            <span className={styles.folderLabel}>src</span>
          </li>

          <li className={styles.folderItem}>
            <span className={styles.chevron} aria-hidden="true">
              ▸
            </span>
            <i className="codicon codicon-folder" style={iconStyle} aria-hidden="true" />
            <span className={styles.folderLabel}>public</span>
          </li>

          {files.map((file) => {
            const isActive = file.key === activeKey;

            return (
              <li key={file.key}>
                <button
                  type="button"
                  onClick={() => onSelectFile(file.key)}
                  className={`${styles.fileItem} ${styles.nestedItem} ${isActive ? styles.active : ""}`}
                >
                  <i className="codicon codicon-markdown" style={iconStyle} aria-hidden="true" />
                  <span className={styles.fileLabel}>{file.label}</span>
                </button>
              </li>
            );
          })}

          <li>
            <div className={`${styles.fileItem} ${styles.nestedItem}`}>
              <i className="codicon codicon-file" style={iconStyle} aria-hidden="true" />
              <span className={styles.fileLabel}>resume.js</span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.fileTreeWrap}>
        <p className={styles.treeTitle}>Workspace</p>
        <ul className={styles.fileTree}>
          <li className={styles.folderItem}>
            <i className="codicon codicon-source-control" style={iconStyle} aria-hidden="true" />
            <span className={styles.folderLabel}>Source Control</span>
          </li>
          <li className={styles.folderItem}>
            <i className="codicon codicon-terminal" style={iconStyle} aria-hidden="true" />
            <span className={styles.folderLabel}>Terminal</span>
          </li>
          <li className={styles.folderItem}>
            <i className="codicon codicon-settings-gear" style={iconStyle} aria-hidden="true" />
            <span className={styles.folderLabel}>Settings</span>
          </li>
        </ul>
      </div>

      <TaglineCard resume={resume} />
    </aside>
  );
}

export default Sidebar;
