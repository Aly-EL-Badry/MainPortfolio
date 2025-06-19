import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import './Cert.css';


const hcia = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158338/HCIA_cvu2ap.webp"
const java = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158337/Java_course_ovcdpp.webp"
const Git = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158328/Git_and_Github_figiut.webp"
const introToBackend = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158330/Intro_to_backend_b8plvf.webp"
const ProgramminginPython = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/ProgrammingInPython_jynq96.webp"
const versionControl = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158321/VersionControl_qaw4vj.webp"
const introToDataBase = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158328/Intro_to_database_mf47g5.webp"
const aice = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158334/alx_up9vdv.webp"
const ecpc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158330/ecpc_h69udh.webp"
const dotpy = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158331/dotpy_jefwd4.webp"
const clean = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158337/clean_viakud.webp"
const oop = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158325/oop_jylarf.webp"
const hc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158335/html_clwgwq.webp"
const py = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158322/pyrhon_ap5njq.webp"
const pan = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/pandas_ekptzt.webp"
const machine = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158325/machine_bpmwnd.webp"
const data = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158336/data_nt65ih.webp"
const sql = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/sql_btezcp.webp"
const django = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750292305/Screenshot_2025-06-19_031639_vmutu1.png"
const front = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750292412/Screenshot_2025-06-19_031902_jgjdes.png"

const certificates = [
  { img: Git, alt: "Git", main: "Intro to Git and Github", sub: "From: Google | Coursera" },
  { img: hcia, alt: "hcia", main: "HCIA:AI", sub: "From: Huawei ICT Academy" },
  { img: aice, alt: "AICE", main: "AI Career Essential", sub: "From: Alx" },
  
  // Web Development
  { img: django , alt: "Django", main: "Django Development", sub: "From: Meta | Coursera"},
  { img: front , alt: "intro to front end", main: "Intro To Front End", sub: "From: Meta | Coursera"},
  { img: introToBackend, alt: "Intro to Backend", main: "Intro to Backend", sub: "From: Meta | Coursera" },
  { img: versionControl, alt: "Version Control", main: "Version Control", sub: "From: Meta | Coursera" },
  { img: introToDataBase, alt: "Intro to DataBase", main: "Intro to DataBase", sub: "From: Meta | Coursera" },
  { img: ProgramminginPython, alt: "Programming in Python", main: "Programming in Python", sub: "From: Meta | Coursera" },
  { img: hc, alt: "HTML-CSS", main: "HTML and CSS", sub: "From: ITI" },
  
  // Ai Development
  { img: dotpy, alt: "Dotpy", main: "AI Diploma", sub: "From: Dotpy" },
  { img: py, alt: "python", main: "Python", sub: "From: Kaggle" },
  { img: pan, alt: "Pandas", main: "Pandas", sub: "From: Kaggle" },
  { img: data, alt: "data-cleaning", main: "Data Cleaning", sub: "From: Kaggle" },
  { img: machine, alt: "intro-to-machine", main: "Intro to Machine Learning", sub: "From: Kaggle" },
  
  // Others
  { img: ecpc, alt: "ECPC", main: "ECPC Competition", sub: "Technology: ECPC" },
  { img: clean, alt: "clean-code", main: "Clean Code", sub: "From: ITI" },
  { img: oop, alt: "OOP", main: "Mastering OOP", sub: "From: ITI" },
  { img: sql, alt: "sql", main: "SQL Course", sub: "From: Udemy" },
  { img: java, alt: "Java", main: "Java Course", sub: "From: Huawei ICT Academy" },
];

// Separate certificates into important and others
const importantCertificates = certificates.filter(cert => 
  ['hcia', 'Git', 'AICE'].includes(cert.alt)
);

const webDevelopmentCertificates = certificates.filter(cert => 
  ['Django', 'intro to front end', 'Intro to Backend', 'Version Control', 'Intro to DataBase', 'Programming in Python', 'HTML-CSS'].includes(cert.alt)
);

const aiDevelopmentCertificates = certificates.filter(cert => 
  ['python', 'Pandas', 'data-cleaning', 'intro-to-machine', "Dotpy"].includes(cert.alt)
);

