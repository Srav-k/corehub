import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm Core Hub Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = {
      from: "bot",
      text: "Thanks for reaching out! Our Core Hub team will connect with you shortly 😊",
    };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  const styles = {
    wrapper: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 9999,
      fontFamily: "Arial, sans-serif",
    },

    /* CHATBOT BUTTON */
    button: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #6f0a51ff, #eb50bcff)",
      color: "#fff",
      fontSize: "26px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s ease",
    },

    /* CHAT WINDOW */
    chatBox: {
      width: "330px",
      height: "440px",
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 14px 35px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      animation: "fadeIn 0.3s ease",
    },

    /* HEADER */
    header: {
      background: "linear-gradient(135deg, #cb3b86ff, #ba95adff)",
      color: "#fff",
      padding: "14px",
      fontWeight: "bold",
      textAlign: "center",
      position: "relative",
    },

    close: {
      position: "absolute",
      right: "14px",
      top: "8px",
      cursor: "pointer",
      fontSize: "18px",
    },

    /* MESSAGES AREA */
    messages: {
      flex: 1,
      padding: "14px",
      overflowY: "auto",
      background: "#FFF8E7",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },

    msgBot: {
      alignSelf: "flex-start",
      background: "#dbd6d6ff",
      color: "#333",
      padding: "10px 14px",
      borderRadius: "14px 14px 14px 4px",
      maxWidth: "80%",
      fontSize: "14px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },

    msgUser: {
      alignSelf: "flex-end",
      background: "linear-gradient(135deg, #e714a4ff, #c971b5ff)",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: "14px 14px 4px 14px",
      maxWidth: "80%",
      fontSize: "14px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    },

    /* INPUT AREA */
    inputBox: {
      display: "flex",
      borderTop: "1px solid #736a70ff",
      background: "#ffffff",
    },

    input: {
      flex: 1,
      padding: "12px",
      border: "none",
      outline: "none",
      fontSize: "14px",
    },

    sendBtn: {
      padding: "0 18px",
      background: "linear-gradient(135deg, #a7588fff, #9b245eff)",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.wrapper}>
      {!open && (
        <button style={styles.button} onClick={() => setOpen(true)}>
          <FaRobot />
        </button>
      )}

      {open && (
        <div style={styles.chatBox}>
          <div style={styles.header}>
            Core Hub Assistant
            <span style={styles.close} onClick={() => setOpen(false)}>
              ✕
            </span>
          </div>

          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.from === "bot" ? styles.msgBot : styles.msgUser}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputBox}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button style={styles.sendBtn} onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
