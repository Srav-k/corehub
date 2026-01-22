import { useState } from "react";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      {/* LOGO */}
      <div style={styles.logoBox}>
        <FaLaptopCode size={32} />
        <span style={styles.logoText}>CoreHub</span>
      </div>

      {/* DESKTOP NAV */}
      <nav className="desktop-nav" style={styles.nav}>
        <a className="nav-link" style={styles.link} href="/">Home</a>
        <a className="nav-link" style={styles.link} href="/about">About</a>
        <a className="nav-link" style={styles.link} href="/courses">Courses</a>
        <a className="nav-link" style={styles.link} href="/contact">Contact</a>
        <a className="nav-btn" style={styles.btn} href="/login">Login</a>
        <a className="nav-btn" style={styles.btn} href="/signup">SignUp</a>
      </nav>

      {/* HAMBURGER */}
      <div style={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={styles.mobileMenu}>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/courses" onClick={() => setOpen(false)}>Courses</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="/login" onClick={() => setOpen(false)}>Login</a>
          <a href="/signup" onClick={() => setOpen(false)}>SignUp</a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.8)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
    fontSize: "24px",
  },

  logoText: {
    fontSize: "26px",
  },

  nav: {
    display: "flex",
    gap: "26px",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    fontWeight: "600",
    color: "#111",
  },

  btn: {
    background: "#214746",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "600",
  },

  hamburger: {
    display: "none",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "absolute",
    top: "70px",
    left: "0",
    width: "100%",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
};

/* ================= HOVER + RESPONSIVE ================= */
const css = `
/* Desktop Nav Hover */
.nav-link {
  position: relative;
  transition: color 0.4s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #3d42b9;              
  transform: translateY(-2px);
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #3d42b9, #9BFF6E);
  left: 0;
  bottom: -8px;
  border-radius: 4px;
  transition: width 0.4s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Button Hover */
.nav-btn {
  background 0.4s ease,
    transform 0.3s ease,
    box-shadow 0.4s ease;
}

.nav-btn:hover {
  background: linear-gradient(135deg, #3d42b9, #214746);
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 25px rgba(61,66,185,0.45);
}

/* ---------------- Logo Animation ---------------- */
header div:first-child {
  transition: transform 0.4s ease;
}

header div:first-child:hover {
  transform: scale(1.08) rotate(-2deg);
  cursor: pointer;
}

/* Mobile Menu Hover */
header div a {
  transition: 
    background 0.3s ease,
    padding-left 0.3s ease,
    color 0.3s ease;
}

header div a:hover {
  background: linear-gradient(90deg, #f3f4ff, #e8fff4);
  padding-left: 14px;
  color: #3d42b9;
}

/* ---------------- Hamburger Icon ---------------- */
header div[style*="cursor: pointer"] {
  transition: transform 0.3s ease;
}

header div[style*="cursor: pointer"]:hover {
  transform: scale(1.15) rotate(90deg);
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav { display: none !important; }
  header div[style*="cursor: pointer"] { display: block !important; }
}
`;

const style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
