import './Home.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleDown, FaArrowRight, FaPython, FaReact, FaCode, FaBrain, FaDatabase, FaChartLine, FaTools, FaProjectDiagram, FaServer, FaGitAlt, FaLightbulb, FaLanguage, FaUsers, FaCogs, FaCodeBranch, FaMobile, FaTrophy, FaChalkboardTeacher, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";


const videoBg ="https://res.cloudinary.com/dqktuc5ej/video/upload/v1745161991/vi_bfhz8l.mp4"; 
const Profile = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159828/lol_nyrplz.webp";
const cairo = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159950/Cairo_university_mghkji.webp";
const depi = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159825/depi_logo_rjfmhm.webp";
const star = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159824/star_henlap.webp";
const event = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159833/event_hd39ee.webp";
const h = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159824/huawei_thxmng.webp";
const pothole = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/pothole_detection_1_nqaolw.webp";
const fasion =  "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/fasion_twfrhh.webp";
const vole = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/vole_iyqgwl.webp";
const hc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158335/html_clwgwq.webp"
const alx = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158334/alx_up9vdv.webp"
const dotpy = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158331/dotpy_jefwd4.webp"
const hcia = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158338/HCIA_cvu2ap.webp"
const virtufirm = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745159828/virtufirm_o9hoog.webp"

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

  const virtufirmFocus = [
    {
      id: 1,
      icon: <FaBrain className="virtufirm-icon" />,
      title: "AI Development",
      description: "Building intelligent applications and solutions"
    },
    {
      id: 2,
      icon: <FaReact className="virtufirm-icon" />,
      title: "Web Development",
      description: "Creating modern, responsive web applications"
    },
    {
      id: 3,
      icon: <FaMobile className="virtufirm-icon" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with Flutter"
    },
    {
      id: 4,
      icon: <FaTrophy className="virtufirm-icon" />,
      title: "Competitions",
      description: "Hosting tech challenges and hackathons"
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
            <p className="welcome">Welcome to My Portfolio,</p>
            <p className='Name'>I am Aly El-Badry</p>
            <p className="desc">An innovative-minded Data Scientist and Full-Stack Developer, aspiring to become an AI Engineer, blending creativity with technology to build intelligent solutions</p>
            <a className="btn" href="#contact" >Contact me</a>
            <a href="https://drive.google.com/file/d/1j1OgHYgD21k0HwfD-f5C0zm7-Iw0eXry/view?usp=sharing" className="btn">Download CV</a>
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
      
      <div className='title' id="about">About Aly El-Badry</div>
      <hr />
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="about">
        <div className='about-content'>
          <div className="about-text">
            <p className="main-text">A second-year student at Cairo University's Faculty of Computer Science and Artificial Intelligence, Aly El-Badry is a dedicated Data Scientist and Full-Stack Developer with a strong passion for advancing toward a career as an AI Engineer.</p>
            <p className="subtext">
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Experienced freelancer on platforms such as Upwork and 5amsat, offering expertise in Data Science and web development.</p>
              </div>
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Currently contributing as a Data Scientist in the Digital Egypt Pioneers Initiative (DEPI), guided by the strategic vision of AMIT.</p>
              </div>
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Former Student Union member with a proven track record in organizing large-scale events, including the Cairo University Student Graduation Party.</p>
              </div>
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Active AI member in Star Union and a recognized Dataset expert on Kaggle, showcasing a commitment to innovation and collaboration in the field of artificial intelligence.</p>
              </div>
            </p>
          </div>
          <img src={Profile} alt="profile-img" className='My-Image' />
        </div>
      </motion.div>


      <div className="title">Experience</div>
      <hr />
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="exp">
        <div className="sec">
          <div className="comp-head">
            <div className="comp-name">
              <h2>Digital Egypt Pioneers Initiative-DEPI</h2>
              <p className="job">Data Scientist - Internship</p>
            </div>
            <p>October 2024 - Present</p>
          </div>
          <div className='college-content com'>
            <hr />
            <div className="headlist">Key Takeaways:</div>
            <ul>
              <li>Developed and deployed machine learning models for real-world applications.</li>
              <li>Performed data cleaning, preprocessing, and feature engineering for improved model accuracy.</li>
              <li>Worked with large datasets to extract meaningful insights and build predictive analytics solutions.</li>
              <li>Collaborated with a team of professionals to solve data-driven challenges.</li>
              <li>Enhanced proficiency in Python, TensorFlow, and data visualization tools.</li>
            </ul>
          </div>
        </div>
        <motion.img src={depi} alt="" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }}transition={{ duration: 0.8, ease: "easeOut" }} />
      </motion.div>
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="exp">
        <div className="sec">
          <div className="comp-head">
            <div className="comp-name">
              <h2>Huawei ICT Academy</h2>
              <p className="job">Data Scientist - Internship</p>
            </div>
            <p>July 2024 - August 2024</p>
          </div>
          <div className='college-content com'>
            <hr />
            <div className="headlist">Key Takeaways:</div>
            <ul>
            <li>Developed and deployed machine learning models for real-world applications.</li>
            <li>Conducted data cleaning, preprocessing, and feature engineering to enhance model accuracy.</li>
            <li>Analyzed large datasets to extract meaningful insights and build predictive analytics solutions.</li>
            <li>Collaborated with a team of professionals to solve complex data-driven challenges.</li>
            <li>Strengthened expertise in Python, TensorFlow, and data visualization tools.</li>
          </ul>
          </div>
        </div>
        <motion.img src={h} alt="" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}viewport={{ once: true, amount: 0.3 }}transition={{ duration: 0.8, ease: "easeOut" }}/>
      </motion.div>

      <div className="title">Education</div>
      <hr />
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="about">
        <div className='about-content'>
          <img src={cairo} alt="Cairo university" />
          <div className="college-details">
            <div className="college-head">
              <h2>Cairo University, Computer Science & Artificial Intelligence</h2>
              <p>October 2023 - Present</p>
            </div>
            <div className="college-content">
              <div className="main">
                Kickstart your journey in programming with a strong foundation in essential concepts. 
                This program emphasizes problem-solving, time management, and teamwork, providing an 
                optimal environment for beginners to excel in the field of programming.
              </div>
              <hr />
              <div className="headlist">Key Takeaways:</div>
              <ul>
                <li>Develop teamwork and project management skills</li>
                <li>Gain proficiency in programming languages such as C++, Java, and Python</li>
                <li>Master Object-Oriented Programming (OOP), data structures, and algorithms</li>
                <li>Explore web development and database management</li>
                <li>Build a solid foundation in your preferred specialization</li>
              </ul>
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

      <div className="project">
        <div className='title'>Projects</div>
        <hr />
        <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="projects">
          <a href="https://github.com/Ali-EL-Badry/Pothole-Detection" className="card">
            <img src={pothole} alt="pothole Detection" />
            <p className="main">Pothole-Detection</p>
            <p className="sub">Technology: YOLO</p>
          </a>
          <a href="https://github.com/Ali-EL-Badry/My-House" className="card">
            <img src={fasion} alt="Fassion" />
            <p className="main">Fasion Corner </p>
            <p className="sub">Technology:React, HTML, bootstrap and css</p>
          </a>
          <a href="https://github.com/Ali-EL-Badry/Vole_Machine_Simulator" className="card">
            <img src={vole} alt="vole machine" />
            <p className="main">Vole Machine Simulator</p>
            <p className="sub">Technology: C++, QT</p>
          </a>
        </motion.div>
        <NavLink className="btton " id='blue' to="/projects">For More</NavLink>

        <div className='title'>Certificates</div>
        <hr />
        <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="cert">
          <NavLink exact to={`/certificats/hcia`} className="card">
            <img src={hcia} alt="hcia" />
            <p className="main">HCIA:AI</p>
            <p className="sub">From: Huawei ICT Academy</p>
          </NavLink>
          <NavLink exact to={`/certificats/DOtpy`} className="card">
            <img src={dotpy} alt="dotpy" />
            <p className="main">AI Diploma</p>
            <p className="sub">From: DOTPY</p>
          </NavLink>
          <NavLink exact to={`/certificats/aice`} className="card">
            <img src={alx} alt="alx" />
            <p className="main">AI Carrer essential</p>
            <p className="sub">From: ALX</p>
          </NavLink>
        </motion.div>
          <NavLink className="btton" id='black' to='/certificats'>For More</NavLink>
      </div>
    </>
  );
}

export default Home;