import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 'backend',
    label: 'Backend & Languages',
    accent: 'var(--primary)',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 90 },
      { name: 'REST APIs', level: 88 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    accent: '#818cf8',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 82 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML / CSS', level: 80 },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    accent: 'var(--accent)',
    skills: [
      { name: 'NLP Pipelines', level: 88 },
      { name: 'Whisper / Speech', level: 86 },
      { name: 'LLM Integration', level: 84 },
      { name: 'Gemini SDK', level: 80 },
    ],
  },
  {
    id: 'infra',
    label: 'Tools & Infrastructure',
    accent: '#2dd4bf',
    skills: [
      { name: 'Git & CI/CD', level: 85 },
      { name: 'Docker', level: 78 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'ElasticSearch', level: 72 },
    ],
  },
];

const marqueeItems = [
  'Python',
  'Django',
  'React',
  'Next.js',
  'REST APIs',
  'NLP',
  'Whisper AI',
  'Redis',
  'PostgreSQL',
  'Docker',
  'Go',
  'Kubernetes',
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Skills = () => (
  <section className="section skills-section" id="skills">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="contact-title"
      style={{ marginBottom: '1rem' }}
    >
      Technical <span className="gradient-text">Stack</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        maxWidth: '640px',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        marginBottom: '2.5rem',
      }}
    >
      Core technologies I use to build scalable backends, AI-driven products, and
      polished web experiences.
    </motion.p>

    <div className="skills-grid">
      {skillCategories.map((category, i) => (
        <motion.div
          key={category.id}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-card"
          whileHover={{ y: -4 }}
        >
          <h3 className="mono skills-card-title" style={{ color: category.accent }}>
            {category.label}
          </h3>
          <ul className="skills-list">
            {category.skills.map((skill) => (
              <li key={skill.name} className="skills-item">
                <div className="skills-item-header">
                  <span>{skill.name}</span>
                  <span className="mono skills-level">{skill.level}%</span>
                </div>
                <div className="skills-bar-track">
                  <motion.div
                    className="skills-bar-fill"
                    style={{
                      background: `linear-gradient(90deg, ${category.accent}, var(--accent))`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-content">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={`${item}-${i}`} className="mono skills-marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
