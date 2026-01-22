export default function Header() {
  return (
    <header className="header">
      <span className="logo-text">CoreHub - Path to success</span>

      <style>
        {`
            .header {
            background: #2a4645ff;  
            color: #FFFFFF;
            height: 1%;
            padding: 3px;
            text-align: center;
            font-size: 10px;
            font-weight: bold;
            box-shadow: 0 4px 14px rgba(0,0,0,0.2);
            animation: headerSlide 0.8s ease-out;
          }

          @keyframes headerSlide {
            from {
              opacity: 0;
              transform: translateY(-60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

            .logo-text {
            display: inline-block;
            letter-spacing: 2px;
            font-size: 32px;
            font-weight: bold;
            animation: glow 2s infinite alternate ease-in-out;
            color: #FFFFFF;
          }

          @keyframes glow {
            from {
              text-shadow: 0 0 6px rgba(255,255,255,0.3);
            }
            to {
              text-shadow: 0 0 14px rgba(255,255,255,0.9);
            }
          }
        `}
      </style>
    </header>
  );
}
