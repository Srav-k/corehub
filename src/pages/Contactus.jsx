import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fdfbfb,#ebedee)",
    },
    
   header: {
    padding: "110px 20px 90px",
    textAlign: "center",
    background: "linear-gradient(135deg, #fde68a, #fdba74, #fed7aa)",
    marginBottom: "60px",
    color: "#1f2937",
    position: "relative",
    overflow: "hidden",
   },


    floatingCircle: {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.18)",
      pointerEvents: "none",
    },
    infoGrid: {
      maxWidth: "1100px",
      margin: "0 auto 90px",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "26px",
    },
    infoCard: {
      background: "linear-gradient(135deg,#ffffff,#fff5ec)",
      padding: "32px",
      borderRadius: "18px",
      textAlign: "center",
      boxShadow: "0 14px 30px rgba(0,0,0,.12)",
    },
    icon: {
      fontSize: "30px",
      color: "#ff7a18",
      marginBottom: "12px",
    },
    wrapper: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 20px 120px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
      gap: "40px",
    },
    cardForm: {
      background: "linear-gradient(135deg,#e0f2fe,#f0f9ff)",
      borderRadius: "22px",
      padding: "40px",
      boxShadow: "0 18px 45px rgba(0,0,0,.14)",
    },
    cardMap: {
      background: "linear-gradient(135deg,#fdf4ff,#fae8ff)",
      borderRadius: "22px",
      padding: "30px",
      boxShadow: "0 18px 45px rgba(0,0,0,.14)",
    },
    form: {
      maxWidth: "420px",
      margin: "0 auto",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      marginBottom: "16px",
    },
    textarea: {
      width: "100%",
      height: "140px",
      padding: "14px 16px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      marginBottom: "22px",
    },
    button: {
      width: "100%",
      padding: "15px",
      borderRadius: "14px",
      border: "none",
      background: "#ff7a18",
      color: "#fff",
      fontWeight: 600,
      cursor: "pointer",
    },
    map: {
      width: "100%",
      height: "260px",
      borderRadius: "16px",
      border: "none",
    },
    socials: {
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      marginTop: "26px",
    },
    socialIcon: {
      fontSize: "18px",
      padding: "14px",
      background: "#fff",
      color: "#ff7a18",
      borderRadius: "50%",
      boxShadow: "0 6px 18px rgba(0,0,0,.18)",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.header}>
        {/* Floating background circles */}
        <motion.div
          style={{ ...styles.floatingCircle, width: 160, height: 160, top: "15%", left: "8%" }}
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ ...styles.floatingCircle, width: 220, height: 220, top: "50%", left: "70%" }}
          animate={{ y: [0, -50, 0], x: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ ...styles.floatingCircle, width: 90, height: 90, top: "65%", left: "30%" }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ ...styles.floatingCircle, width: 130, height: 130, top: "20%", right: "10%" }}
          animate={{ y: [0, -35, 0], x: [0, -15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header content */}
        <motion.h1 initial={{ y: -30 }} animate={{ y: 0 }}>
          Contact Us
        </motion.h1>
        <motion.p initial={{ y: 20 }} animate={{ y: 0 }}>
          We’d love to hear from you
        </motion.p>
      </section>

      {/* INFO CARDS */}
      <div style={styles.infoGrid}>
        {[
          { icon: <FaPhoneAlt />, title: "Phone", text: "+91 9000000123" },
          { icon: <FaEnvelope />, title: "Email", text: "info@techlynxinnovations.com" },
          { icon: <FaMapMarkerAlt />, title: "Location", text: "Gachibowli, Hyderabad" },
          { icon: <FaClock />, title: "Working Hours", text: "Mon – Fri | 9 AM – 6:30 PM" },
        ].map((item, i) => (
          <motion.div
            key={i}
            style={styles.infoCard}
            animate={{ y: [0, -21, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ y: -16 }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* FORM & MAP */}
      <div style={styles.wrapper}>
        <motion.div style={styles.cardForm}>
          <form style={styles.form} onSubmit={handleSubmit}>
            {["name", "email", "subject"].map((f) => (
              <input
                key={f}
                name={f}
                placeholder={`Your ${f}`}
                value={formData[f]}
                onChange={handleChange}
                style={styles.input}
              />
            ))}
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
            />
            <motion.button whileHover={{ scale: 1.05 }} style={styles.button}>
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div style={styles.cardMap}>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Gachibowli,Hyderabad&output=embed"
            style={styles.map}
          />
          <div style={styles.socials}>
            {[FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon style={styles.socialIcon} />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
