import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import Editor from "./components/Editor";
import StatusBar from "./components/StatusBar";
import AsciiPanel from "./components/AsciiPanel";
import resume from "./data/resume";
import styles from "./styles/App.module.css";

const FILES = [
  { key: "readme", label: "README.md" },
  { key: "projects", label: "PROJECTS.md" },
  { key: "skills", label: "SKILLS.md" },
  { key: "education", label: "EDUCATION.md" },
  { key: "contact", label: "CONTACT.md" }
];

function App() {
  const [activeKey, setActiveKey] = useState("readme");
  const [openTabKeys, setOpenTabKeys] = useState(["readme"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 960);
  const [idePosition, setIdePosition] = useState({ x: 420, y: 64 });
  const [cmdPosition, setCmdPosition] = useState({ x: 48, y: 64 });

  const tabs = useMemo(
    () => openTabKeys.map((key) => FILES.find((file) => file.key === key)).filter(Boolean),
    [openTabKeys]
  );

  const handleSelectFile = (key) => {
    setActiveKey(key);
    setOpenTabKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
    setSidebarOpen(false);
  };

  const handleCloseTab = (key) => {
    if (openTabKeys.length === 1) {
      return;
    }

    const nextKeys = openTabKeys.filter((item) => item !== key);
    setOpenTabKeys(nextKeys);

    if (activeKey === key) {
      setActiveKey(nextKeys[nextKeys.length - 1]);
    }
  };

  const currentFile = FILES.find((file) => file.key === activeKey)?.label ?? "README.md";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const makeDragStartHandler = (windowType) => (event) => {
    if (isMobile) {
      return;
    }

    const originX = event.clientX;
    const originY = event.clientY;
    const startPosition = windowType === "ide" ? idePosition : cmdPosition;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - originX;
      const deltaY = moveEvent.clientY - originY;
      const nextX = Math.max(12, startPosition.x + deltaX);
      const nextY = Math.max(12, startPosition.y + deltaY);

      if (windowType === "ide") {
        setIdePosition({ x: nextX, y: nextY });
        return;
      }

      setCmdPosition({ x: nextX, y: nextY });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.appShell}>
      <section
        className={`${styles.floatingWindow} ${styles.cmdWindow}`}
        style={isMobile ? undefined : { left: `${cmdPosition.x}px`, top: `${cmdPosition.y}px` }}
      >
        <AsciiPanel onDragStart={makeDragStartHandler("cmd")} />
      </section>

      <section
        className={`${styles.floatingWindow} ${styles.ideWindow}`}
        style={isMobile ? undefined : { left: `${idePosition.x}px`, top: `${idePosition.y}px` }}
      >
        <header className={styles.titleBar} onMouseDown={makeDragStartHandler("ide")}>
          <div className={styles.windowControls}>
            <span className={`${styles.control} ${styles.controlClose}`} />
            <span className={`${styles.control} ${styles.controlMinimize}`} />
            <span className={`${styles.control} ${styles.controlMaximize}`} />
          </div>
          <p className={styles.titleText}>{currentFile}</p>
          <div className={styles.titleSpacer} aria-hidden="true" />
        </header>

        <div className={styles.layout}>
          <Sidebar
            files={FILES}
            activeKey={activeKey}
            onSelectFile={handleSelectFile}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            resume={resume}
          />

          {sidebarOpen && <button type="button" className={styles.backdrop} onClick={() => setSidebarOpen(false)} aria-label="Close menu" />}

          <section className={styles.mainPanel}>
            <div className={styles.mobileTopBar}>
              <button
                type="button"
                className={styles.mobileMenuButton}
                onClick={() => setSidebarOpen((prev) => !prev)}
                aria-label="Toggle sidebar"
              >
                Menu
              </button>
            </div>

            <div className={styles.editorWorkbench}>
              <TabBar
                tabs={tabs}
                activeKey={activeKey}
                onSelectTab={setActiveKey}
                onCloseTab={handleCloseTab}
              />

              <div className={styles.editorPath}>portfolio / src / {currentFile}</div>

              <Editor activeKey={activeKey} resume={resume} />
            </div>
          </section>
        </div>

        <StatusBar name={resume.name} currentFile={currentFile} />
      </section>
    </div>
  );
}

export default App;
