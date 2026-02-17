import { motion } from 'framer-motion';

const projects = [
  { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
  { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
  { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
];

const Projects = () => (
  <section className="section" id="systems">
    <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Engineered <span className="gradient-text">Solutions</span></h2>
    <div className="grid">
      {projects.map((proj, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="glass" 
          style={{ padding: '2rem', borderRadius: '20px' }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {proj.tech.map(t => <span key={t} style={{ fontSize: '0.7rem', color: 'var(--primary)', background: 'rgba(99,102,241,0.1)', padding: '4px 8px', borderRadius: '4px' }}>{t}</span>)}
          </div>
          <h3 style={{ marginBottom: '1rem' }}>{proj.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{proj.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;