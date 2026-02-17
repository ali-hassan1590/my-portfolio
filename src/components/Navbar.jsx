import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
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

        {/* Desktop Links */}
        <ul className="desktop-menu">
          {links.map((link) => (
            <li key={link.name}><a href={link.href} className="nav-link">{link.name}</a></li>
          ))}
        </ul>

        {/* CSS-ONLY HAMBURGER (No Icons Needed) */}
        <div className={`mobile-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mobile-menu-dropdown"
            >
              {links.map((link) => (
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