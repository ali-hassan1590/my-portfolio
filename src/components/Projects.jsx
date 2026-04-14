
import { motion } from 'framer-motion';

const projects = [
  { title: "Promptly", desc: "A full-stack ChatGPT-like conversational AI web app built with Django and Next.js.", tech: ["Django", "Next.js", "Python", "AI"] },
  { title: "Whisperfy", desc: "A web app for converting speech to text & audio extractionusing Whisper AI.", tech: ["Django", "HTML", "Whisper"] },
  { title: "SentryDoc AI", desc: "Enterprise-grade AI risk auditor for documents using Gemini SDK.", tech: ["Django", "AI", "Security"] },
  { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
  { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
  { title: "Cloud Sentinel", desc: "Infrastructure monitoring and automated threat response.", tech: ["Go", "Kubernetes", "gRPC"] },
];

const Projects = () => (
  <section 
    className="section" 
    id="systems" 
    style={{ 
      padding: '4rem 1.5rem', 
      maxWidth: '1100px', // Narrower container forces a tighter 3-column grid
      margin: '0 auto',
      backgroundColor: '#0406125d' 
    }}
  >
    <h1 style={{ 
      fontSize: 'clamp(2rem, 5vw, 2.8rem)', 
      fontWeight: '700',
      marginBottom: '2.5rem',
      color: '#fff',
      letterSpacing: '-1.2px'
    }}>
      Engineered <span style={{ 
        background: 'linear-gradient(90deg, #6366f1, #2dd4bf)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent' 
      }}>Solutions</span>
    </h1>

    <div style={{
      display: 'grid',
      // minmax(300px) ensures 3 cards fit perfectly on 1100px width
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
      gap: '1.2rem',
    }}>
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          className="project-card"
          style={{
            borderRadius: '12px',
            padding: '1.5rem', 
            background: 'rgba(8, 8, 23, 0.1)', // Deep navy slate (No gray)
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
            height: '100%',
            cursor: 'pointer',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent' // Removes blue tap box on mobile
          }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          // HOVER (Desktop Shadow Glow)
          whileHover={{
            y: -6,
            borderColor: 'rgba(99, 102, 241, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.2)',
          }}

          // TAP (Mobile Shadow Glow)
          whileTap={{ 
            scale: 0.98,
            borderColor: 'rgba(99, 102, 241, 0.1)', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 25px rgba(45, 212, 191, 0.4)',
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Mini-Pills */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {proj.tech.map(t => (
              <span key={t} style={{
                fontSize: '0.65rem',
                color: '#818cf8',
                background: 'rgba(30, 41, 59, 0.8)', 
                padding: '3px 10px',
                borderRadius: '999px', 
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.03)'
              }}>
                {t}
              </span>
            ))}
          </div>

          <h3 style={{ 
            color: '#fff', 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            margin: '0.2rem 0',
            letterSpacing: '-0.5px'
          }}>
            {proj.title}
          </h3>

          <p style={{ 
            color: 'rgba(255, 255, 255, 0.5)', 
            fontSize: '0.9rem', 
            lineHeight: 1.5,
            margin: 0 
          }}>
            {proj.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;