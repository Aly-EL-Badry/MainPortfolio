import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaBrain, FaTools, FaDatabase, FaProjectDiagram, FaChartLine, FaReact, FaCode, FaServer, FaGitAlt, FaLightbulb, FaLanguage, FaUsers, FaCodeBranch, FaCogs } from "react-icons/fa";
import './Skills.css';

const videoBg ="https://res.cloudinary.com/dqktuc5ej/video/upload/v1745161991/vi_bfhz8l.mp4"; 

const Skills = () => {
  return (
    <>
      {/* 8th Part Skills */}
      <div className='title'>Skills and Services</div>
      <hr />
      
      <div className="timeline">
        <video autoPlay loop muted  className="video-bg">
          <source src={videoBg} type="video/mp4" />
        </video>
        <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="container left">
          <h3>AI Development</h3>
        </motion.div>
        <motion.div initial={{ x: 100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        className="container right">
          <div className="details">
          <ul>
            <li><FaPython className="skill-icon" /> Proficient in Python (Pandas, NumPy, Scikit-learn, Matplotlib).</li>
            <li><FaBrain className="skill-icon" /> Experience with machine learning algorithms (Linear Regression, Random Forest, SVM, KNN).</li>
            <li><FaTools className="skill-icon" /> Experience with TensorFlow and PyTorch for deep learning.</li>
            <li><FaDatabase className="skill-icon" /> Experience with data preprocessing and feature engineering.</li>
            <li><FaProjectDiagram className="skill-icon" /> Model evaluation and hyperparameter tuning.</li>
            <li><FaChartLine className="skill-icon" /> Experience with data visualization and storytelling.</li>
          </ul>
          </div>
        </motion.div>

        {/* Web Development Field */}
        <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="container left">
          <h3>Web Development</h3>
        </motion.div>
        <motion.div initial={{ x: 100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        className="container right">
          <div className="details">
            <ul>
              <li><FaReact className="skill-icon" /> Proficient in React.js and modern front-end development.</li>
              <li><FaCode className="skill-icon" /> Skilled in building responsive UIs with Tailwind CSS and Bootstrap.</li>
              <li><FaServer className="skill-icon" /> Backend development using Django.</li>
              <li><FaGitAlt className="skill-icon" /> Version control using Git and GitHub.</li>
            </ul>
          </div>
        </motion.div>

        {/* Other Skills Field */}
        <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="container left">
          <h3>Other Skills</h3>
        </motion.div>
        <motion.div initial={{ x: 100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        className="container right">
          <div className="details">
            <ul>
              <li><FaLightbulb className="skill-icon" /> Strong problem-solving and critical thinking abilities.</li>
              <li><FaLanguage className="skill-icon" /> Fluent in English with excellent communication skills.</li>
              <li><FaUsers className="skill-icon" /> Experienced in agile project management methodologies.</li>
              <li><FaCodeBranch className="skill-icon" /> Experience with C++, Java Development and worked with QT Framework.</li>
              <li><FaCogs className="skill-icon" /> Enthusiastic team player with a growth mindset.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
