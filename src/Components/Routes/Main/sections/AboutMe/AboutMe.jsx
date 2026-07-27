import React from 'react';
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaRocket, FaTrophy, FaUsers, FaGraduationCap, FaStar, FaRobot } from "react-icons/fa";
import './AboutMe.css';

const Profile = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1748174620/professional_zpcarn.jpg";

const AboutMe = () => {
  return (
    <>
      <div className='title' id="about">About Me</div>
      <hr />
      <div className='about'>
        <div className='about-content'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="about-left">
            <div className="tech-stack">
              <div className="tech-item">
                <FaBrain className="tech-icon" />
                <span>AI Engineer</span>
              </div>
              <div className="tech-item">
                <FaCode className="tech-icon" />
                <span>Full-Stack Dev</span>
              </div>
              <div className="tech-item">
                <FaDatabase className="tech-icon" />
                <span>Data Scientist</span>
              </div>
            </div>
            <div className="highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaRocket />
                </div>
                <div className="highlight-content">
                  <h3>DEPI & Satellitor</h3>
                  <p>Top place with Satellitor at DEPI; project recommended as a startup. Driving AI and product innovation in real-world settings.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaTrophy />
                </div>
                <div className="highlight-content">
                  <h3>Proven Project Results</h3>
                  <p>Third place in Creativa Entrepreneur Training (Satellitor); successful delivery on Upwork and Khamsat.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaStar />
                </div>
                <div className="highlight-content">
                  <h3>LILT AI Excellence</h3>
                  <p>Received exceptional reviews for engineering complex Arabic programming tasks and testing the cultural reasoning of Claude Opus 4.6.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaRobot />
                </div>
                <div className="highlight-content">
                  <h3>Cortex AI Solutions</h3>
                  <p>Developed and deployed an intelligent customer service chatbot for Cortex, automating support workflows and enhancing user engagement.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaUsers />
                </div>
                <div className="highlight-content">
                  <h3>Star Union — Vice Head AI</h3>
                  <p>Leading the project track in Star Union’s AI community; steering technical direction and team delivery.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaGraduationCap />
                </div>
                <div className="highlight-content">
                  <h3>AI Student — 3rd Year</h3>
                  <p>AI department, 3rd year. Consistently maintaining a strong academic record with a 3.29 GPA and ranked 29th in my department.</p>
                </div>
              </div>
            </div>
            <div className="skills-showcase" style={{ display: 'block', marginTop: '0' }}>
              <div className="skills-col skills-col-ai-full">
                <div className="skills-col-header">
                  <FaBrain className="skills-col-icon" />
                  <h4>Core Expertise</h4>
                </div>
                <div className="skills-pills">
                  <span className="skill-pill">AI Engineering</span>
                  <span className="skill-pill">LLMs & Prompt Engineering</span>
                  <span className="skill-pill">Computer Vision (YOLO)</span>
                  <span className="skill-pill">Python (PyTorch, TensorFlow)</span>
                  <span className="skill-pill">Full-Stack (Next.js, FastAPI, Django)</span>
                  <span className="skill-pill">Data Science</span>
                  <span className="skill-pill">Docker & Cloud Deployment</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="about-divider"></div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="about-right">
            <div className="profile-image-container">
              <img src={Profile} alt="Aly El-Badry - AI Engineer & Full-Stack Developer" className='My-Image' />
              <div className="profile-overlay">
                <div className="profile-info">
                  <h2>Aly El-Badry</h2>
                  <p>AI Engineer & Full-Stack Developer</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">2+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">30+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
