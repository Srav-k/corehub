import React, { useState } from "react";

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }

        .modal-content {
          width: 380px;
          background: #FFFFFF;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          position: relative;
          animation: popup 0.3s ease;
        }

        @keyframes popup {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close {
          position: absolute;
          right: 12px;
          top: 8px;
          font-size: 28px;
          cursor: pointer;
          color: #333;
        }

        .contact-btn {
          padding: 12px 20px;
          background: #FF7F50;
          color: #FFFFFF;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .contact-btn:hover {
          background: #E67042;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 15px;
        }

        textarea {
          height: 100px;
          resize: none;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: #9CAF88;
          color: white;
          border: none;
          margin-top: 12px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-btn:hover {
          background: #8BA07B;
        }
      `}</style>

      {/* Contact Button */}
      <button className="contact-btn" onClick={() => setOpen(true)}>
        Contact Us
      </button>

      {/* Popup Modal */}
      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>

            <h2>Contact Us</h2>

            <form action="/assets/php/contact.php" method="POST">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
