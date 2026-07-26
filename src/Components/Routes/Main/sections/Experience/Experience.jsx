import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from './ExperienceData';
import './Experience.css';

const Experience = () => {
  return (
    <>
      <div className="title">Experience</div>
      <hr />
      <div className="experience-container">
        {experienceData.map((exp) => (
          <motion.div 
            key={exp.id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="experience-card"
          >
            <div className="experience-content">
              <div className="experience-main">
                <div className="experience-header">
                  <div className="company-info">
                    <h2>{exp.company}</h2>
                    <div className="job-info">
                      <p className="job-title">{exp.title}</p>
                      <p className="duration">{exp.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="experience-details">
                  <h3>Key Responsibilities & Achievements</h3>
                  <ul>
                    {exp.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="company-logo">
                <motion.img 
                  src={exp.logo} 
                  alt={exp.logoAlt} 
                  initial={{ scale: 0.8, opacity: 0 }} 
                  whileInView={{ scale: 1, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
