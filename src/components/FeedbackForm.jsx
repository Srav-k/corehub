// src/components/Feedback.jsx
import React, { useState } from "react";

export default function Feedback({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    suggestion: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // show success popup
  };

  return (
    <div style={styles.overlay}>
      {!submitted ? (
        /* ================= FORM ================= */
        <div style={styles.formContainer}>
          <h2 style={{ marginBottom: "10px" }}>Feedback Form</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="">Select Reason</option>
              <option value="Course Content">Course Content</option>
              <option value="Website">Website</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="suggestion"
              placeholder="Your Suggestions"
              value={formData.suggestion}
              onChange={handleChange}
              rows={4}
              required
              style={styles.textarea}
            />

            <div style={styles.buttons}>
              <button type="submit" style={styles.submitBtn}>
                Submit
              </button>
              <button type="button" style={styles.closeBtn} onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* ================= SUCCESS POPUP ================= */
        <div style={styles.successBox}>
          <h2>🎉 Thank You!</h2>
          <p>Thanks for the suggestion.</p>
          <button style={styles.okBtn} onClick={onClose}>
            OK
          </button>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    animation: "fadeIn 0.4s ease",
  },

  formContainer: {
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "14px",
    width: "400px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    animation: "scaleIn 0.4s ease",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    fontSize: "14px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },

  submitBtn: {
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },

  closeBtn: {
    backgroundColor: "#9CAF88",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  successBox: {
    backgroundColor: "#FFFFFF",
    padding: "35px",
    borderRadius: "16px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    animation: "popUp 0.4s ease",
  },

  okBtn: {
    marginTop: "20px",
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    padding: "10px 22px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },
};
