import React from 'react';
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaRocket, FaTrophy, FaUsers, FaGraduationCap } from "react-icons/fa";
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
                  <FaUsers />
                </div>
                <div className="highlight-content">
                  <h3>Star Union — Vice Head AI Community</h3>
                  <p>Leading the project track in Star Union’s AI community; steering technical direction and team delivery.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaGraduationCap />
                </div>
                <div className="highlight-content">
                  <h3>AI Student — 3rd Year</h3>
                  <p>AI department, 3rd year. GPA 3.22; ranked 40th in my department.</p>
                </div>
              </div>
            </div>
            <div className="skills-showcase">
              <div className="skills-col">
                <div className="skills-col-header">
                  <FaCode className="skills-col-icon" />
                  <h4>Full-Stack Developer</h4>
                </div>
                <div className="skills-pills">
                  <span className="skill-pill">React</span>
                  <span className="skill-pill">Next.js</span>
                  <span className="skill-pill">Django</span>
                  <span className="skill-pill">FastAPI</span>
                  <span className="skill-pill">Flask</span>
                  <span className="skill-pill">Tailwind</span>
                  <span className="skill-pill">Git</span>
                  <span className="skill-pill">GitHub</span>
                </div>
              </div>
              <div className="skills-col">
                <div className="skills-col-header">
                  <FaDatabase className="skills-col-icon" />
                  <h4>Data Science</h4>
                </div>
                <div className="skills-pills">
                  <span className="skill-pill">Machine Learning</span>
                  <span className="skill-pill">Deep Learning</span>
                  <span className="skill-pill">AI Engineering</span>
                  <span className="skill-pill">Python</span>
                  <span className="skill-pill">Data Analysis</span>
                  <span className="skill-pill">Statistics</span>
                </div>
              </div>
              <div className="skills-col skills-col-ai-full">
                <div className="skills-col-header">
                  <FaBrain className="skills-col-icon" />
                  <h4>AI Engineer</h4>
                </div>
                <div className="skills-pills">
                  <span className="skill-pill">NLP</span>
                  <span className="skill-pill">LLMs</span>
                  <span className="skill-pill">YOLO</span>
                  <span className="skill-pill">MLOps</span>
                  <span className="skill-pill">PyTorch</span>
                  <span className="skill-pill">TensorFlow</span>
                  <span className="skill-pill">Computer Vision</span>
                  <span className="skill-pill">Prompt Engineering</span>
                  <span className="skill-pill">LLM Fine-tuning</span>
                  <span className="skill-pill">Cloud Deployment</span>
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
                      <span className="stat-number">1+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">20+</span>
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
