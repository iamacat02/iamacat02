import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  FaAndroid,
  FaCode,
  FaRocket,
  FaHeart,
  FaStar,
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
    {
      name: "Flutter",
      icon: <FaFlutter />,
      color: "#02569B",
      shadow: "rgba(2, 86, 155, 0.6)",
    },
    {
      name: "Kotlin",
      icon: <SiKotlin />,
      color: "#7F52FF",
      shadow: "rgba(127, 82, 255, 0.6)",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "#ED8B00",
      shadow: "rgba(237, 139, 0, 0.6)",
    },
    {
      name: "Android",
      icon: <FaAndroid />,
      color: "#3DDC84",
      shadow: "rgba(61, 220, 132, 0.6)",
    },
  ],
  web: [
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
      shadow: "rgba(97, 218, 251, 0.6)",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
      shadow: "rgba(51, 153, 51, 0.6)",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "#3776AB",
      shadow: "rgba(55, 118, 171, 0.6)",
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47A248",
      shadow: "rgba(71, 162, 72, 0.6)",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
      shadow: "rgba(68, 121, 161, 0.6)",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#4169E1",
      shadow: "rgba(65, 105, 225, 0.6)",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
      shadow: "rgba(255, 202, 40, 0.6)",
    },
  ],
};

const projects = [
  {
    title: "Cross-Platform App",
    description: "Beautiful mobile application built with Flutter and Firebase",
    tech: ["Flutter", "Firebase", "MVVM"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Android Native",
    description: "Native Android app with Jetpack Compose",
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
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.background}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Shapes */}
        <motion.div
          style={styles.floatingShape1}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity },
          }}
        />
        <motion.div
          style={styles.floatingShape2}
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ ...styles.hero, y: mousePosition.y }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          style={styles.avatarContainer}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 200 },
            },
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <motion.div
            style={styles.avatarGlow}
            animate={{
              boxShadow: [
                "0 0 20px rgba(102, 126, 234, 0.5)",
                "0 0 40px rgba(102, 126, 234, 0.8)",
                "0 0 60px rgba(240, 147, 251, 0.6)",
                "0 0 40px rgba(102, 126, 234, 0.8)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            style={styles.avatar}
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span style={styles.avatarText}>AA</span>
          </motion.div>
        </motion.div>

        <motion.h1
          style={styles.name}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            },
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px rgba(102, 126, 234, 0.5)",
                "0 0 20px rgba(102, 126, 234, 0.8)",
                "0 0 30px rgba(240, 147, 251, 0.6)",
                "0 0 20px rgba(102, 126, 234, 0.8)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ar Asiful Islam
          </motion.span>
        </motion.h1>

        <motion.p
          style={styles.title}
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { delay: 0.3 } },
          }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 Full-Stack Mobile & Web Developer
          </motion.span>
        </motion.p>

        <motion.div
          style={styles.tags}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { delay: 0.5 } },
          }}
        >
          {["Flutter", "Kotlin", "Java", "React", "Node.js", "Python"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                style={styles.tag}
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                }}
              >
                {tag}
              </motion.span>
            ),
          )}
        </motion.div>

        <motion.div
          style={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <motion.div style={styles.scrollArrow} animate={{ rotate: -45 }}>
            ↓
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section style={styles.section}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          🛠️ Tech Stack
        </motion.h2>

        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            style={styles.skillCategory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
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
                    scale: 1.15,
                    rotate: Math.random() * 10 - 5,
                    boxShadow: `0 0 30px ${skill.shadow}`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 2, repeat: Infinity, delay: index * 0.1 },
                  }}
                >
                  <motion.span
                    style={{ ...styles.skillIcon, color: skill.color }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {skill.icon}
                  </motion.span>
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
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          🏆 Featured Projects
        </motion.h2>
        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{ ...styles.projectCard, background: project.gradient }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                style={styles.projectTitle}
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <div style={styles.projectTags}>
                {project.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    style={styles.projectTag}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                    }}
                  >
                    {t}
                  </motion.span>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          {[
            { number: "50+", label: "Projects", icon: <FaCode /> },
            { number: "500+", label: "Commits", icon: <FaGithub /> },
            { number: "20+", label: "Skills", icon: <FaRocket /> },
            { number: "100%", label: "Passion", icon: <FaHeart /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              style={styles.stat}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                style={styles.statIcon}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.icon}
              </motion.span>
              <motion.span
                style={styles.statNumber}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {stat.number}
              </motion.span>
              <span style={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          📬 Connect With Me
        </motion.h2>
        <div style={styles.socialLinks}>
          {[
            {
              icon: <FaGithub />,
              label: "GitHub",
              color: "#ffffff",
              href: "https://github.com/iamacat02",
            },
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              color: "#0077B5",
              href: "https://linkedin.com/in/iamacat02",
            },
            {
              icon: <FaTwitter />,
              label: "Twitter",
              color: "#1DA1F2",
              href: "https://twitter.com/iamacat02",
            },
            {
              icon: <FaEnvelope />,
              label: "Email",
              color: "#EA4335",
              href: "mailto:iamacat02@email.com",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              style={{ ...styles.socialLink, color: social.color }}
              whileHover={{
                scale: 1.4,
                rotate: 10,
                boxShadow: `0 0 30px ${social.color}80`,
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
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
        viewport={{ once: false }}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <p style={styles.starText}>⭐ Star this repo if you like it!</p>
        </motion.div>
        <motion.p
          style={styles.copyright}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          © 2026 Ar Asiful Islam. Built with React &{" "}
          <FaHeart style={{ color: "#ff6b6b" }} />
        </motion.p>
      </motion.footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
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
    overflow: "hidden",
  },
  particle: {
    position: "absolute",
    background: "linear-gradient(135deg, #667eea, #f093fb)",
    borderRadius: "50%",
  },
  floatingShape1: {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "300px",
    height: "300px",
    background:
      "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
  },
  floatingShape2: {
    position: "absolute",
    bottom: "20%",
    right: "10%",
    width: "200px",
    height: "200px",
    background:
      "radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    position: "relative",
    zIndex: 1,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: "30px",
  },
  avatarGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "140px",
    height: "140px",
    borderRadius: "50%",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  avatarText: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  name: {
    fontSize: "clamp(36px, 8vw, 64px)",
    fontWeight: "900",
    marginBottom: "15px",
    background:
      "linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  title: {
    fontSize: "clamp(18px, 4vw, 24px)",
    color: "#8b949e",
    marginBottom: "25px",
  },
  tags: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "40px",
  },
  tag: {
    padding: "10px 20px",
    background: "rgba(102, 126, 234, 0.15)",
    borderRadius: "25px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#c9d1d9",
    border: "1px solid rgba(102, 126, 234, 0.3)",
    cursor: "pointer",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    color: "#8b949e",
    fontSize: "14px",
  },
  scrollArrow: {
    fontSize: "20px",
  },
  section: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: "clamp(28px, 5vw, 40px)",
    fontWeight: "800",
    marginBottom: "40px",
    textAlign: "center",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  skillCategory: {
    marginBottom: "40px",
  },
  categoryTitle: {
    fontSize: "20px",
    color: "#8b949e",
    marginBottom: "20px",
    textAlign: "center",
  },
  skillGrid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px 35px",
    background: "rgba(22, 27, 34, 0.9)",
    borderRadius: "20px",
    border: "2px solid",
    minWidth: "130px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  skillIcon: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  skillName: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#c9d1d9",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  projectCard: {
    padding: "35px",
    borderRadius: "24px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  projectTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffffff",
  },
  projectDesc: {
    fontSize: "15px",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "18px",
  },
  projectTags: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  projectTag: {
    padding: "6px 14px",
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: "15px",
    fontSize: "13px",
    fontWeight: "500",
    color: "#ffffff",
    cursor: "pointer",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(30px, 8vw, 80px)",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
    cursor: "pointer",
  },
  statIcon: {
    display: "block",
    fontSize: "32px",
    marginBottom: "10px",
    color: "#667eea",
  },
  statNumber: {
    display: "block",
    fontSize: "clamp(36px, 6vw, 56px)",
    fontWeight: "900",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statLabel: {
    fontSize: "16px",
    color: "#8b949e",
    fontWeight: "500",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(25px, 6vw, 50px)",
  },
  socialLink: {
    fontSize: "clamp(32px, 6vw, 44px)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "50px 20px",
    color: "#8b949e",
    position: "relative",
    zIndex: 1,
    background: "rgba(0,0,0,0.2)",
  },
  starText: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px",
    cursor: "pointer",
  },
  copyright: {
    fontSize: "14px",
  },
};

export default App;
