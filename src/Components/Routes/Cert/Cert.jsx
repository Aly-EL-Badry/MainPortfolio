import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import { HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './Cert.css';
import {
  importantCertificates,
  webDevelopmentCertificates,
  aiDevelopmentCertificates,
  otherCertificates,
} from '../../../data/certData';

const PAGE_SIZE = 3;

const MotionNavLink = motion(NavLink);

// ── Static card — no framer-motion overhead ──────────────────────────────────
const StaticCard = ({ img, alt, main, sub, isImportant = false }) => (
  <NavLink
    exact
    to={`/certificates/${alt}`}
    className={`certificate-card${isImportant ? ' important-card' : ''}`}
  >
    <div className="card-content">
      <div className="image-wrapper">
        <img src={img} alt={alt} />
        <div className="image-overlay" />
        {isImportant && <div className="important-badge"><FaCrown /></div>}
      </div>
      <div className="text-content">
        <h3 className="cert-title">{main}</h3>
        <p className="cert-subtitle">{sub}</p>
      </div>
      <div className="see-more-section">
        <span className="see-more-text">See More Details</span>
        <HiArrowRight className="see-more-arrow" />
      </div>
    </div>
  </NavLink>
);

// ── Animated card — only used for newly revealed items ───────────────────────
const AnimatedCard = ({ img, alt, main, sub, delay = 0 }) => (
  <MotionNavLink
    exact
    to={`/certificates/${alt}`}
    className="certificate-card"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: "easeOut", delay }}
  >
    <div className="card-content">
      <div className="image-wrapper">
        <img src={img} alt={alt} />
        <div className="image-overlay" />
      </div>
      <div className="text-content">
        <h3 className="cert-title">{main}</h3>
        <p className="cert-subtitle">{sub}</p>
      </div>
      <div className="see-more-section">
        <span className="see-more-text">See More Details</span>
        <HiArrowRight className="see-more-arrow" />
      </div>
    </div>
  </MotionNavLink>
);

// ── Paginated section ─────────────────────────────────────────────────────────
const CertSection = ({ title, certs, gridClass }) => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const prevVisible = useRef(PAGE_SIZE);

  const allShown = visible >= certs.length;
  const hasMore  = !allShown;

  const handleShowMore = () => {
    prevVisible.current = visible;
    setVisible(v => Math.min(v + PAGE_SIZE, certs.length));
  };

  const handleShowLess = () => {
    prevVisible.current = 0;
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <div className="title">{title}</div>
      <hr />

      <div className={`certificates-grid ${gridClass}`}>
        {certs.slice(0, visible).map(({ img, alt, main, sub }, i) =>
          i < prevVisible.current ? (
            <StaticCard key={alt} img={img} alt={alt} main={main} sub={sub} />
          ) : (
            <AnimatedCard
              key={alt}
              img={img}
              alt={alt}
              main={main}
              sub={sub}
              delay={(i - prevVisible.current) * 0.08}
            />
          )
        )}
      </div>

      <div className="show-more-container">
        {hasMore && (
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More <HiChevronDown className="show-more-icon" />
          </button>
        )}
        {allShown && (
          <button className="show-more-btn show-less-btn" onClick={handleShowLess}>
            Show Less <HiChevronUp className="show-more-icon" />
          </button>
        )}
      </div>
    </>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Cert = () => (
  <div className="certificates-container">

    {/* Key Certificates — always fully visible, no pagination */}
    <div className="title">Key Certificates</div>
    <hr />
    <div className="certificates-grid important-grid">
      {importantCertificates.map(({ img, alt, main, sub }) => (
        <StaticCard key={alt} img={img} alt={alt} main={main} sub={sub} isImportant />
      ))}
    </div>

    <CertSection title="Web Development" certs={webDevelopmentCertificates} gridClass="web-dev-grid" />
    <CertSection title="AI Development"  certs={aiDevelopmentCertificates}  gridClass="ai-dev-grid" />
    <CertSection title="Others"          certs={otherCertificates}           gridClass="others-grid" />

  </div>
);

export default Cert;