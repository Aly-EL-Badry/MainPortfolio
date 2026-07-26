import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from "react-icons/fa";
import { activities, galleryImages } from './StudentActivitiesData';
import './StudentActivities.css';

const StudentActivities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="title">Student Activities</div>
      <hr />
      <div className="activity">
        {activities.map((activity) => (
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}  
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="bar" key={activity.id}>
            <img src={activity.image} alt={activity.title} className="activity-img" />
            <div className="activity-head">{activity.title}</div>
            <div className="member-title">{activity.memberTitle}</div>
            <div className="activity-content">{activity.description}</div>
          </motion.div>
        ))}
      </div>

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
              width="100%"
              height="100%"
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
            className="activity-content"
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
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
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
