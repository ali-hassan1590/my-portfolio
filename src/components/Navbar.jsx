import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Experience', 'Systems', 'Contact'];

  return (
    <nav className="glass" style={{ 
      position: 'fixed', width: '100%', height: '70px', zIndex: 1000, 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
      padding: '0 5%', boxSizing: 'border-box' 
    }}>
      {/* Logo */}
      <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-1px' }}>
        ALI<span className="gradient-text">HASSAN</span>
      </div>

      {/* Desktop Links - Hidden on Mobile via CSS */}
      <ul className="desktop-menu" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {navLinks.map((item) => (
          <li key={item}>
            <motion.a 
              whileHover={{ color: 'var(--primary)' }}
              href={`#${item.toLowerCase()}`} 
              style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}
            >
              {item}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Hamburger Toggle Button */}
      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', zIndex: 1001 }}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`} style={{ fontSize: '1.5rem' }}></i>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            style={{
              position: 'fixed', top: 0, right: 0, height: '100vh', width: '70%',
              background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0,
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >
            {navLinks.map((item) => (
              <li key={item} onClick={() => setIsOpen(false)}>
                <a href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#333', fontSize: '1.2rem', fontWeight: 600 }}>
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;