const otherCertificates = certificates.filter(cert => 
  !['hcia', 'Git', 'AICE', 'Dotpy', 'Django', 'intro to front end', 'Intro to Backend', 'Version Control', 'Intro to DataBase', 'Programming in Python', 'HTML-CSS', 'python', 'Pandas', 'data-cleaning', 'intro-to-machine'].includes(cert.alt)
);

const MotionNavLink = motion(NavLink);

const Cert = () => {
  return (
    <div className="certificates-container">

      {/* Important Certificates Section */}
      <div 
        className='title '
      >
        Key Certificates
      </div>
      <hr/>

      <motion.div 
        className="certificates-grid important-grid"
        variants={{
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
        initial="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {importantCertificates.map(({ img, alt, main, sub }, index) => (
          <MotionNavLink 
            exact
            to={`/certificates/${alt}`}
            className="certificate-card important-card" 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-content">
              <div className="image-wrapper">
                <img src={img} alt={alt} />
                <div className="image-overlay"></div>
                <div className="important-badge">👑</div>
              </div>
              <div className="text-content">
                <h3 className="cert-title">{main}</h3>
                <p className="cert-subtitle">{sub}</p>
              </div>
              <div className="see-more-section">
                <span className="see-more-text">See More Details</span>
                <span className="see-more-arrow">→</span>
              </div>
            </div>
          </MotionNavLink>
        ))}
      </motion.div>

      {/* Web Development Section */}
      <motion.div 
        className='title '
      >
        Web Development
      </motion.div>
      <motion.hr  
      />

      <motion.div 
        className="certificates-grid web-dev-grid"
        variants={{
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.08,
              delayChildren: 0.4
            }
          }
        }}
        initial="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {webDevelopmentCertificates.map(({ img, alt, main, sub }, index) => (
          <MotionNavLink 
            exact
            to={`/certificates/${alt}`}
            className="certificate-card" 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-content">
              <div className="image-wrapper">
                <img src={img} alt={alt} />
                <div className="image-overlay"></div>
              </div>
              <div className="text-content">
                <h3 className="cert-title">{main}</h3>
                <p className="cert-subtitle">{sub}</p>
              </div>
              <div className="see-more-section">
                <span className="see-more-text">See More Details</span>
                <span className="see-more-arrow">→</span>
              </div>
            </div>
          </MotionNavLink>
        ))}
      </motion.div>

      {/* AI Development Section */}
      <motion.div 
        className='title '
      >
        AI Development
      </motion.div>
      <motion.hr  
      />

      <motion.div 
        className="certificates-grid ai-dev-grid"
        variants={{
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.08,
              delayChildren: 0.5
            }
          }
        }}
        initial="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {aiDevelopmentCertificates.map(({ img, alt, main, sub }, index) => (
          <MotionNavLink 
            exact
            to={`/certificates/${alt}`}
            className="certificate-card" 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-content">
              <div className="image-wrapper">
                <img src={img} alt={alt} />
                <div className="image-overlay"></div>
              </div>
              <div className="text-content">
                <h3 className="cert-title">{main}</h3>
                <p className="cert-subtitle">{sub}</p>
              </div>
              <div className="see-more-section">
                <span className="see-more-text">See More Details</span>
                <span className="see-more-arrow">→</span>
              </div>
            </div>
          </MotionNavLink>
        ))}
      </motion.div>

      {/* Others Section */}
      <motion.div 
        className='title '
      >
        Others
      </motion.div>
      <motion.hr  
      />

      <motion.div 
        className="certificates-grid others-grid"
        variants={{
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.08,
              delayChildren: 0.6
            }
          }
        }}
        initial="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {otherCertificates.map(({ img, alt, main, sub }, index) => (
          <MotionNavLink 
            exact
            to={`/certificates/${alt}`}
            className="certificate-card" 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-content">
              <div className="image-wrapper">
                <img src={img} alt={alt} />
                <div className="image-overlay"></div>
              </div>
              <div className="text-content">
                <h3 className="cert-title">{main}</h3>
                <p className="cert-subtitle">{sub}</p>
              </div>
              <div className="see-more-section">
                <span className="see-more-text">See More Details</span>
                <span className="see-more-arrow">→</span>
              </div>
            </div>
          </MotionNavLink>
        ))}
      </motion.div>
    </div>
  );
};

export default Cert;