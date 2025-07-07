import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    // { path: '/booking', label: 'Reserve a Table' },
    // { path: '/reservation-profile', label: 'Reservation Profile' },
    { path: '/confirmation', label: 'Confirmation' }
  ];

  return (
    <>
      <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrapper">
          <div className="nav-content">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon">
                🍋
              </div>
              <span className="nav-logo-text">Little Lemon</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="nav-menu">
              {navItems.map((item, index) => (
                <li key={item.path} className={`nav-item ${isActiveLink(item.path) ? 'active' : ''}`}>
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActiveLink(item.path) ? 'active' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          {navItems.map((item, index) => (
            <li key={item.path} className="mobile-nav-item">
              <Link 
                to={item.path} 
                className={`mobile-nav-link ${isActiveLink(item.path) ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;