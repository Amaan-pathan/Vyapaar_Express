import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          Vyapaar Express
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/vendor" className={styles.navLink}>Vendor</Link>
          <Link to="/transporter" className={styles.navLink}>Transporter</Link>
          <button 
            onClick={() => scrollToSection('about')} 
            className={styles.navLink}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={styles.navLink}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 