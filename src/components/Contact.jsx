import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API transmission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section" id="contact">
      <div className="grid">
        
        {/* Contact Info Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Let’s build the <br /> <span className="gradient-text">Next System.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '400px', lineHeight: 1.6 }}>
            Currently open for architecture consulting and specialized backend engineering roles.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <ContactDetail icon="fa-envelope" title="Email" detail="alihassan751297@gmail.com" />
            <ContactDetail icon="fa-location-dot" title="Location" detail="Lahore, Pakistan" />
          </div>
        </motion.div>

        {/* Dynamic Form - Streamlined */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '2.5rem', borderRadius: '30px' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <FormGroup label="Name">
              <input 
                type="text" 
                name="name" 
                className="glass-input" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>

            <FormGroup label="Email">
              <input 
                type="email" 
                name="email" 
                className="glass-input" 
                placeholder="email@company.com" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>

            <FormGroup label="Message">
              <textarea 
                name="message" 
                className="glass-input" 
                placeholder="Type your message here..." 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn"
              type="submit"
              disabled={status === 'sending'}
              style={{ 
                background: status === 'success' ? 'var(--accent)' : 'var(--primary)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '12px',
                marginTop: '0.5rem'
              }}
            >
              {status === 'idle' && <>Send Message <i className="fas fa-paper-plane" style={{fontSize: '0.8rem'}}></i></>}
              {status === 'sending' && <div className="spinner"></div>}
              {status === 'success' && <>Connection Established</>}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* --- Internal Helpers --- */

const FormGroup = ({ label, children }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
    <label className="mono label-accent">{label}</label>
    {children}
  </motion.div>
);

const ContactDetail = ({ icon, title, detail }) => (
  <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
    <div className="glass" style={{ width: '50px', height: '50px', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>
      <i className={`fas ${icon}`}></i>
    </div>
    <div>
      <p className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{title}</p>
      <p style={{ fontWeight: 600 }}>{detail}</p>
    </div>
  </div>
);

export default Contact; 