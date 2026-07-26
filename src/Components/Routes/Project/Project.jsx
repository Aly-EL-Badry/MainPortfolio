import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './Project.css'
import { projects } from '../../../data/projectsData';
import ProjectModal from './ui/ProjectModal';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <motion.div className="pro">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className='title first'
      >
        Mega project
      </motion.div>
      <motion.hr  
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div 
        className="satalitor-section"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="satalitor-container"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}  
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="satalitor-content">
            <motion.div 
              className="satalitor-video"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}  
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/0y7AV4b-XJA" 
                  title="Satalitor Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-overlay"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="satalitor-text"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}  
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 className="satalitor-title">Satalitor</h2>
              <p className="satalitor-subtitle">AI-Driven Agricultural Insight Platform</p>
              
              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Satellite Imagery Analysis</h4>
                    <p>Deep learning models analyze Earth's surface using advanced satellite data</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Soil & Land Detection</h4>
                    <p>Detects soil type, segments land, and predicts NPK nutrients</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Crop Recommendations</h4>
                    <p>AI suggests optimal crops based on soil analysis and environmental data</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Comprehensive Reports</h4>
                    <p>Generates detailed agricultural reports with actionable insights</p>
                  </div>
                </div>
              </div>
                
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>React js</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>Flask</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>AI | DL</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>Data Analysic</span>
                </div>
              </div>
              
              <div className="satalitor-buttons">
                <motion.a 
                  href="https://satellitor.netlify.app/"
                  className="satalitor-button primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Website</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/watch?v=0y7AV4b-XJA"
                  className="satalitor-button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Watch Full Demo</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Existing Project Sections */}
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          className="project-section"
        >
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className={`title ${index === 0 ? "first" : ""}`}
          >
            {project.title}
          </motion.div>
          <motion.hr  
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div className="cards">
            {project.items.map((item, i) => (
              <motion.div
                className="ca project-card"
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(item)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(item)}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="img-container">
                  <img src={item.img} loading="lazy" alt={item.alt} />
                  <div className="img-overlay"></div>
                </div>
                <div className="content">
                  <p className="main">{item.main}</p>
                  <p className="sub">{item.sub}</p>
                  <div className="tags">
                    {item.tags && item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      <ProjectModal selectedProject={selectedProject} closeModal={closeModal} />
    </motion.div>
  );
};

export default Project;