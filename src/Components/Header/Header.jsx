import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import './Header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setIsSticky(currentScrollY > 0);
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]); 

  return (
    <>
      <header className={`${isSticky ? "sticky" : ""} ${scrollDirection === 'down' ? "scroll-down" : "scroll-up"}`}>
        <div className="header-content">
          <NavLink to="/" exact className="Logo">
            <FaCode className="logo-icon" />
            <span className="logo-text">Aly EL-Badry</span>
          </NavLink>
          <div className="nav">
            <div className='nav-path'>
              <NavLink to="/" exact activeClassName="active">About</NavLink>
              <NavLink to="/projects" activeClassName="active">Projects</NavLink>
              <NavLink to="/certificates" activeClassName="active">Certificates</NavLink>
              <NavLink to="/FeedBack" activeClassName="active">FeedBack</NavLink>
            </div>
            <div className="nav-icons">
              <NavLink to="https://github.com/Aly-EL-Badry" className="github" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/aly-el-badry/" className="linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </NavLink>

            </div>
          </div>
          <button className="menu-button" onClick={toggleSidebar} aria-label="Toggle menu">
            <span className="menu-icon"></span>
          </button>
        </div>
      </header>
      
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSidebar} aria-label="Close menu">✕</button>
        <nav className="sidebar-nav">
          <NavLink to="/" exact activeClassName="active" onClick={toggleSidebar}>About</NavLink>
          <NavLink to="/projects" activeClassName="active" onClick={toggleSidebar}>Projects</NavLink>
          <NavLink to="/certificates" activeClassName="active" onClick={toggleSidebar}>Certificates</NavLink>
          <NavLink to="/FeedBack" activeClassName="active" onClick={toggleSidebar}>FeedBack</NavLink>
          <div className="nav-icons">
            <NavLink to="https://github.com/Aly-EL-Badry" className="github" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/aly-el-badry/" className="linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </NavLink>
            
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
