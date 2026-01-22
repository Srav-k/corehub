import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* 🔄 CONTINUOUS floating animation for skill cards */
const skillFloat = (index) => ({
  animate: {
    y: [0, -28, 0],
    x: [0, index % 2 === 0 ? 6 : -6, 0],
    transition: {
      duration: 4 + index,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const floating = {
  animate: {
    y: [0, -25, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ================= COMPONENT ================= */
export default function About() {
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* FLOATING BACKGROUND SHAPES */}
      <motion.div style={styles.blob1} {...floating} />
      <motion.div
        style={styles.blob2}
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* ================= MOVING BANNER ================= */}
      <div style={styles.bannerWrapper}>
        <motion.div
          style={styles.bannerTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...bannerImages, ...bannerImages].map((img, index) => (
            <div
              key={index}
              style={{
                ...styles.bannerImage,
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </motion.div>

        <div style={styles.bannerOverlay}>
          <h1 style={styles.bannerTitle}>
            About <span style={styles.highlight}>CoreHub</span>
          </h1>
          <p style={styles.bannerSubtitle}>
            Where skills meet innovation & careers begin
          </p>
        </div>
      </div>

      {/* ================= HERO TEXT ================= */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        style={styles.heroText}
      >
        CoreHub transforms learners into{" "}
        <strong>industry-ready professionals</strong> through practical,
        job-focused training.
      </motion.p>

      {/* ================= INTRO CARD ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.03 }}
        style={styles.card}
      >
        <p style={styles.text}>
          <strong>CoreHub</strong> is a next-generation learning platform focused
          on <strong>real-world skills</strong> and industry exposure.
        </p>
      </motion.div>

      {/* ================= SKILLS ================= */}
      <h2 style={styles.mainSubHeading}>Most In-Demand Skills</h2>

      <div style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            {...skillFloat(index)} // ✅ FIX: function called correctly
            whileHover={{ scale: 1.08 }}
            style={styles.skillCard}
          >
            <span style={styles.skillIcon}>{skill.icon}</span>
            <h3 style={styles.skillTitle}>{skill.title}</h3>
            <p style={styles.skillDesc}>{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ================= CLOSING ================= */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={styles.closingCard}
      >
        <h2 style={styles.closingTitle}>Build Your Future with CoreHub 🚀</h2>
        <p style={styles.text}>Empowering careers through real skills.</p>
      </motion.div>
    </motion.div>
  );
}

/* ================= DATA ================= */
const bannerImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];

const skills = [
  { icon: "🌐", title: "Web Development", desc: "HTML, CSS, React" },
  { icon: "📊", title: "Data Science", desc: "Python & Analysis" },
  { icon: "🤖", title: "AI & ML", desc: "Smart systems" },
  { icon: "☁️", title: "Cloud", desc: "AWS & DevOps" },
];

/* ================= STYLES ================= */
const styles = {
  container: {
    position: "relative",
    background:
      "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)", // ✅ light background
    overflow: "hidden",
  },

  blob1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(255,127,80,0.25)",
    borderRadius: "50%",
    top: "10%",
    left: "-100px",
    filter: "blur(90px)",
  },
  blob2: {
    position: "absolute",
    width: "280px",
    height: "280px",
    background: "rgba(231,111,81,0.25)",
    borderRadius: "50%",
    bottom: "15%",
    right: "-80px",
    filter: "blur(100px)",
  },

  bannerWrapper: { height: "420px", position: "relative", overflow: "hidden" },
  bannerTrack: { display: "flex", width: "200%", height: "100%" },
  bannerImage: { width: "25%", backgroundSize: "cover" },

  bannerOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  bannerTitle: { fontSize: "48px" },
  bannerSubtitle: { fontSize: "20px" },
  highlight: { color: "#FF7F50" },

  heroText: {
    textAlign: "center",
    margin: "50px auto",
    maxWidth: "800px",
    fontSize: "35px",
    color: "#0f172a", // ✅ readable on light bg
  },

  card: {
    backgroundColor: "#ffffff",
    margin: "0 12% 60px",
    padding: "35px",
    borderRadius: "22px",
    fontSize: "20px",
  },

  mainSubHeading: {
    textAlign: "center",
    fontSize: "34px",
    marginBottom: "40px",
    color: "#0f172a",
  },

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "30px",
    padding: "0 12%",
  },

  skillCard: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
  },

  skillIcon: { fontSize: "40px" },
  skillTitle: { color: "#FF7F50" },

  closingCard: {
    marginTop: "80px",
    padding: "60px",
    background:
      "linear-gradient(270deg,#FF7F50,#E76F51,#FF7F50)",
    backgroundSize: "400% 400%",
    color: "#fff",
    textAlign: "center",
  },

  closingTitle: { fontSize: "32px" },
};
