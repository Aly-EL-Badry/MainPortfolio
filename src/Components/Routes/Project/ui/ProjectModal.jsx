import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ selectedProject, closeModal }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [heroHeightPercent, setHeroHeightPercent] = useState(20);
  const heroTouchYRef = React.useRef(null);
  const heroRef = React.useRef(null);

  const handleHeroTouchStart = useCallback((e) => {
    heroTouchYRef.current = e.touches[0].clientY;
  }, []);

  const handleHeroTouchEnd = useCallback(() => {
    heroTouchYRef.current = null;
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || !selectedProject) return;
    const onWheel = (e) => {
      e.preventDefault();
      setHeroHeightPercent((p) => Math.min(50, Math.max(20, p + (e.deltaY > 0 ? -2 : 2))));
    };
    const onTouchMove = (e) => {
      if (heroTouchYRef.current == null) return;
      e.preventDefault();
      const dy = e.touches[0].clientY - heroTouchYRef.current;
      heroTouchYRef.current = e.touches[0].clientY;
      setHeroHeightPercent((p) => Math.min(50, Math.max(20, p + (dy > 0 ? -1.2 : 1.2))));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [selectedProject]);

  const expandHero = useCallback(() => setHeroHeightPercent(50), []);
  const collapseHero = useCallback(() => setHeroHeightPercent(20), []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setHeroHeightPercent(20);
      const imgs = selectedProject.images || [selectedProject.img];
      setSelectedImageUrl(imgs[0] || selectedProject.img);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject, closeModal]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
        >
          <motion.div
            className="project-modal project-modal-card"    
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div
              ref={heroRef}
              className="project-modal-hero project-modal-hero-swipeable"
              style={{ height: `${heroHeightPercent}vh`, minHeight: heroHeightPercent >= 40 ? 200 : 140 }}
              onTouchStart={handleHeroTouchStart}
              onTouchEnd={handleHeroTouchEnd}
              onTouchCancel={handleHeroTouchEnd}
            >
              <div className="project-modal-hero-resize-btns">
                <button
                  type="button"
                  className="project-modal-hero-resize-btn"
                  onClick={(e) => { e.stopPropagation(); collapseHero(); }}
                  disabled={heroHeightPercent <= 20}
                  aria-label="Collapse image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="project-modal-hero-resize-btn"
                  onClick={(e) => { e.stopPropagation(); expandHero(); }}
                  disabled={heroHeightPercent >= 50}
                  aria-label="Expand image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
              <span className="project-modal-hero-hint">Scroll or swipe to resize</span>
              <img
                src={selectedImageUrl || selectedProject.img}
                alt={selectedProject.alt}
              />
              <div className="project-modal-hero-overlay" />
              <div className="project-modal-header project-modal-header-overlay">
                <h2 className="project-modal-title">{selectedProject.main}</h2>
                <p className="project-modal-subtitle">{selectedProject.sub}</p>
              </div>
            </div>

            <div className="project-modal-grid">
              {/* Left: Problem & Solution (image opens here = main hero above) */}
              <div className="project-modal-left">
                <div className="project-modal-details">
                  {selectedProject.details?.problem != null && (
                    <>
                      <h3 className="project-modal-detail-heading">Problem</h3>
                      <p className="project-modal-detail-text">{selectedProject.details.problem}</p>
                      <h3 className="project-modal-detail-heading">Solution</h3>
                      <p className="project-modal-detail-text">{selectedProject.details.solution}</p>
                    </>
                  )}
                  {selectedProject.details?.description != null && (
                    <>
                      <h3 className="project-modal-detail-heading">About</h3>
                      <p className="project-modal-detail-text">{selectedProject.details.description}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Right: only small thumbnails (click to show in hero), tech, link */}
              <div className="project-modal-right">
                <div className="project-modal-thumbnails-wrap">
                  <span className="project-modal-thumbnails-label">Images</span>
                  <div className="project-modal-thumbnails">
                    {(selectedProject.images || [selectedProject.img]).map((src, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={`project-modal-thumb ${selectedImageUrl === src ? 'active' : ''}`}
                        onClick={() => setSelectedImageUrl(src)}
                      >
                        <img src={src} alt={`${selectedProject.alt} ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="project-modal-tech-wrap">
                  <span className="project-modal-tech-label">Tech</span>
                  <div className="project-modal-tags">
                    {selectedProject.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-modal-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-modal-links">
                  {(selectedProject.links || [{ label: "View project", url: selectedProject.link }]).map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      className="project-modal-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{l.label}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
