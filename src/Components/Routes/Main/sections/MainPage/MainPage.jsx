import React from 'react';
import { FaAngleDoubleDown, FaArrowRight } from "react-icons/fa";
import './MainPage.css';

const videoBg = "https://res.cloudinary.com/dqktuc5ej/video/upload/v1745161991/vi_bfhz8l.mp4"; 

const MainPage = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 690, behavior: "smooth" }); 
  };

  return (
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
            <a href="https://drive.google.com/file/d/1sGADl2KIJeYzrpbfTjLz-gKVi7PVBeZn/view?usp=sharing" className="btn">
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
  );
};

export default MainPage;
