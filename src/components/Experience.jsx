import { motion } from 'framer-motion';

const Experience = () => {
  const milestones = [
    "Architected and integrated APIs for real-time video-audio translation.",
    "Automated complex internal workflows for higher deployment velocity.",
    "Implemented rigorous API validation protocols ensuring 99%+ interoperability."
  ];

  // Animation variants for the list items
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    /* FIXED ID: Changed from "expertise" to "experience" to match Navbar */
    <section className="section" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        Professional <span className="gradient-text">Milestones</span>
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass" 
        style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}
      >
        {/* Header Section */}
        <div className="exp-header" style={{ 
          background: 'rgba(99, 102, 241, 0.05)', 
          padding: '2.5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid var(--border)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Software Engineering Intern</h3>
            <p className="mono" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              <i className="fas fa-microchip" style={{ marginRight: '8px' }}></i>
              Backend Development & AI Integration
            </p>
          </div>
          <div className="mono" style={{ 
            background: 'var(--surface)', 
            padding: '8px 16px', 
            borderRadius: '100px', 
            fontSize: '0.8rem',
            border: '1px solid var(--border)' 
          }}>
            Oct 2024 — Apr 2025
          </div>
        </div>

        {/* Content Section */}
        <div className="exp-container" style={{ padding: '2.5rem' }}>
          <div style={{ flex: 2 }}>
            <h4 className="mono" style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
              &gt; CORE_IMPACT_LOG
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {milestones.map((item, i) => (
                <motion.li 
                  key={i}
                  custom={i}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ marginBottom: '1.2rem', display: 'flex', gap: '15px', alignItems: 'flex-start' }}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>0{i+1}</span>
                  <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Stats Cards */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.2rem', minWidth: '250px' }}>
             <motion.div 
               whileHover={{ scale: 1.02, backgroundColor: 'rgba(99, 102, 241, 0.1)' }} 
               className="glass" 
               style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid var(--primary)' }}
             >
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text)' }}>-20%</div>
                <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '5px' }}>Error Reduction</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.1)' }} 
              className="glass" 
              style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid var(--accent)' }}
            >
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text)' }}>-25%</div>
                <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '5px' }}>Latency Optimized</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;