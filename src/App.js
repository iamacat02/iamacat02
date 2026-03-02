import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
  FaBolt,
  FaLayerGroup,
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      {/* Always Animated Background */}
      <div style={styles.background}>
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.orb,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, 40, 0],
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated grid */}
        <div style={styles.gridBackground}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              style={{
                ...styles.gridLine,
                left: `${i * 5}%`,
              }}
              animate={{
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 2 + i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            style={{ ...styles.content, y: mousePosition.y * 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <section style={styles.hero}>
              {/* Animated logo */}
              <motion.div
                style={styles.logoContainer}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                }}
              >
                <motion.div
                  style={styles.logoGlow}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(102, 126, 234, 0.6)",
                      "0 0 60px rgba(240, 147, 251, 0.8)",
                      "0 0 90px rgba(102, 126, 234, 0.6)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div style={styles.logo}>AA</div>
              </motion.div>

              {/* Name with continuous glow */}
              <motion.h1
                style={styles.name}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(102, 126, 234, 0.8)",
                    "0 0 40px rgba(240, 147, 251, 1)",
                    "0 0 60px rgba(245, 87, 108, 0.8)",
                    "0 0 40px rgba(102, 126, 234, 0.8)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Ar Asiful Islam
              </motion.h1>

              {/* Animated title */}
              <motion.p
                style={styles.title}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Full-Stack Mobile & Web Developer
              </motion.p>

              {/* Always bouncing tags */}
              <div style={styles.tags}>
                {[
                  "Flutter",
                  "Kotlin",
                  "Java",
                  "React",
                  "Node.js",
                  "Python",
                ].map((tag, i) => (
                  <motion.span
                    key={tag}
                    style={styles.tag}
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      y: { duration: 1.5, repeat: Infinity, delay: i * 0.15 },
                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                      },
                    }}
                    whileHover={{ scale: 1.15, rotate: Math.random() * 6 - 3 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Scrolling indicator */}
              <motion.div
                style={styles.scrollIndicator}
                animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span>↓</span>
              </motion.div>
            </section>

            {/* Skills Section */}
            <section style={styles.section}>
              <motion.h2
                style={styles.sectionTitle}
                animate={{
                  textShadow: [
                    "0 0 10px rgba(102, 126, 234, 0.5)",
                    "0 0 20px rgba(240, 147, 251, 0.8)",
                    "0 0 10px rgba(102, 126, 234, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🛠️ Tech Stack
              </motion.h2>

              {Object.entries(skills).map(
                ([category, skillList], categoryIndex) => (
                  <motion.div key={category} style={styles.skillCategory}>
                    <h3 style={styles.categoryTitle}>
                      {category === "mobile" && "📱 Mobile Development"}
                      {category === "web" && "🌐 Web Development"}
                      {category === "database" && "🗄️ Databases"}
                    </h3>
                    <div style={styles.skillGrid}>
                      {skillList.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          style={{
                            ...styles.skillCard,
                            borderColor: skill.color,
                          }}
                          animate={{
                            y: [0, -12, 0],
                            rotate: [0, 3, -3, 0],
                          }}
                          transition={{
                            y: {
                              duration: 2 + index * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                            rotate: {
                              duration: 4 + index * 0.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                          whileHover={{
                            scale: 1.2,
                            boxShadow: `0 0 40px ${skill.shadow}`,
                            rotate: 0,
                          }}
                        >
                          <motion.span
                            style={{ ...styles.skillIcon, color: skill.color }}
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
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
                ),
              )}
            </section>

            {/* Projects Section */}
            <section style={styles.section}>
              <motion.h2
                style={styles.sectionTitle}
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 10px rgba(102, 126, 234, 0.5)",
                    "0 0 25px rgba(240, 147, 251, 0.9)",
                    "0 0 10px rgba(102, 126, 234, 0.5)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                🏆 Featured Projects
              </motion.h2>
              <div style={styles.projectGrid}>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    style={{
                      ...styles.projectCard,
                      background: project.gradient,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      rotate: {
                        duration: 5 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
                    }}
                  >
                    <h3 style={styles.projectTitle}>{project.title}</h3>
                    <p style={styles.projectDesc}>{project.description}</p>
                    <div style={styles.projectTags}>
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          style={styles.projectTag}
                          animate={{
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            scale: {
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            },
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
              <div style={styles.statsContainer}>
                {[
                  {
                    number: "50+",
                    label: "Projects",
                    icon: <FaCode />,
                    color: "#667eea",
                  },
                  {
                    number: "500+",
                    label: "Commits",
                    icon: <FaGithub />,
                    color: "#f093fb",
                  },
                  {
                    number: "20+",
                    label: "Skills",
                    icon: <FaBolt />,
                    color: "#f5576c",
                  },
                  {
                    number: "100%",
                    label: "Passion",
                    icon: <FaHeart />,
                    color: "#ff6b6b",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    style={styles.stat}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      y: {
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <motion.span
                      style={{ ...styles.statIcon, color: stat.color }}
                      animate={{
                        rotate: [0, 20, -20, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        },
                      }}
                    >
                      {stat.icon}
                    </motion.span>
                    <motion.span
                      style={styles.statNumber}
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(102, 126, 234, 0.5)",
                          "0 0 20px rgba(240, 147, 251, 0.8)",
                          "0 0 10px rgba(102, 126, 234, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.number}
                    </motion.span>
                    <span style={styles.statLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section style={styles.section}>
              <motion.h2
                style={styles.sectionTitle}
                animate={{
                  textShadow: [
                    "0 0 10px rgba(102, 126, 234, 0.5)",
                    "0 0 25px rgba(240, 147, 251, 0.9)",
                    "0 0 10px rgba(102, 126, 234, 0.5)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                📬 Connect With Me
              </motion.h2>
              <div style={styles.socialLinks}>
                {[
                  {
                    icon: <FaGithub />,
                    color: "#ffffff",
                    href: "https://github.com/iamacat02",
                  },
                  {
                    icon: <FaLinkedin />,
                    color: "#0077B5",
                    href: "https://linkedin.com/in/iamacat02",
                  },
                  {
                    icon: <FaTwitter />,
                    color: "#1DA1F2",
                    href: "https://twitter.com/iamacat02",
                  },
                  {
                    icon: <FaEnvelope />,
                    color: "#EA4335",
                    href: "mailto:iamacat02@email.com",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    style={{ ...styles.socialLink, color: social.color }}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      y: {
                        duration: 1.5 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 1.5 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.5,
                      rotate: 15,
                      boxShadow: `0 0 40px ${social.color}90`,
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
              <motion.p
                style={styles.starText}
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 5px rgba(255, 215, 0, 0.5)",
                    "0 0 15px rgba(255, 215, 0, 0.9)",
                    "0 0 5px rgba(255, 215, 0, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐ Star this repo if you like it!
              </motion.p>
              <motion.p
                style={styles.copyright}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                © 2026 Ar Asiful Islam • Built with React &{" "}
                <FaHeart style={{ color: "#ff6b6b", marginLeft: 4 }} />
              </motion.p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0d1117 0%, #0a0e14 50%, #0d1117 100%)",
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
  orb: {
    position: "absolute",
    width: "clamp(150px, 20vw, 300px)",
    height: "clamp(150px, 20vw, 300px)",
    borderRadius: "50%",
  },
  gridBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  gridLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "1px",
    background: "linear-gradient(to bottom, transparent, #667eea, transparent)",
  },
  particle: {
    position: "absolute",
    background: "linear-gradient(135deg, #667eea, #f093fb)",
    borderRadius: "50%",
  },
  content: {
    position: "relative",
    zIndex: 1,
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  logoContainer: {
    position: "relative",
    marginBottom: "35px",
  },
  logoGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  logo: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "bold",
    position: "relative",
    zIndex: 1,
  },
  name: {
    fontSize: "clamp(38px, 9vw, 72px)",
    fontWeight: "900",
    marginBottom: "18px",
    background:
      "linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  title: {
    fontSize: "clamp(18px, 4vw, 26px)",
    color: "#8b949e",
    marginBottom: "30px",
  },
  tags: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "50px",
  },
  tag: {
    padding: "12px 24px",
    background: "rgba(102, 126, 234, 0.15)",
    borderRadius: "30px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#c9d1d9",
    border: "1px solid rgba(102, 126, 234, 0.3)",
    cursor: "pointer",
  },
  scrollIndicator: {
    fontSize: "32px",
    color: "#667eea",
  },
  section: {
    padding: "90px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(30px, 6vw, 46px)",
    fontWeight: "800",
    marginBottom: "45px",
    textAlign: "center",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  skillCategory: {
    marginBottom: "45px",
  },
  categoryTitle: {
    fontSize: "22px",
    color: "#8b949e",
    marginBottom: "22px",
    textAlign: "center",
  },
  skillGrid: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px 38px",
    background: "rgba(22, 27, 34, 0.85)",
    borderRadius: "22px",
    border: "2px solid",
    minWidth: "140px",
    cursor: "pointer",
  },
  skillIcon: {
    fontSize: "40px",
    marginBottom: "12px",
  },
  skillName: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#c9d1d9",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
    gap: "32px",
  },
  projectCard: {
    padding: "38px",
    borderRadius: "26px",
    cursor: "pointer",
  },
  projectTitle: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "14px",
    color: "#ffffff",
  },
  projectDesc: {
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "20px",
  },
  projectTags: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  projectTag: {
    padding: "7px 16px",
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: "18px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#ffffff",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(35px, 10vw, 90px)",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
    cursor: "pointer",
  },
  statIcon: {
    display: "block",
    fontSize: "36px",
    marginBottom: "12px",
  },
  statNumber: {
    display: "block",
    fontSize: "clamp(40px, 7vw, 62px)",
    fontWeight: "900",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statLabel: {
    fontSize: "17px",
    color: "#8b949e",
    fontWeight: "500",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(30px, 8vw, 60px)",
  },
  socialLink: {
    fontSize: "clamp(36px, 7vw, 50px)",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "55px 20px",
    color: "#8b949e",
    background: "rgba(0,0,0,0.25)",
  },
  starText: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "18px",
    cursor: "pointer",
  },
  copyright: {
    fontSize: "15px",
  },
};

export default App;
