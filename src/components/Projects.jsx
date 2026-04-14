
// // import { motion } from 'framer-motion';

// // const projects = [
// //   { title: "Promptly", desc: "A full-stack ChatGPT-like conversational AI web app built with Django and Next.js.", tech: ["Django", "Next.js", "Python", "AI"] },
// //   { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
// //   { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
// //   { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
// //   { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
// //   { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
// // ];

// // const Projects = () => (
// //   <section className="section" id="systems">
// //     <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
// //       Engineered <span className="gradient-text">Solutions</span>
// //     </h2>

// //     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
// //       {projects.map((proj, i) => (
// //         <motion.div
// //           key={i}
// //           className="glass project-card"
// //           style={{
// //             borderRadius: '12px',
// //             padding: '1.4rem',
// //             boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
// //             border: '1px solid rgba(255,255,255,0.07)',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             gap: '0.6rem',
// //           }}
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           whileHover={{
// //             y: -6,
// //             boxShadow: '0 16px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.2)',
// //             transition: { duration: 0.2, ease: "easeOut" },
// //           }}
// //         >
// //           <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
// //             {proj.tech.map(t => (
// //               <span key={t} className="mono" style={{
// //                 fontSize: '0.6rem',
// //                 color: 'var(--primary)',
// //                 background: 'rgba(99,102,241,0.1)',
// //                 padding: '3px 8px',
// //                 borderRadius: '60px',
// //               }}>
// //                 {t}
// //               </span>
// //             ))}
// //           </div>

// //           <h3 style={{ color: 'var(--text)', fontSize: '1rem' }}>{proj.title}</h3>

// //           <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>
// //             {proj.desc}
// //           </p>
// //         </motion.div>
// //       ))}
// //     </div>
// //   </section>
// // );

// // export default Projects;

// import { motion } from 'framer-motion';

// const projects = [
//   { title: "Promptly", desc: "A full-stack ChatGPT-like conversational AI web app built with Django and Next.js.", tech: ["Django", "Next.js", "Python", "AI"] },
//   { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
//   { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
//   { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
//   { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
//   { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
// ];

// const Projects = () => (
//   <section className="section" id="systems">
//     <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
//       Engineered <span className="gradient-text">Solutions</span>
//     </h2>

//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '1.2rem',
//     }}>
//       {projects.map((proj, i) => (
//         <motion.div
//           key={i}
//           className="glass project-card"
//           style={{
//             borderRadius: '12px',
//             padding: '1.4rem',
//             boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
//             border: '1px solid rgba(255,255,255,0.07)',
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '0.6rem',
//           }}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           whileHover={{
//             y: -6,
//             boxShadow: '0 16px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.2)',
//             transition: { duration: 0.2, ease: "easeOut" },
//           }}
//         >
//           <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
//             {proj.tech.map(t => (
//               <span key={t} className="mono" style={{
//                 fontSize: '0.6rem',
//                 color: 'var(--primary)',
//                 background: 'rgba(99,102,241,0.1)',
//                 padding: '3px 8px',
//                 borderRadius: '60px',
//               }}>
//                 {t}
//               </span>
//             ))}
//           </div>

//           <h3 style={{ color: 'var(--text)', fontSize: '1rem' }}>{proj.title}</h3>

//           <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>
//             {proj.desc}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   </section>
// );

// export default Projects;

import { motion } from 'framer-motion';

const projects = [
  { title: "Promptly", desc: "A full-stack ChatGPT-like conversational AI web app built with Django and Next.js.", tech: ["Django", "Next.js", "Python", "AI"] },
  { title: "Flux Orchestrator", desc: "Workflow automation tool reducing deployment latency by 25%.", tech: ["Django", "Docker", "AWS"] },
  { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
  { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
  { title: "Semantic Search Engine", desc: "Metadata extraction system for enterprise-level distributed data.", tech: ["React", "NLP", "ElasticSearch"] },
  { title: "NeuroTranslate API", desc: "Real-time audio-to-speech translation engine using Django and Whisper AI.", tech: ["Python", "NLP", "Redis"] },
];

const Projects = () => (
  <section 
    className="section" 
    id="systems" 
    style={{ 
      padding: '2rem 1rem', // Adds horizontal breathing room on mobile
      maxWidth: '1200px', 
      margin: '0 auto' 
    }}
  >
    <h2 style={{ 
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', // Responsively scales title
      marginBottom: '2rem',
      textAlign: 'left'
    }}>
      Engineered <span className="gradient-text">Solutions</span>
    </h2>

    <div style={{
      display: 'grid',
      // 'auto-fill' often works better than 'auto-fit' for smaller lists
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
      gap: '1.5rem',
    }}>
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          className="glass project-card"
          style={{
            borderRadius: '12px',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.03)', // Ensure visibility
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            height: '100%' // Ensures cards in a row have equal height
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            boxShadow: '0 16px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.2)',
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {proj.tech.map(t => (
              <span key={t} className="mono" style={{
                fontSize: '0.7rem',
                color: '#6366f1', // Using a solid color fallback
                background: 'rgba(99,102,241,0.1)',
                padding: '4px 10px',
                borderRadius: '60px',
                fontWeight: '500'
              }}>
                {t}
              </span>
            ))}
          </div>

          <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0.5rem 0' }}>
            {proj.title}
          </h3>

          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '0.9rem', 
            lineHeight: 1.6,
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