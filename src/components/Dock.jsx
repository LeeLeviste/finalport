import styles from "../styles/Dock.module.css";

function Dock({
  isIdeOpen,
  isCmdOpen,
  isGalleryOpen,
  onToggleIde,
  onToggleCmd,
  onToggleGallery,
  githubUrl,
  linkedinUrl
}) {
  return (
    <nav className={styles.dock} aria-label="Desktop dock">
      <button type="button" className={styles.dockItem} onClick={onToggleIde} aria-label="Portfolio">
        <i className="codicon codicon-files" aria-hidden="true" />
        <span className={styles.tooltip}>Portfolio</span>
        {isIdeOpen && <span className={styles.indicator} aria-hidden="true" />}
      </button>

      <button type="button" className={styles.dockItem} onClick={onToggleCmd} aria-label="CMD">
        <i className="codicon codicon-terminal" aria-hidden="true" />
        <span className={styles.tooltip}>CMD</span>
        {isCmdOpen && <span className={styles.indicator} aria-hidden="true" />}
      </button>

      <button type="button" className={styles.dockItem} onClick={onToggleGallery} aria-label="Gallery">
        <i className="codicon codicon-device-camera" aria-hidden="true" />
        <span className={styles.tooltip}>Gallery</span>
        {isGalleryOpen && <span className={styles.indicator} aria-hidden="true" />}
      </button>

      <a
        className={styles.dockItem}
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="codicon codicon-github" aria-hidden="true" />
        <span className={styles.tooltip}>GitHub</span>
      </a>

      <a
        className={styles.dockItem}
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <svg className={styles.linkedinIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z"
          />
        </svg>
        <span className={styles.tooltip}>LinkedIn</span>
      </a>
    </nav>
  );
}

export default Dock;
