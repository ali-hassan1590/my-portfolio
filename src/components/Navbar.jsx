import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{ position: 'fixed', width: '100%', height: '70px', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%' }}>
      <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-1px' }}>
        ALI<span className="gradient-text">HASSAN</span>
      </div>
      
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className={isOpen ? "nav-active" : ""}>
        {['Home', 'Experience', 'Systems', 'Contact'].map((item) => (
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
    </nav>
  );
};

export default Navbar;