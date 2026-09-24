import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaDocker,
  FaGlobe,
  FaBrain,
  FaServer,
  FaCode,
  FaDesktop,
  FaMobileAlt,
  FaExternalLinkAlt,
  FaLinkedin,
  FaTrophy,
  FaStar,
  FaBriefcase,
  FaMedal,
  FaAward,
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaTimes,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaExclamationCircle,
  FaRocket,
  FaLightbulb,
  FaLayerGroup,
  FaFire,
  FaBolt,
  FaInfoCircle,
  FaCheckCircle,
} from 'react-icons/fa';
import './ProjectModal.css';

/* ─── helpers ─────────────────────────────────────────────── */
const isVideo = (src = '') =>
  src.includes('youtube.com') ||
  src.includes('youtu.be') ||
  src.includes('vimeo.com') ||
  /\.(mp4|webm|ogg)$/i.test(src);

const toEmbedUrl = (url = '') => {
  if (url.includes('youtube.com/watch')) {
    try {
      const id = new URL(url).searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}?autoplay=0` : url;
    } catch { return url; }
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return id ? `https://www.youtube.com/embed/${id}?autoplay=0` : url;
  }
  return url;
};

const renderLinkIcon = (link) => {
  const icon = link?.icon;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === 'function') { const I = icon; return <I />; }
  const k = typeof icon === 'string' ? icon.toLowerCase() : '';
  if (k === 'github') return <FaGithub />;
  if (k === 'docker') return <FaDocker />;
  if (k === 'globe' || k === 'website' || k === 'live') return <FaGlobe />;
  if (k === 'brain' || k === 'ml' || k === 'mlops' || k === 'ai') return <FaBrain />;
  if (k === 'server' || k === 'backend') return <FaServer />;
  if (k === 'code') return <FaCode />;
  if (k === 'desktop' || k === 'frontend') return <FaDesktop />;
  if (k === 'mobile' || k === 'app' || k === 'phone') return <FaMobileAlt />;
  const url = link?.url || '';
  const label = (link?.label || '').toLowerCase();
  if (url.includes('docker.com') || label.includes('docker')) return <FaDocker />;
  if (url.includes('github.com')) {
    if (label.includes('mobile') || label.includes('app')) return <FaMobileAlt />;
    if (label.includes('ml') || label.includes('ai')) return <FaBrain />;
    if (label.includes('backend') || label.includes('server')) return <FaServer />;
    if (label.includes('front') || label.includes('ui')) return <FaDesktop />;
    return <FaGithub />;
  }
  if (label.includes('web') || label.includes('site') || label.includes('live')) return <FaGlobe />;
  return <FaExternalLinkAlt />;
};

const highlightIcon = (type = '') => {
  const t = type.toLowerCase();
  if (t.includes('award') || t.includes('winner')) return <FaAward />;
  if (t.includes('trophy') || t.includes('1st') || t.includes('first')) return <FaTrophy />;
  if (t.includes('medal')) return <FaMedal />;
  if (t.includes('star') || t.includes('featured')) return <FaStar />;
  if (t.includes('freelance') || t.includes('intern')) return <FaBriefcase />;
  return <FaStar />;
};

const renderFeatureIcon = (iconName = '') => {
  const k = (iconName || '').toLowerCase();
  if (k === 'brain' || k === 'ai' || k === 'ml') return <FaBrain />;
  if (k === 'database' || k === 'server' || k === 'notion') return <FaServer />;
  if (k === 'streak' || k === 'fire') return <FaFire />;
  if (k === 'mobile' || k === 'app') return <FaMobileAlt />;
  if (k === 'star' || k === 'award') return <FaStar />;
  if (k === 'rocket') return <FaRocket />;
  if (k === 'check') return <FaCheckCircle />;
  if (k === 'docker' || k === 'container') return <FaDocker />;
  if (k === 'code' || k === 'pipeline' || k === 'dev') return <FaCode />;
  if (k === 'desktop' || k === 'frontend' || k === 'web') return <FaDesktop />;
  return <FaBolt />;
};

