import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to avoid layout bugs
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
        {/* Logo */}
        <div className="logo">
          ALI<span className="gradient-text">HASSAN</span>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Pure CSS Hamburger Button */}
        <button 
          className={`mobile-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu-dropdown"
            >
              {navLinks.map((link) => (
                <li key={link.name} onClick={() => setIsOpen(false)}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;