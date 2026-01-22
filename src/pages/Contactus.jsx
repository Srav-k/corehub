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

  return (
    <div className="contact-container">
      <style>{`
        /* 1. Global Setup */
        * {
          box-sizing: border-box; /* Crucial for preventing horizontal overflow */
        }
        .contact-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #fdfbfb, #ebedee);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          width: 100%;
        }

        /* 2. Header Section */
        .contact-header {
          padding: clamp(80px, 15vh, 120px) 20px clamp(60px, 10vh, 90px);
          text-align: center;
          background: linear-gradient(135deg, #fde68a, #fdba74, #fed7aa);
          margin-bottom: 60px;
          color: #1f2937;
          position: relative;
          overflow: hidden;
        }
        .contact-header h1 { 
          font-size: clamp(2.5rem, 6vw, 4rem); 
          margin-bottom: 15px; 
          font-weight: 800;
        }
        .contact-header p { 
          font-size: clamp(1rem, 2.5vw, 1.4rem); 
          opacity: 0.9; 
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          pointer-events: none;
          z-index: 1;
        }

        /* 3. Info Grid Section */
        .info-grid {
          max-width: 1200px;
          margin: 0 auto 80px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }
        .info-card {
          background: #ffffff;
          padding: 40px 25px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }
        .card-icon {
          font-size: 35px;
          color: #ff7a18;
          margin-bottom: 15px;
        }
        .info-card h4 { font-size: 1.25rem; margin-bottom: 10px; color: #111827; }
        .info-card p { color: #4b5563; font-size: 1rem; line-height: 1.5; }

        /* 4. Form & Map Section - FIXED ALIGNMENT */
        .form-map-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 100px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: stretch;
        }
        .card-form {
          background: #e0f2fe;
          border-radius: 25px;
          padding: clamp(20px, 5vw, 50px); /* Responsive padding */
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        .card-map {
          background: #fdf4ff;
          border-radius: 25px;
          padding: clamp(20px, 4vw, 35px); /* Responsive padding */
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Form Styling */
        .contact-form { width: 100%; }
        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 20px;
          font-size: 1rem;
          background: #fff;
          outline: none;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border-color: #ff7a18;
          box-shadow: 0 0 0 3px rgba(255, 122, 24, 0.1);
        }
        .contact-form textarea { height: 160px; resize: vertical; }
        .send-btn {
          width: 100%;
          padding: 18px;
          border-radius: 15px;
          border: none;
          background: #ff7a18;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* Socials & Map */
        .map-iframe {
          width: 100%;
          height: 300px;
          border-radius: 18px;
          border: none;
        }
        .social-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 30px;
        }
        .social-icon-box {
          font-size: 20px;
          width: 50px;
          height: 50px;
          background: #fff;
          color: #ff7a18;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ================= MEDIA QUERIES ================= */

        @media (max-width: 1024px) {
          .form-map-wrapper {
            grid-template-columns: 1fr; /* Stacks cards vertically */
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .card-form, .card-map { 
            padding: 20px; /* Reduces padding to give inputs more room */
          }
        }

        @media (max-width: 500px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .contact-header h1 { font-size: 2.2rem; }
          .social-icon-box { width: 45px; height: 45px; font-size: 18px; }
        }
      `}</style>

      {/* HEADER SECTION */}
      <section className="contact-header">
        <motion.div className="floating-circle" style={{ width: 160, height: 160, top: "15%", left: "8%" }} animate={{ y: [0, -40, 0], x: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="floating-circle" style={{ width: 220, height: 220, top: "50%", left: "70%" }} animate={{ y: [0, -50, 0], x: [0, -25, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
        <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Contact Us</motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>We’d love to hear from you</motion.p>
      </section>

      {/* INFO CARDS SECTION */}
      <div className="info-grid">
        {[
          { icon: <FaPhoneAlt />, title: "Phone", text: "+91 9000000123" },
          { icon: <FaEnvelope />, title: "Email", text: "info@techlynxinnovations.com" },
          { icon: <FaMapMarkerAlt />, title: "Location", text: "Gachibowli, Hyderabad" },
          { icon: <FaClock />, title: "Working Hours", text: "Mon – Fri | 9 AM – 6:30 PM" },
        ].map((item, i) => (
          <motion.div key={i} className="info-card" whileHover={{ y: -10 }}>
            <div className="card-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* FORM & MAP WRAPPER */}
      <div className="form-map-wrapper">
        <motion.div className="card-form" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            {["name", "email", "subject"].map((f) => (
              <input
                key={f}
                name={f}
                type={f === "email" ? "email" : "text"}
                placeholder={`Your ${f.charAt(0).toUpperCase() + f.slice(1)}`}
                value={formData[f]}
                onChange={handleChange}
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="send-btn">
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div className="card-map" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <iframe
            className="map-iframe"
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.752319087093!2d78.3444747759654!3d17.423647401103683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f3f3f3f3f3%3A0x7f3f3f3f3f3f3f3f!2sGachibowli%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
          />
          <div className="social-row">
            {[FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2, rotate: 8 }} className="social-icon-box">
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}