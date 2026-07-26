import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaRocket } from "react-icons/fa";
import { achievementsData } from './AchievementsData';
import './Achievements.css';

const Achievements = () => {
  return (
    <>
      <div className="title">Achievements & Prizes</div>
      <hr />
      <div className="achievements-section">
        <div className="achievements-background">
          <div className="achievements-particles"></div>
          <div className="achievements-glow"></div>
        </div>
        {achievementsData.map((ach, index) => (
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="achievement-row" 
            key={ach.id}
          >
            <div className="achievement-badge">
              <span className="badge-icon">{ach.badge}</span>
              <span className="badge-category">{ach.category}</span>
            </div>
            <div className="achievement-image-container">
              <div className="achievement-image-glow"></div>
              <img src={ach.image} alt={ach.title} className="achievement-img" />
              
            </div>
            <div className="achievement-content">
              <div className="achievement-header">
                <h3 className="achievement-title">{ach.title}</h3>
                <div className="achievement-meta">
                  <p className="achievement-event">{ach.event}</p>
                  <span className="achievement-date">({ach.date})</span>
                </div>
              </div>
              <div className="achievement-desc">{ach.description}</div>
              <div className="achievement-stats">
                <div className="stat-item">
                  <FaTrophy className="stat-icon" />
                  <span>Third Place</span>
                </div>
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <span>Team Project</span>
                </div>
                <div className="stat-item">
                  <FaRocket className="stat-icon" />
                  <span>Innovation</span>
                </div>
              </div>
            </div>
            <div className="achievement-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Achievements;
