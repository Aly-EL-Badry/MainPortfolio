import './Home.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleDown, FaArrowRight, FaPython, FaReact, FaCode, FaBrain, FaDatabase, FaChartLine, FaTools, FaProjectDiagram, FaServer, FaGitAlt, FaLightbulb, FaLanguage, FaUsers, FaCogs, FaCodeBranch, FaMobile, FaTrophy, FaChalkboardTeacher, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";


const videoBg ="https://res.cloudinary.com/dqktuc5ej/video/upload/v1745161991/vi_bfhz8l.mp4"; 
const Profile = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1748174620/professional_zpcarn.jpg";
const cairo = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159950/Cairo_university_mghkji.webp";
const depi = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159825/depi_logo_rjfmhm.webp";
const star = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159824/star_henlap.webp";
const event = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159833/event_hd39ee.webp";
const h = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159824/huawei_thxmng.webp";
const virtufirm = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159828/virtufirm_o9hoog.webp"
const outlier = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1749665520/CTA-8_itxtjp.png"

const Home = () =>{
  const handleScroll = () => {
    window.scrollBy({ top: 690, behavior: "smooth" }); 
  };
  const activities = [
    {
      id: 1,
      image: star,
      title: "Star Union",
      memberTitle: "AI Member",
      description: "Contributed to AI-Workshop, developed machine learning models, and collaborated on real-world applications. and mentoring within the student activity",
    },
    {
      id: 2,
      image: event,
      title: "Graduation Party",
      memberTitle: "Event Organizer",
      description: "Coordinated and managed the graduation party, overseeing planning, logistics, and execution to ensure a seamless and memorable event.",
    },
  ];


  return (
    <>
      <div className="mainPage">
        <video autoPlay loop muted className="video-bg">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="content">
          <div className="text">
            <p className="welcome">Exploring My Digital Universe</p>
            <p className='Name'>Aly El-Badry</p>
            <div className="role-container">
              <span className="role">AI Engineer</span>
              <span className="role-separator">|</span>
              <span className="role">Full-Stack Developer</span>
              <span className="role-separator">|</span>
              <span className="role">Data Scientist</span>
            </div>
            <p className="desc">
              Transforming ideas into intelligent solutions through the power of
              <span className="highlight"> AI</span> and
              <span className="highlight"> Innovation</span>
            </p>
            <div className="cta-buttons">
              <a className="btn" href="#contact">
                <span>Contact me</span>
                <FaArrowRight className="btn-icon" />
              </a>
              <a href="https://drive.google.com/file/d/1j1OgHYgD21k0HwfD-f5C0zm7-Iw0eXry/view?usp=sharing" className="btn">
                <span>Download CV</span>
                <FaArrowRight className="btn-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="arrow">
          <div className="down-arrow">
            <button className="arr" onClick={handleScroll}>
              <FaAngleDoubleDown className="aa" />
            </button>
          </div>
        </div>
      </div>
      
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
                  <h3>AI Innovation</h3>
                  <p>Leading AI initiatives at Star Union & DEPI, specializing in computer vision and NLP</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaTrophy />
                </div>
                <div className="highlight-content">
                  <h3>Project Expert</h3>
                  <p>Recognized Dataset Expert on Kaggle and work as freelancer on Upwork and Khamsat</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaProjectDiagram />
                </div>
                <div className="highlight-content">
                  <h3>VirtuFirm Founder</h3>
                  <p>Leading a community of tech enthusiasts and driving the community's vision forward.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaUsers />
                </div>
                <div className="highlight-content">
                  <h3>Event Organizer</h3>
                  <p>Organizing AI workshops and university tech events</p>
                </div>
              </div>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>AI & ML</h4>
                <div className="skill-tags">
                  <span>YOLO</span>
                  <span>PyTorch</span>
                  <span>TensorFlow</span>
                  <span>NLP</span>
                  <span>Computer Vision</span>
                  <span>Machine Learning</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tech</h4>
                <div className="skill-tags">
                  <span>React</span>
                  <span>Django</span>
                  <span>Tailwind</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>C++</span>
                  <span>Java</span>
                  <span>Qt</span>
                  <span>C#</span>
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


      <div className="title">Experience</div>
      <hr />
      <div className="experience-container">
        <motion.div 
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
                  <h2>VirtuFirm</h2>
                  <div className="job-info">
                    <p className="job-title">Founder & Tech Visionary</p>
                    <p className="duration">January 2025 - Present</p>
                  </div>
                </div>
              </div>
              <div className="experience-details">
                <h3>Key Responsibilities & Achievements</h3>
                <ul>
                  <li>Founded and lead a thriving tech community focused on innovation and knowledge sharing</li>
                  <li>Organize and conduct AI workshops and tech events for community members</li>
                  <li>Drive the community's vision and growth through strategic initiatives</li>
                  <li>Mentor aspiring developers and AI enthusiasts in their tech journey</li>
                </ul>
              </div>
            </div>
            <div className="company-logo">
              <motion.img 
                src={virtufirm} 
                alt="VirtuFirm Logo" 
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
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
                  <h2>Digital Egypt Pioneers Initiative-DEPI</h2>
                  <div className="job-info">
                    <p className="job-title">Data Scientist - Internship</p>
                    <p className="duration">October 2024 - June 2025</p>
                  </div>
                </div>
              </div>
              <div className="experience-details">
                <h3>Key Responsibilities & Achievements</h3>
                <ul>
                  <li>Developed and deployed ML models for real-world applications</li>
                  <li>Implemented data preprocessing and feature engineering techniques</li>
                  <li>Created Satellitor, a top-ranked computer vision project in the initiative</li>
                  <li>Collaborated with professionals on data-driven solutions</li>
                </ul>
              </div>
            </div>
            <div className="company-logo">
              <motion.img 
                src={depi} 
                alt="DEPI Logo" 
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
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
                  <h2>Huawei ICT Academy</h2>
                  <div className="job-info">
                    <p className="job-title">Data Scientist - Internship</p>
                    <p className="duration">July 2024 - August 2024</p>
                  </div>
                </div>
              </div>
              <div className="experience-details">
                <h3>Key Responsibilities & Achievements</h3>
                <ul>
                  <li>Developed ML models and implemented data preprocessing techniques</li>
                  <li>Analyzed large datasets to build predictive analytics solutions</li>
                  <li>Enhanced expertise in Python and TensorFlow frameworks</li>
                  <li>Collaborated on complex data-driven challenges</li>
                </ul>
              </div>
            </div>
            <div className="company-logo">
              <motion.img 
                src={h} 
                alt="Huawei Logo" 
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
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
                  <h2>Outlier</h2>
                  <div className="job-info">
                    <p className="job-title">AI Trainee - Part Time</p>
                    <p className="duration">October 2024 - Present</p>
                  </div>
                </div>
              </div>
              <div className="experience-details">
                <h3>Key Responsibilities & Achievements</h3>
                <ul>
                  <li>Working on advanced AI and ML model development</li>
                  <li>Implementing cutting-edge AI technologies</li>
                  <li>Collaborating with AI professionals on real-world applications</li>
                  <li>Learning and optimizing AI methodologies</li>
                </ul>
              </div>
            </div>
            <div className="company-logo">
              <motion.img 
                src={outlier} 
                alt="Outlier Logo" 
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="title">Education</div>
      <hr />
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="education-section">
        <div className='education-content'>
          <img src={cairo} alt="Cairo university" className="education-image" />
          <div className="education-details">
            <div className="education-header">
              <h2>Cairo University, Computer Science & Artificial Intelligence</h2>
              <p className="education-period">October 2023 - Present</p>
            </div>
            <div className="education-body">
              <div className="education-description">
                Kickstart your journey in programming with a strong foundation in essential concepts. 
                This program emphasizes problem-solving, time management, and teamwork, providing an 
                optimal environment for beginners to excel in the field of programming.
              </div>
              <hr className="education-divider" />
              <div className="education-highlights">
                <h3 className="highlights-title">Key Takeaways:</h3>
                <ul className="highlights-list">
                  <li>Develop teamwork and project management skills</li>
                  <li>Gain proficiency in programming languages such as C++, Java, and Python</li>
                  <li>Master Object-Oriented Programming (OOP), data structures, and algorithms</li>
                  <li>Explore web development and database management</li>
                  <li>Build a solid foundation in your preferred specialization</li>
                </ul>
              </div>
            </div>
          </div> 
        </div>
      </motion.div>

      <div className="title"> VirtuFirm</div>
      <hr />
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="virtufirm">
        <div className="virtufirm-content">
          <div className="virtufirm-header">
            <img src={virtufirm} alt="VirtuFirm Logo" className="virtufirm-logo" />
            <div className="virtufirm-text">
              <h2>Founder & Tech Visionary</h2>
              <p>
                As the founder of VirtuFirm, I've built a thriving tech community from the ground up, 
                fostering innovation and knowledge sharing. Our mission is to bridge the gap between 
                academia and industry through cutting-edge projects, workshops, and networking events.
              </p>
            </div>
          </div>

          <div className="virtufirm-focus">
            <div className="focus-card">
              <FaBrain className="virtufirm-icon" />
              <h3>Leadership</h3>
              <p>Leading a team of passionate tech enthusiasts and driving the community's vision forward.</p>
            </div>
            <div className="focus-card">
              <FaCode className="virtufirm-icon" />
              <h3>Technical Excellence</h3>
              <p>Setting high standards in software development and AI implementation across projects.</p>
            </div>
            <div className="focus-card">
              <FaUsers className="virtufirm-icon" />
              <h3>Community Growth</h3>
              <p>Expanding our network and creating opportunities for members to excel in tech.</p>
            </div>
            <div className="focus-card">
              <FaRocket className="virtufirm-icon" />
              <h3>Innovation</h3>
              <p>Pioneering new approaches to tech education and industry collaboration.</p>
            </div>
          </div>

          
        </div>
      </motion.div>

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
}

export default Home;