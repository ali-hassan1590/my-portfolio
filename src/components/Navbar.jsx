import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Systems', href: '#systems' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <div className="logo">
          ALI<span className="gradient-text">HASSAN</span>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a 
                whileHover={{ color: 'var(--primary)' }}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Updated Toggle with Fallback Text */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="menu-text">{isOpen ? '' : 'MENU'}</span>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="mobile-backdrop"
              />
              
              <motion.ul
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="mobile-menu"
              >
                {navLinks.map((link) => (
                  <li key={link.name} onClick={() => setIsOpen(false)}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;