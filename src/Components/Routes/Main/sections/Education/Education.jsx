import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from './EducationData';
import './Education.css';

const Education = () => {
  return (
    <>
      <div className="title">Education</div>
      <hr />
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="education-section">
        <div className='education-content'>
          <img src={educationData.image} alt="Cairo university" className="education-image" />
          <div className="education-details">
            <div className="education-header">
              <h2>{educationData.title}</h2>
              <p className="education-period">{educationData.period}</p>
            </div>
            <div className="education-body">
              <div className="education-description">
                {educationData.description}
              </div>
              <hr className="education-divider" />
              <div className="education-highlights">
                <h3 className="highlights-title">{educationData.highlightsTitle}</h3>
                <ul className="highlights-list">
                  {educationData.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div> 
        </div>
      </motion.div>
    </>
  );
};

export default Education;
