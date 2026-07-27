import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from "react-icons/fa";
import { groupedActivities, galleryImages } from './StudentActivitiesData';
import './StudentActivities.css';

const StudentActivities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="title">Student Activities</div>
      <hr />
      
      {/* Experience-Style Grouped Timeline */}
      <div className="experience-container">
        {groupedActivities.map((group, groupIndex) => (
          <motion.div 
            key={groupIndex}
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
                    <h2>{group.company}</h2>
                  </div>
                </div>
                
                {/* Timeline for roles under this company */}
                <div className="activity-roles">
                  {group.roles.map((role) => (
                    <div key={role.id} className="activity-role">
                      <div className="activity-role-node"></div>
                      
                      <div className="job-info">
                        <p className="job-title">{role.title}</p>
                        <p className="duration">{role.duration}</p>
                      </div>
                      
                      <div className="experience-details">
                        {role.responsibilities && role.responsibilities.length > 0 && (
                          <>
                            <h3>Key Responsibilities & Achievements</h3>
                            <ul>
                              {role.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="company-logo">
                <img src={group.logo} alt={group.logoAlt} />
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>

      {/* Workshop Video & Gallery Section */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="activity-media-section"
      >
        <div className="activity-media-content">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="activity-media-video"
          >
            <iframe
              src="https://www.youtube.com/embed/WrECRxbWMlg"
              title="Unsupervised Learning Workshop - Aly El-Badry"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="activity-media-iframe"
            ></iframe>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem'}}
          >
            {/* Header */}
            <div className="activity-media-header">
              AI Workshop
            </div>

            {/* Description */}
            <div className="activity-media-description">
              <span className="activity-media-description-title">Workshop Highlights:</span>
              <ul className="activity-media-description-list">
                <li><b>Unsupervised Learning:</b> Clustering, dimensionality reduction, association rules</li>
                <li><b>Supervised Classification:</b> Logistic Regression, KNN, SVM, Decision Trees</li>
                <li><b>Ensemble Methods:</b> Random Forest and XGBoost implementation</li>
                <li><b>Real-world Applications:</b> Industry projects and case studies</li>
              </ul>
            </div>

            {/* Best Students Line */}
            <div className="activity-media-best-students">
              <span className="activity-media-best-students-title">Best Students:</span>
              <div className="activity-media-best-students-list">
                It is an honor to be mentor for{' '}
                <a href="https://www.linkedin.com/in/abdelhalim-ahmed-720827248/" target="_blank" rel="noopener noreferrer" className="activity-media-student-link">Abdelhalim Ahmed</a>,{' '}
                <a href="https://www.linkedin.com/in/nada-shams-eldin-095515320/" target="_blank" rel="noopener noreferrer" className="activity-media-student-link">Nada Shams ElDin</a>,{' '}
                <a href="https://www.linkedin.com/in/malak-hassan-b2b984271/" target="_blank" rel="noopener noreferrer" className="activity-media-student-link">Malak Hassan</a>,{' '}
                <a href="https://www.linkedin.com/in/marwan-allam-634b1b338/" target="_blank" rel="noopener noreferrer" className="activity-media-student-link">Marwan Allam</a>, and{' '}
                <a href="https://www.linkedin.com/in/mohannad-ashraf-888b24328/" target="_blank" rel="noopener noreferrer" className="activity-media-student-link">Mohanned Ashraf</a>.
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="activity-media-gallery">
              {galleryImages.map((url, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(url)}
                  className="activity-media-gallery-item"
                >
                  <img 
                    src={url} 
                    alt={`Workshop ${idx+1}`} 
                    className="activity-media-gallery-img"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="modal-image-container"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="modal-close-btn"
            >
              <FaTimes />
            </button>
            <div className="modal-image-wrapper">
              <img
                src={selectedImage}
                alt="Workshop"
                className="modal-image"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default StudentActivities;
