import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaInfoCircle,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import Feedback from "./FeedbackForm";

export default function Footer() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      <style>
        {`
          .footer-link:hover {
            text-decoration: underline;
          }

          .nav-icon:hover {
            transform: translateY(-2px);
          }

          .social-icon:hover {
            transform: scale(1.15);
          }
        `}
      </style>

      <footer style={styles.footer}>
        {/* TOP POLICY BAR */}
        <div style={styles.policyBar}>
          <div style={styles.policyLinks}>
            <a href="/terms" style={styles.policyText} className="footer-link">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/privacy" style={styles.policyText} className="footer-link">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/refund" style={styles.policyText} className="footer-link">
              Return-Refund Policy
            </a>
          </div>

          {/* HOME ICON */}
          <a href="/" style={styles.homeIcon} title="Home">
            <FaHome />
          </a>
        </div>

        {/* HR BELOW POLICY BAR */}
        <hr style={styles.policyHr} />

        {/* MAIN FOOTER CONTENT */}
        <div style={styles.container}>
          {/* ABOUT */}
          <div style={styles.column}>
            <h3 style={styles.heading}>CoreHub</h3>
            <p style={styles.text}>
              CoreHub is your trusted learning platform for coding, technology,
              and professional skill development. Beginner-friendly and
              industry-ready courses designed for success.
            </p>
            <button
              style={styles.feedbackBtn}
              onClick={() => setShowFeedback(true)}
            >
              Give Feedback
            </button>
          </div>

          {/* QUICK LINKS WITH ICONS */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Quick Links</h3>

            <a href="/" style={styles.navLink} className="nav-icon">
              <FaHome /> Home
            </a>
            <a href="/about" style={styles.navLink} className="nav-icon">
              <FaInfoCircle /> About Us
            </a>
            <a href="/courses" style={styles.navLink} className="nav-icon">
              <FaBook /> Courses
            </a>
            <a href="/contact" style={styles.navLink} className="nav-icon">
              <FaEnvelope /> Contact Us
            </a>
          </div>

          {/* CONTACT */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Contact Us</h3>
            <p style={styles.text}>📧 corehub.support@gmail.com</p>
            <p style={styles.text}>📞 +91 9000000123</p>
            <p style={styles.text}>📍 Gachibowli, Hyderabad, India</p>
          </div>

          {/* SOCIAL */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook size={26} className="social-icon" style={styles.icon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram size={26} className="social-icon" style={styles.icon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter size={26} className="social-icon" style={styles.icon} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={26} className="social-icon" style={styles.icon} />
              </a>
            </div>
          </div>
        </div>

        <hr style={styles.hr} />

        <p style={styles.copy}>
          © {new Date().getFullYear()} CoreHub. All Rights Reserved.
        </p>

        {showFeedback && <Feedback onClose={() => setShowFeedback(false)} />}
      </footer>
    </>
  );
}

/* STYLES (NO COLOR CHANGES) */
const styles = {
  footer: {
    background: "linear-gradient(to right, #FFECD2, #FCB69F)",
    color: "#000000",
    padding: "45px 20px",
    marginTop: "40px",
  },

  policyBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  policyLinks: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
  },

  policyText: {
    color: "#000000",
    textDecoration: "none",
  },

  homeIcon: {
    fontSize: "20px",
    color: "#000000",
  },

  policyHr: {
    border: "none",
    borderTop: "1px solid rgba(0,0,0,0.25)",
    margin: "20px 0 30px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1200px",
    margin: "auto",
  },

  column: {
    flex: "1 1 240px",
  },

  heading: {
    fontSize: "20px",
    marginBottom: "12px",
    fontWeight: "700",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: "0.9",
  },

  navLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#000000",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "15px",
  },

  socialIcons: {
    display: "flex",
    gap: "16px",
    marginTop: "10px",
  },

  icon: {
    color: "#000000",
    transition: "0.3s",
    cursor: "pointer",
  },

  feedbackBtn: {
    marginTop: "15px",
    background: "linear-gradient(135deg, #FF9A8B, #FF6A88)",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  hr: {
    marginTop: "30px",
  },

  copy: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    opacity: "0.8",
  },
};
