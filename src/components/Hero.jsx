// import { motion } from 'framer-motion';

// const Hero = () => (
//   <section
//     className="section"
//     id="home"
//     style={{
//       minHeight: '100vh',
//       display: 'flex',
      
 
//     }}
//   >
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.3, duration: 0.7 }}
//       style={{
  
 
//         height: '100%',
//         width: '100%',
//         justifyContent: 'center',
//       }}
//     >
//           <motion.p
//       className="mono"
//       style={{
//         color: 'var(--accent)',
//         marginBottom: '1rem',
//         display: 'flex',
//       }}
//     >
//       <span>&gt;&nbsp;</span>
//       {"Backend Engineer & AI Specialist".split('').map((char, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: i * 0.04 }}
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </motion.span>
//       ))}
//     </motion.p>

//     <motion.h1
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2, duration: 0.7 }}
//       style={{
//         fontSize: 'clamp(2.0rem, 6vw, 4.5rem)',
//         fontWeight: 400,
//         lineHeight: 1.0,
//         marginBottom: '1.5rem',
//       }}
//     >
//       Engineering <br />
//       Scalable <br />
//       <span className="gradient-text">Intelligence.</span>
//     </motion.h1>

//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.4, duration: 0.7 }}
//       style={{
//         maxWidth: '600px',
//         color: 'var(--text-muted)',
//         fontSize: '1.1rem',
//         marginBottom: '2.5rem',
//         lineHeight: 1.6,           // ← improved readability
//       }}
//     >
//       Specializing in high-throughput Django backends and NLP-driven pipelines. Currently building the future of automated speech processing.
//     </motion.p>

      

//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.6, duration: 0.6 }}
//     >
//       <a
//         href="#systems"
//         className="btn-primary"
//         style={{
//           display: 'inline-block',
//           padding: '1rem 3rem',
//           backgroundColor: 'var(--primary)',
//           borderRadius: '8px',
//           color: 'white',
//           textDecoration: 'none',
//           fontWeight: 700,
//           transition: 'all 0.3s ease',           // ← nice hover feel
//         }}
//       >
//         Explore Systems
//       </a>
//     </motion.div>
       
      
//     </motion.div>
//       <img
//         src="/ali.png"
//         alt="Portrait"
//         style={{

//           width: '100%',
//           maxWidth: '30%',
//           aspectRatio: '1 / 1',
//           objectFit: 'cover',

          

//           boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
//         }}
//       />
//   </section>
  
// );

// export default Hero;



import { motion } from 'framer-motion';

const Hero = () => (
  <section
    className="section"
    id="home"
    style={{
      minHeight: '100vh',
      display: 'flex',
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="hero-inner"
    >
      <div className="hero-text">
        <motion.p
          className="mono"
          style={{
            color: 'var(--accent)',
            marginBottom: '1rem',
            display: 'flex',
          }}
        >
          <span>&gt;&nbsp;</span>
          {"Backend Engineer & AI Specialist".split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontSize: 'clamp(2.0rem, 6vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            marginBottom: '1.5rem',
          }}
        >
          Engineering <br />
          Scalable <br />
          <span className="gradient-text">Intelligence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            maxWidth: '600px',
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}
        >
          Specializing in high-throughput Django backends and NLP-driven pipelines.
          Currently building the future of automated speech processing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="#systems" className="btn">
            Explore Systems
          </a>
        </motion.div>
      </div>

      <img
        src="/ali.png"
        alt="Portrait"
        className="hero-portrait"
      />
    </motion.div>
  </section>
);

export default Hero;