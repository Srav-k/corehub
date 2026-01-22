// src/components/Modal.jsx
import React from "react";

export default function Modal({ title, content, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modalContainer}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.content}>{content}</div>
        <button style={styles.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

// Styles
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
  modalContainer: {
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "12px",
    width: "400px",
    maxWidth: "90%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#5D4037",
  },
  content: {
    marginBottom: "20px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#5D4037",
  },

  closeBtn: {
    backgroundColor: "#FF7F50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
