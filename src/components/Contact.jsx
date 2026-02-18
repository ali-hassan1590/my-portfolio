import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure you replace this with your actual Formspree ID
    const FORMSPREE_URL = "https://formspree.io/f/xvzbqabr"; 

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        // Reset to idle after 3 seconds so they can try again
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      // If the URL is missing or network fails, show error
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section" id="contact">
      <div className="grid">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">
            Let’s build the <br /> <span className="gradient-text">Next System.</span>
          </h2>
          {/* <p className="contact-desc">
            Currently open for architecture consulting and specialized backend engineering roles.
          </p> */}

          <div className="contact-details-list">
            <ContactDetail icon="fa-envelope" title="Email" detail="alihassan751297@gmail.com" />
            <ContactDetail icon="fa-location-dot" title="Location" detail="Lahore, Pakistan" />
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass contact-form-card"
        >
          <form onSubmit={handleSubmit} className="contact-form">
            
            <FormGroup label="Name">
              <input 
                type="text" 
                name="name" 
                className="glass-input" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{ background: 'rgba(255,255,255,0.03)', color: 'white' }}
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
                style={{ background: 'rgba(255,255,255,0.03)', color: 'white' }}
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
                style={{ background: 'rgba(255,255,255,0.03)', color: 'white', minHeight: '120px' }}
              />
            </FormGroup>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn"
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: status === 'success' ? 'var(--accent)' : status === 'error' ? '#ef4444' : 'var(--primary)',
                width: 'fit-content'
              }}
            >
              {status === 'idle' && (
                <>Send Message <i className="fa-solid fa-paper-plane" style={{fontSize: '0.8rem'}}></i></>
              )}
              {status === 'sending' && <div className="spinner"></div>}
              {status === 'success' && <>Message Sent!</>}
              {status === 'error' && <>Try Again</>}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* --- Internal Helpers --- */
const FormGroup = ({ label, children }) => (
  <div className="form-group" style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
    <label className="mono label-accent" style={{ color: 'var(--primary)', fontSize: '0.7rem', marginBottom: '0.5rem' }}>{label}</label>
    {children}
  </div>
);

const ContactDetail = ({ icon, title, detail }) => (
  <div className="detail-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
    <div className="glass detail-icon" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', color: 'var(--primary)' }}>
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <div>
      <p className="mono detail-label" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>{title}</p>
      <p className="detail-text" style={{ fontWeight: '600' }}>{detail}</p>
    </div>
  </div>
);

export default Contact;