/* ─── Member Popover ──────────────────────────────────────── */
const MemberPopover = ({ members, anchorRef, onClose }) => {
  const popRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        popRef.current && !popRef.current.contains(e.target) &&
        anchorRef.current && !anchorRef.current.contains(e.target)
      ) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose, anchorRef]);

  return (
    <motion.div
      ref={popRef}
      className="pm-member-popover"
      initial={{ opacity: 0, y: -8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.95 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <div className="pm-member-popover-title">Team Members</div>
      <div className="pm-member-list">
        {members.map((m, i) => (
          <div key={i} className="pm-member-card">
            {m.avatar
              ? <img src={m.avatar} alt={m.name} className="pm-member-avatar" />
              : <div className="pm-member-avatar pm-member-avatar-placeholder">{(m.name || '?')[0]}</div>
            }
            <div className="pm-member-info">
              <span className="pm-member-name">{m.name}</span>
              {m.role && <span className="pm-member-role">{m.role}</span>}
            </div>
            <div className="pm-member-links">
              {m.github && (
                <a href={m.github} target="_blank" rel="noopener noreferrer" className="pm-member-link" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="pm-member-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Media Viewer ────────────────────────────────────────── */
const MediaViewer = ({ src, alt }) => {
  if (!src) {
    return (
      <div className="pm-media-placeholder">
        <FaPlay className="pm-media-placeholder-icon" />
        <span>No media available</span>
      </div>
    );
  }
  if (isVideo(src)) {
    return (
      <div className="pm-media-video-wrap">
        <iframe
          src={toEmbedUrl(src)}
          title={alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <motion.img
      key={src}
      src={src}
      alt={alt}
      className="pm-media-img"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

/* ─── Main Modal ──────────────────────────────────────────── */
const ProjectModal = ({ selectedProject, closeModal }) => {
  const [activeMedia, setActiveMedia] = useState(null);
  const [memberPopoverOpen, setMemberPopoverOpen] = useState(false);
  const teamBtnRef = useRef(null);

  const p = selectedProject;
  const mediaList = p
    ? [
      ...(p.img && !(p.images || []).includes(p.img) ? [p.img] : []),
      ...(p.images || []),
    ].filter(Boolean)
    : [];

  useEffect(() => {
    if (!p) return;
    setActiveMedia(mediaList[0] || null);
    setMemberPopoverOpen(false);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [p]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal(); };
    if (p) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [p, closeModal]);

  const activeIndex = mediaList.indexOf(activeMedia);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) setActiveMedia(mediaList[activeIndex - 1]);
  }, [activeIndex, mediaList]);

  const goNext = useCallback(() => {
    if (activeIndex < mediaList.length - 1) setActiveMedia(mediaList[activeIndex + 1]);
  }, [activeIndex, mediaList]);

  const links = p
    ? (p.links?.length
      ? p.links
      : p.link
        ? [{ label: p.link.includes('github.com') ? 'GitHub' : 'Website', url: p.link, icon: p.link.includes('github.com') ? 'github' : 'globe' }]
        : []
    ).filter(l => l?.url)
    : [];

  const members = p?.team?.members || [];
  const visibleMembers = members.slice(0, 3);
  const extraCount = members.length - visibleMembers.length;
  const isSolo = Boolean(p?.team?.name?.toLowerCase().includes('solo'));

  return (
    <AnimatePresence>
      {p && (
        <motion.div
          className="pm-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
        >
          <motion.div
            className="pm-card"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Close ── */}
            <button type="button" className="pm-close" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>

            {/* ════════ HEADER ════════ */}
            <div className="pm-header">
              <div className="pm-header-main">
                <h2 className="pm-title">{p.main}</h2>
                <p className="pm-summary">{p.sub}</p>
              </div>

              <div className="pm-header-meta">
                {p.period && (
                  <div className="pm-meta-chip">
                    <FaCalendarAlt className="pm-meta-icon" />
                    <span>{p.period}</span>
                  </div>
                )}

                {p.team?.leader && (
                  <div className="pm-meta-chip">
                    <FaStar className="pm-meta-icon" />
                    <span>Team Leader</span>
                  </div>
                )}

                {isSolo ? (
                  <div className="pm-meta-chip">
                    <FaUser className="pm-meta-icon" />
                    <span>{p.team?.name || 'Solo Project'}</span>
                  </div>
                ) : (
                  members.length > 0 && (
                    <div className="pm-team-wrap">
                      <button
                        ref={teamBtnRef}
                        type="button"
                        className="pm-team-btn"
                        onClick={() => setMemberPopoverOpen(v => !v)}
                        aria-expanded={memberPopoverOpen}
                      >
                        <FaUsers className="pm-meta-icon" />
                        <div className="pm-team-avatars">
                          {visibleMembers.map((m, i) =>
                            m.avatar
                              ? <img key={i} src={m.avatar} alt={m.name} className="pm-team-avatar-img" style={{ zIndex: visibleMembers.length - i }} />
                              : <div key={i} className="pm-team-avatar-placeholder" style={{ zIndex: visibleMembers.length - i }}>{(m.name || '?')[0]}</div>
                          )}
                        </div>
                        {extraCount > 0 && <span className="pm-team-extra">+{extraCount}</span>}
                        {p.team?.name && <span className="pm-team-name">{p.team.name}</span>}
                      </button>

                      <AnimatePresence>
                        {memberPopoverOpen && (
                          <MemberPopover
                            members={members}
                            anchorRef={teamBtnRef}
                            onClose={() => setMemberPopoverOpen(false)}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ════════ BODY ════════ */}
            <div className="pm-body">

              {/* ── LEFT (70%) ── */}
              <div className="pm-left">
                {/* Main media viewer */}
                <div className="pm-media-wrap">
                  <MediaViewer src={activeMedia} alt={p.alt} />
                  {mediaList.length > 1 && (
                    <>
                      <button className="pm-nav-btn pm-nav-prev" onClick={goPrev} disabled={activeIndex === 0} aria-label="Previous media">
                        <FaChevronLeft />
                      </button>
                      <button className="pm-nav-btn pm-nav-next" onClick={goNext} disabled={activeIndex === mediaList.length - 1} aria-label="Next media">
                        <FaChevronRight />
                      </button>
                      <div className="pm-media-counter">{activeIndex + 1} / {mediaList.length}</div>
                    </>
                  )}
                </div>

                {/* Thumbnail strip — right under the media */}
                {mediaList.length > 1 && (
                  <div className="pm-thumbs-strip">
                    {mediaList.map((src, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={`pm-thumb${activeMedia === src ? ' active' : ''}`}
                        onClick={() => setActiveMedia(src)}
                        aria-label={`View media ${idx + 1}`}
                      >
                        {isVideo(src)
                          ? <div className="pm-thumb-video-icon"><FaPlay /></div>
                          : <img src={src} alt={`${p.alt} ${idx + 1}`} />
                        }
                      </button>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="pm-description">
                  {/* Concept / Origin Banner */}
                  {(p.details?.concept || p.details?.overview) && (
                    <div className="pm-concept-banner">
                      <div className="pm-concept-badge">
                        <FaLightbulb className="pm-concept-icon" />
                        <span>{p.details.concept ? 'Concept & Origin' : 'System Overview'}</span>
                      </div>
                      <p className="pm-concept-text">
                        {p.details.concept || p.details.overview}
                      </p>
                    </div>
                  )}

                  {/* Problem & Solution Narrative Cards */}
                  {p.details?.problem && (
                    <div className="pm-narrative-grid">
                      <div className="pm-narrative-card pm-card-problem">
                        <div className="pm-narrative-header">
                          <span className="pm-narrative-pill">
                            <FaExclamationCircle className="pm-narrative-icon" /> The Challenge
                          </span>
                        </div>
                        <p className="pm-narrative-body">{p.details.problem}</p>
                      </div>

                      {p.details?.solution && (
                        <div className="pm-narrative-card pm-card-solution">
                          <div className="pm-narrative-header">
                            <span className="pm-narrative-pill">
                              <FaRocket className="pm-narrative-icon" /> The Solution
                            </span>
                          </div>
                          <p className="pm-narrative-body">{p.details.solution}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Features / Architecture Grid */}
                  {p.details?.features?.length > 0 && (
                    <div className="pm-features-wrap">
                      <h3 className="pm-section-label">
                        <FaLayerGroup style={{ marginRight: '6px' }} />
                        Core Pillars &amp; Architecture
                      </h3>
                      <div className="pm-features-grid">
                        {p.details.features.map((feat, idx) => (
                          <div key={idx} className="pm-feature-card">
                            <div className="pm-feature-top">
                              <span className="pm-feature-icon-badge">
                                {renderFeatureIcon(feat.icon)}
                              </span>
                              <h4 className="pm-feature-title">{feat.title}</h4>
                            </div>
                            <p className="pm-feature-desc">{feat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fallback About / Description */}
                  {p.details?.description && !p.details?.problem && (
                    <div className="pm-narrative-card">
                      <div className="pm-narrative-header">
                        <span className="pm-narrative-pill">
                          <FaInfoCircle className="pm-narrative-icon" /> Overview
                        </span>
                      </div>
                      <p className="pm-narrative-body">{p.details.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── RIGHT (30%) ── */}
              <div className="pm-right">

                {/* Box 1 – Links */}
                {links.length > 0 && (
                  <div className="pm-box">
                    <span className="pm-box-label">Project Links</span>
                    <div className="pm-links-grid">
                      {links.map((l, i) => (
                        <a
                          key={i}
                          href={l.url}
                          className="pm-link-tile"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={l.label || 'Open link'}
                        >
                          <span className="pm-link-tile-icon">{renderLinkIcon(l)}</span>
                          {l.label && <span className="pm-link-tile-label">{l.label}</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Box 2 – Skills / Tech */}
                {p.tags?.filter(Boolean).length > 0 && (
                  <div className="pm-box">
                    <span className="pm-box-label">Skills &amp; Tech</span>
                    <div className="pm-tags">
                      {p.tags.filter(Boolean).map((tag, i) => (
                        <span key={i} className="pm-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Box 3 – Highlights */}
                {p.highlights?.length > 0 && (
                  <div className="pm-box pm-box-highlights">
                    <span className="pm-box-label">Highlights</span>
                    <ul className="pm-highlights">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="pm-highlight-item">
                          <span className="pm-highlight-icon">{highlightIcon(h.type || h.text || h)}</span>
                          <span className="pm-highlight-text">{h.text || h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
