import React from 'react'
import { motion } from "framer-motion";
import './Project.css'

const projects = [
  {
    title: "AI Project",
    items: [
      {
        link: "https://github.com/Aly-EL-Badry/Pothole-Detection",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/pothole_detection_1_nqaolw.webp",
        alt: "pothole Detection",
        main: "Pothole-Detection",
        sub: "A Object Detection Model For Potholes in the Streets",
        tags: ["YOLO", "Computer Vision", "Deep Learning"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/NY-Taxi-DashBoard",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/ny-taxi_mfu1iz.webp",
        alt: "NY Taxi",
        main: "New york Taxi Dashboard",
        sub: "Dashboard That Show analysis for Taxi Target in NewYork",
        tags: ["Data Visualization", "Dash", "Plotly"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/Machine-learning-Algorithm",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155107/Machine_uewezj.webp",
        alt: "Machine Learning Algo.",
        main: "Machine Learning Algo.",
        sub: "A Training Machine Learning Algos For Begineers",
        tags: ["Machine Learning", "Python", "Data Science"]
      },
    ],
    kaggle: true,
  },
  {
    title: "Web Development",
    items: [
      {
        link: "https://alkamalcenter.com/",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750289036/Screenshot_2025-06-19_022311_qwoivs.png",
        alt: "Al-Kamal Center",
        main: "Al-Kamal Center",
        sub: "E-Commerce Website for Al-Kamal Center",
        tags: ["React", "DataBase", "TailWind"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/RecipeHub",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1748179221/screenshot_euiznx.png",
        alt: "RecipeHub",
        main: "RecipeHub",
        sub: "A Full-Stack Website Supplied With Ai Chat Bot",
        tags: ["Django", "Cloudinary", "MySql"],
      },
      {
        link: "https://github.com/Aly-EL-Badry/Fashion-Corner",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/fasion_twfrhh.webp",
        alt: "Fasion Corner",
        main: "Fasion Corner",
        sub: "E-commerce Clothes Shop",
        tags: ["React", "Bootstrap", "CSS"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/My-House/",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155109/house_e6vgxj.webp",
        alt: "Home",
        main: "My House",
        sub: "E-Commerce Website for Furniture",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/E-Learn-Website",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/e-learn_zxtz5m.webp",
        alt: "e-learn",
        main: "E-Learn Template",
        sub: "E-Learning Website",
        tags: ["HTML", "CSS"]
      },
    ],
  },
  {
    title: "Different Fields Project",
    items: [
      {
        link: "https://github.com/Aly-EL-Badry/Vole-Machine-simulator",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/vole_iyqgwl.webp",
        alt: "vole machine",
        main: "Vole Machine Simulator",
        sub: "A simulation for vole Machine in the computer",
        tags: ["C++", "QT", "Simulation"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/Pics-Modifier",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/photoshop_n3z9zs.webp",
        alt: "PiscArt.",
        main: "piscArt",
        sub: "A PhotoShop Program for 18 Different Filters",
        tags: ["C++", "Image Processing"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/Course-Management-System",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750290541/WhatsApp_Image_2025-05-18_at_19.08.55_d6640cb4_mxb704.jpg",
        alt: "Course Management System",
        main: "Course Management System",
        sub: "A Course Managment System For College",
        tags: ["C#", "MySql"]
      },
      {
        link: "https://github.com/Aly-EL-Badry/Tharwa-Project",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750290010/Screenshot_2025-06-19_023952_xtzyh6.png",
        alt: "Tharwa Project",
        main: "Tharwa Documentation",
        sub: "It is a documentation for A personal investment Project",
        tags: ["Java", "SRS", "SDS"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/X-Game-O",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/x_ongy3b.webp",
        alt: "X-Games-o",
        main: "X-Games-o",
        sub: "Some X-O Games For OOP Training",
        tags: ["C++", "Game Development"]
      },
    ],
  },
];

const Project = () => {
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
              <motion.a 
                href={item.link} 
                className="ca" 
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}  
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img-container">
                  <img src={item.img} loading="lazy" alt={item.alt} />
                  <div className="img-overlay"></div>
                </div>
                <div className="content">
                  <p className="main">{item.main}</p>
                  <p className="sub">{item.sub}</p>
                  <div className="tags">
                    {item.tags && item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Kaggle Section Under Data Science Section */}
          {project.kaggle && (
            <motion.div 
              className="kaggle-section"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}  
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p>If you want to see more trained models and notebooks, visit my</p>
              <a href="https://www.kaggle.com/alyelbadry" className="kaggle-button" target="_blank" rel="noopener noreferrer">
                Kaggle Account
              </a>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Project;