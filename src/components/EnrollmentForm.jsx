// src/components/EnrollmentForm.jsx
import React, { useState } from "react";

export default function EnrollmentForm({ course, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Enrollment Successful!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${course}`
    );
    onClose(); // close the form after submission
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.formContainer}>
        <h2>Enroll in {course}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div style={styles.buttons}>
            <button type="submit" style={styles.submitBtn}>
              Enroll
            </button>
            <button type="button" style={styles.closeBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Simple inline styles for modal effect
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  submitBtn: {
    backgroundColor: "#FF7F50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  closeBtn: {
    backgroundColor: "#9CAF88",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
