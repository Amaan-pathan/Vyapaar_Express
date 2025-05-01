import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <span>Vyapaar Express</span>
        </Link>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link to="/" className={`${styles.navLink} ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/vendor" className={`${styles.navLink} ${isActive('/vendor')}`}>
            Vendor Dashboard
          </Link>
          <Link to="/transporter" className={`${styles.navLink} ${isActive('/transporter')}`}>
            Transporter Dashboard
          </Link>
        </div>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 