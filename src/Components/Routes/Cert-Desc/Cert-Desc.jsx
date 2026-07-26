import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Error from '../Error/Error';
import './Cert-Desc.css';
import { certificates } from '../../../data/certData';

const certDesc = () => {
  const { certId } = useParams();
  
  const cert = certificates.find(({ alt }) => alt === certId);
  
  // If certificate not found, show error page
  if (!cert) {
    return <Error />;
  }
  
  return (
    <>
      <div className="describiton">
        <div className="all">
        <div className="text-container">
          <div className="big-text">CERTIFICATE</div>
          <div className="title-text">Certificate Description</div>
        </div>
        <hr className="lin" />
          <div className="cert-details">
            
          <div className="text">
            <h1>{cert.main}</h1>
            <p className="sup-title">{cert.sub}</p>
            <p className="d">{cert.description}</p>
            <hr className="lin" />
            <h2>Key Takeaways:</h2>
            <ul>
              {cert.takeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
          <div className="image-container">
            <motion.img src={cert.img} alt={cert.alt} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}/>
          </div>
        </div>
        <div className="banner">
          <div className="limit">
            <NavLink to="/" className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Return Main</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </NavLink>
          </div>
        </div>
        </div>
      </div>
    </>
    
  );
};

export default certDesc;