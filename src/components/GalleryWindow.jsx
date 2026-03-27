import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Masonry from "react-masonry-css";
import { certifications } from "../data/certifications";
import styles from "../styles/GalleryWindow.module.css";

const CATEGORIES = ["All", "Machine Learning", "Web Development", "AI"];
const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

function GalleryWindow({ onDragStart }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCertifications = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return certifications.filter((cert) => {
      const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
      const matchesSearch =
        searchTerm.length === 0 ||
        cert.name.toLowerCase().includes(searchTerm) ||
        cert.issuer.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const lightboxContent = selectedCert ? (
    <div className={styles.lightboxOverlay} onClick={() => setSelectedCert(null)}>
      <article className={styles.lightbox} onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setSelectedCert(null)}
          aria-label="Close certificate preview"
        >
          Close
        </button>
        <img src={selectedCert.image} alt={selectedCert.name} className={styles.lightboxImage} />
        <h3>{selectedCert.name}</h3>
        <p>{selectedCert.issuer}</p>
        <p>Completed: {selectedCert.date}</p>
        <a href={selectedCert.verificationUrl} target="_blank" rel="noreferrer" className={styles.verifyButton}>
          Verification Link
        </a>
      </article>
    </div>
  ) : null;

  return (
    <section className={styles.galleryWindow} aria-label="Certifications gallery">
      <div className={styles.titleBar} onMouseDown={onDragStart}>
        <div className={styles.trafficLights}>
          <span className={styles.red} />
          <span className={styles.yellow} />
          <span className={styles.green} />
        </div>
        <span className={styles.title}>Certifications - Photos</span>
      </div>

      <div className={styles.toolbar}>
        <input
          type="text"
          placeholder="Search certifications..."
          className={styles.search}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.filterChip} ${activeCategory === category ? styles.activeFilter : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {filteredCertifications.map((cert) => (
          <div
            key={cert.id}
            className={styles.masonryItem}
            onClick={() => setSelectedCert(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setSelectedCert(cert);
              }
            }}
          >
            <img
              src={cert.image}
              alt={cert.name}
              style={{ width: "100%", display: "block", borderRadius: "8px" }}
              loading="lazy"
            />
            <p style={{ color: "var(--text-bright)", fontSize: "11px", margin: "4px 0 0 0" }}>{cert.name}</p>
            <p style={{ color: "var(--text-muted)", fontSize: "10px", margin: "2px 0 0 0" }}>{cert.issuer}</p>
          </div>
        ))}
      </Masonry>

      {typeof document !== "undefined" && lightboxContent ? createPortal(lightboxContent, document.body) : null}
    </section>
  );
}

export default GalleryWindow;
