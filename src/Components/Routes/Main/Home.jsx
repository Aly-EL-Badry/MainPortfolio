import './Home.css';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleDown,FaArrowRight, FaPython, FaReact, FaCode, FaBrain, FaDatabase, FaChartLine, FaTools, FaProjectDiagram, FaServer, FaGitAlt, FaLightbulb, FaLanguage, FaUsers, FaCogs, FaCodeBranch, FaMobile, FaTrophy, FaChalkboardTeacher, FaRocket, FaStar, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
  const [selectedImage, setSelectedImage] = useState(null);
  
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

  const reviews = [
    {
      name: "Sherin Mohamed",
      company: "Al Kamal Center",
      service: "Web Development",
      review: "I highly recommend ENG. Aly El-Deen to anyone looking for a skilled, reliable, and creative web developer. We look forward to working with them again on future projects in our Company!",
      avatar: "https://res.cloudinary.com/dmqdsxrgy/image/upload/v1748954624/logo_lzz9xn.jpg",
      website: "https://alkamalcenter.com",
      rating: 5,
      reviewLink: "https://www.linkedin.com/services/page/4a8a133385020a4930/"
    }, 

  ]


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
              <span className="role">Entrepreneur</span>
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
                  <p>Won Third place in Creativa Entreprenur Training with Satellitor and Freelancer on Upwork and Khamsat</p>
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
                  <span>NextJs</span>
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
      {/* Achievements & Prizes Section */}
      <div className="title">Achievements & Prizes</div>
      <hr />
      <div className="achievements-section">
        <div className="achievements-background">
          <div className="achievements-particles"></div>
          <div className="achievements-glow"></div>
        </div>
        {[
          {
            id: 1,
            image: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750968367/WhatsApp_Image_2025-06-26_at_22.47.21_d39c83e6_s95rzf.jpg",
            title: "Third Place - Creativa Hackathon (Monofia)",
            event: "Creativa Hackathon - Monofia",
            description: (
              <>
                Won <b>Third Place</b> with <b>Satellitor</b> in the Creativa Hackathon focused on entrepreneurship and startup ideas. The hackathon covered market analysis, customer definition, professional BMC, and entrepreneurial thinking.<br/><br/>
                Special thanks to <a href="https://www.linkedin.com/in/basmaabdelaziz/" target="_blank" rel="noopener noreferrer" style={{color:'#3498db', fontWeight:'bold'}}>Dr. Basma Abd ElAziz</a> and <a href="https://www.linkedin.com/in/mohamed-nabil-2b6165112/" target="_blank" rel="noopener noreferrer" style={{color:'#3498db', fontWeight:'bold'}}>Dr. Mohamed Nabil</a> for their invaluable support and mentorship.
              </>
            ),
            date: "June 2025",
            badge: "🏆",
            category: "Hackathon"
          },
        ].map((ach, index) => (
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="achievement-row" 
            key={ach.id}
          >
            <div className="achievement-badge">
              <span className="badge-icon">{ach.badge}</span>
              <span className="badge-category">{ach.category}</span>
            </div>
            <div className="achievement-image-container">
              <div className="achievement-image-glow"></div>
              <img src={ach.image} alt={ach.title} className="achievement-img" />
              
            </div>
            <div className="achievement-content">
              <div className="achievement-header">
                <h3 className="achievement-title">{ach.title}</h3>
                <div className="achievement-meta">
                  <p className="achievement-event">{ach.event}</p>
                  <span className="achievement-date">({ach.date})</span>
                </div>
              </div>
              <div className="achievement-desc">{ach.description}</div>
              <div className="achievement-stats">
                <div className="stat-item">
                  <FaTrophy className="stat-icon" />
                  <span>Third Place</span>
                </div>
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <span>Team Project</span>
                </div>
                <div className="stat-item">
                  <FaRocket className="stat-icon" />
                  <span>Innovation</span>
                </div>
              </div>
            </div>
            <div className="achievement-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>
        ))}
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

    {/* Student Activities Media Section (no title, no hr) */}
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
            {[
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795136/6_yfegzx.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795144/5_lbhozx.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795157/4_ot1nh7.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795155/2_elkkv7.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795144/3_sqgepp.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795153/1_lcaewx.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795151/7_axx0pw.jpg",
              "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752795145/8_dlm0me.jpg"
            ].map((url, idx) => (
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

      <div className="title">Customer Reviews</div>
      <hr />

      <div className="customer-reviews" style={{position: 'relative', zIndex: 1}}>
        <video autoPlay loop muted className="video-bg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}}>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className='swiper-container'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{zIndex:200}}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-avatar-section">
                    <div className="review-avatar-ring">
                      <img src={review.avatar} alt={review.name} className="review-avatar" />
                      <div className="review-avatar-glow"></div>
                      <div className="review-avatar-spin"></div>
                    </div>
                  </div>
                  <div className="review-content">
                    <div className="review-scan-lines"></div>
                    <div className="review-particles"></div>
                    <div className="review-header">
                      <span className="review-name">{review.name}</span>
                      <span className="review-company">{review.company}</span>
                      <span className="review-service">{review.service}</span>
                      <span className="review-stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="review-star" />
                        ))}
                      </span>
                    </div>
                    <div className="review-text">{review.review}</div>
                    <div className="review-actions">
                      <a href={review.website} target="_blank" rel="noopener noreferrer" className="review-btn">Visit Website</a>
                      <a href={review.reviewLink} target="_blank" rel="noopener noreferrer" className="review-btn">View Review</a>
                    </div>
                  </div>
                  <div className="holo-border-anim"></div>
                </div>
              </SwiperSlide>
              ))}
              {/* Last card: Working on projects & open for more */}
            <SwiperSlide key="open-for-more">
              <div className="review-card" style={{justifyContent: 'center', alignItems: 'center', minHeight: 320, display: 'flex'}}>
                <div className="review-content" style={{width: '100%', textAlign: 'center', padding: '2rem 1rem'}}>
                  <div className="scan-lines"></div>
                  <div className="particles"></div>
                  <div style={{fontSize: '1.5rem', fontWeight: 700, color: '#3498db', marginBottom: '0.7rem', fontFamily: 'Share Tech Mono, Courier New, monospace', letterSpacing: '1.5px'}}>🚀 Open for New Projects!</div>
                  <div style={{fontSize: '1.13rem', color: '#fff', marginBottom: '1.2rem', fontFamily: 'Share Tech Mono, Courier New, monospace', opacity: 0.92}}>
                    Currently collaborating with clients and teams on exciting new projects.<br/>Open for more opportunities and partnerships!<br/><br/>
                    <span style={{color:'#3498db', fontWeight:700}}>Let&apos;s build something amazing together.</span>
                  </div>
                  <a href="#contact" className="review-btn" style={{marginTop: '0.5rem'}}>Contact Me</a>
                </div>
                <div className="border-anim"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;