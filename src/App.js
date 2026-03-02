import React from "react";
import { motion } from "framer-motion";
import {
  FaFlutter,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDatabase,
  FaAndroid,
  FaCode,
} from "react-icons/fa";
import {
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const skills = {
  mobile: [
    { name: "Flutter", icon: <FaFlutter />, color: "#02569B" },
    { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
    { name: "Java", icon: <FaJava />, color: "#ED8B00" },
    { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  ],
  web: [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ],
};

const projects = [
  {
    title: "Cross-Platform App",
    description: "Beautiful mobile application built with Flutter",
    tech: ["Flutter", "Firebase", "MVVM"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Android Native App",
    description: "Native Android application with Jetpack Compose",
    tech: ["Kotlin", "Compose", "MVVM"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Web Platform",
    description: "Full-stack web application with React & Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

function App() {
  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.background}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.star,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        style={styles.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          style={styles.avatar}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
          }}
        >
          KA
        </motion.div>
        <h1 style={styles.name}>Ar Asiful Islam</h1>
        <motion.p
          style={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-Stack Mobile & Web Developer
        </motion.p>
        <motion.div
          style={styles.tags}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span style={styles.tag}>🚀 Flutter</span>
          <span style={styles.tag}>⚡ Kotlin</span>
          <span style={styles.tag}>💻 Java</span>
          <span style={styles.tag}>🌐 React</span>
        </motion.div>
      </motion.header>

      {/* Skills Section */}
      <section style={styles.section}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          🛠️ Tech Stack
        </motion.h2>

        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            style={styles.skillCategory}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3 style={styles.categoryTitle}>
              {category === "mobile" && "📱 Mobile Development"}
              {category === "web" && "🌐 Web Development"}
              {category === "database" && "🗄️ Databases"}
            </h3>
            <div style={styles.skillGrid}>
              {skillList.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  style={{ ...styles.skillCard, borderColor: skill.color }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 30px ${skill.color}40`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span style={{ ...styles.skillIcon, color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span style={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          🏆 Featured Projects
        </motion.h2>
        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{ ...styles.projectCard, background: project.gradient }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <div style={styles.projectTags}>
                {project.tech.map((t) => (
                  <span key={t} style={styles.projectTag}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.section}>
        <motion.div
          style={styles.statsContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div style={styles.stat}>
            <motion.span
              style={styles.statNumber}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              50+
            </motion.span>
            <span style={styles.statLabel}>Projects</span>
          </div>
          <div style={styles.stat}>
            <motion.span
              style={styles.statNumber}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              100+
            </motion.span>
            <span style={styles.statLabel}>Commits</span>
          </div>
          <div style={styles.stat}>
            <motion.span
              style={styles.statNumber}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              20+
            </motion.span>
            <span style={styles.statLabel}>Skills</span>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📬 Connect With Me
        </motion.h2>
        <div style={styles.socialLinks}>
          {[
            { icon: <FaGithub />, label: "GitHub", color: "#ffffff" },
            { icon: <FaLinkedin />, label: "LinkedIn", color: "#0077B5" },
            { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2" },
            { icon: <FaEnvelope />, label: "Email", color: "#EA4335" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href="#"
              style={{ ...styles.socialLink, color: social.color }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        style={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>⭐ Star this repo if you like it!</p>
        <p style={styles.copyright}>
          © 2026 Ar Asiful Islam. Built with React & 💜
        </p>
      </motion.footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0d1117",
    color: "#ffffff",
    position: "relative",
    overflow: "hidden",
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
  star: {
    position: "absolute",
    width: "3px",
    height: "3px",
    background: "#ffffff",
    borderRadius: "50%",
  },
  header: {
    textAlign: "center",
    padding: "80px 20px 40px",
    position: "relative",
    zIndex: 1,
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0 auto 20px",
    boxShadow: "0 0 40px rgba(102, 126, 234, 0.5)",
  },
  name: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  title: {
    fontSize: "20px",
    color: "#8b949e",
    marginBottom: "20px",
  },
  tags: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  tag: {
    padding: "8px 16px",
    background: "rgba(102, 126, 234, 0.2)",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#c9d1d9",
    border: "1px solid rgba(102, 126, 234, 0.3)",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
  },
  skillCategory: {
    marginBottom: "30px",
  },
  categoryTitle: {
    fontSize: "18px",
    color: "#8b949e",
    marginBottom: "15px",
  },
  skillGrid: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 30px",
    background: "rgba(22, 27, 34, 0.8)",
    borderRadius: "16px",
    border: "2px solid",
    minWidth: "120px",
    transition: "all 0.3s ease",
  },
  skillIcon: {
    fontSize: "32px",
    marginBottom: "8px",
  },
  skillName: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#c9d1d9",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  projectCard: {
    padding: "30px",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  projectTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#ffffff",
  },
  projectDesc: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "15px",
  },
  projectTags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  projectTag: {
    padding: "4px 12px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    fontSize: "12px",
    color: "#ffffff",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    display: "block",
    fontSize: "48px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statLabel: {
    fontSize: "16px",
    color: "#8b949e",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  socialLink: {
    fontSize: "36px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#8b949e",
    position: "relative",
    zIndex: 1,
  },
  copyright: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default App;
