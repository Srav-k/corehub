// src/components/CourseCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ title, description, image }) {
  const navigate = useNavigate();

  return (
    <div
      className="course-card"
      onClick={() => navigate("/courses")}
    >
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{description}</p>

      <style>{`
        .course-card {
          width: 260px;
          padding: 16px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid #eaded2;
          cursor: pointer;

          box-shadow: 0 8px 20px rgba(0,0,0,0.08);

          /* 👇 CONTINUOUS FLOAT ANIMATION */
          animation: float 3s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* 👇 STRONG HOVER POP */
        .course-card:hover {
          transform: translateY(-14px) scale(1.05);
          box-shadow: 0 20px 45px rgba(0,0,0,0.2);
          animation-play-state: paused;
        }

        .course-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .course-card h3 {
          margin-bottom: 6px;
          font-weight: 700;
        }

        .course-card p {
          font-size: 14px;
          color: #555;
          }

        /* 👇 FLOAT KEYFRAMES */
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
