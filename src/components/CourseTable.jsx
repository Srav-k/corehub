import React, { useEffect, useState } from "react";

export default function CourseTable() {
  const [hoveredId, setHoveredId] = useState(null);

  // ✅ Inject animation CSS safely
  useEffect(() => {
    const css = `
      @keyframes tableFade {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes rowFade {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  const container = {
    width: "92%",
    margin: "80px auto",
    padding: "50px",
    background: "#ffff",
    borderRadius: "24px",
    border: "1px solid #e3ded7",
    boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
    animation: "tableFade 0.9s ease-out",
  };

  const headerRow = {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 2fr 2fr",
    background: "#135f76ff",
    padding: "18px",
    fontWeight: "700",
    borderRadius: "16px",
    color:"white",
  };

  const cardBase = {
    marginTop: "20px",
    borderRadius: "18px",
    border: "1px solid #ddd",
    transition: "all 0.35s ease",
    animation: "rowFade 0.6s ease forwards",
    fontWeight: "bold",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 22px 40px rgba(0,0,0,0.25)",
    background: "#f2f7ec",
  };

  const row = {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 2fr 2fr",
    padding: "18px",
    background: "white",
  };

  const courses = [
    { id: 1, name: "Web Development", duration: "3 Months", fee: "₹15,000" },
    { id: 2, name: "UI/UX Design", duration: "2 Months", fee: "₹12,000" },
    { id: 3, name: "Mobile App Development", duration: "4 Months", fee: "₹20,000" },
    { id: 4, name: "Software Testing", duration: "3 Months", fee: "₹14,000" },
    { id: 5, name: "Python Programming", duration: "2.5 Months", fee: "₹13,000" },
    { id: 6, name: "Data Science & AI", duration: "4 Months", fee: "₹22,000" },
    { id: 7, name: "Cloud Computing (AWS)", duration: "3 Months", fee: "₹18,000" },
    { id: 8, name: "Cyber Security Fundamentals", duration: "3 Months", fee: "₹16,000" },
  ];

  return (
    <div style={container}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Available Courses – 2025
      </h2>

      <div style={headerRow}>
        <div>ID</div>
        <div>Course Name</div>
        <div>Duration</div>
        <div>Fee</div>
      </div>

      {courses.map((c, i) => (
        <div
          key={c.id}
          style={{
            ...cardBase,
            ...(hoveredId === c.id ? cardHover : {}),
            animationDelay: `${i * 0.1}s`,
          }}
          onMouseEnter={() => setHoveredId(c.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div style={row}>
            <div>{c.id}</div>
            <div>{c.name}</div>
            <div>{c.duration}</div>
            <div>{c.fee}</div>
          </div>
        </div>
      ))}
    </div>
  );
}