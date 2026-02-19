

import { motion } from 'framer-motion';

const projects = [
  { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
  { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
  { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
  { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
  { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
  { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },

];

const Projects = () => (
  <section className="section" id="systems">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
      Engineered <span className="gradient-text">Solutions</span>
    </h2>
    
    <div className="grid">
      {projects.map((proj, i) => (
        <motion.div 
          key={i}
          className="glass project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.2, ease: "easeOut" } 
          }}
        >
          <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
            {proj.tech.map(t => (
              <span key={t} className="mono" style={{ 
                fontSize: '0.65rem', 
                color: 'var(--primary)', 
                background: 'rgba(99,102,241,0.1)', 
                padding: '4px 10px', 
                borderRadius: '6px' 
              }}>
                {t}
              </span>
            ))}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>{proj.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {proj.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;