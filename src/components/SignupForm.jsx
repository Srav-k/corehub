export default function Signup() {
  return (
    <div className="signup-container">

      <h2 className="signup-title">Create Your Account</h2>

      <form className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Create Password" required />
        <button type="submit">Sign Up</button>
      </form>

      <style>
        {`
          .signup-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            animation: fadeIn 1s ease;
            backgroundColor: #FFF8E7;  
          }

          .signup-title {
            font-size: 28px;
            color: #FF7F50;
            margin-bottom: 25px;
            animation: slideDown 0.8s ease;
          }

          .signup-form {
            width: 90%;
            max-width: 400px;
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            gap: 15px;
            animation: zoomIn 0.9s ease;
          }

          .signup-form input {
            padding: 12px;
            border-radius: 8px;
            border: 2px solid #12ce9caa;
            font-size: 16px;
            outline: none;
            transition: 0.3s ease;
          }

          .signup-form input:focus {
            border-color: #FF7F50;
            box-shadow: 0 0 6px rgba(18,206,156,0.5);
          }

          .signup-form button {
            background: #FF7F50;
            color: white;
            padding: 12px;
            font-size: 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s ease;
          }

          .signup-form button:hover {
            background: #0ca882ff;
          }

          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
