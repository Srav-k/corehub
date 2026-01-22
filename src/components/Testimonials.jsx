import React, { useEffect, useState } from "react";

/* ---------------- DATA ---------------- */

const testimonialsData = [
  { id: 1, name: "Jones", feedback: "CoreHub helped me land my first job as a web developer.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Christ", feedback: "The UI/UX Design course was amazing and industry-oriented.", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 3, name: "Mark", feedback: "Hands-on projects made learning very effective.", image: "https://randomuser.me/api/portraits/men/65.jpg" },
  { id: 4, name: "Sarah", feedback: "Mentors explain concepts clearly and support at every step.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 5, name: "Anita", feedback: "Excellent learning materials and real projects.", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 6, name: "Rahul", feedback: "Simple teaching approach boosted my confidence.", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { id: 7, name: "Kiran", feedback: "Full Stack course is beginner friendly.", image: "https://randomuser.me/api/portraits/men/83.jpg" },
  { id: 8, name: "Priya", feedback: "Smooth and enjoyable learning experience.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 9, name: "Daniel", feedback: "Perfect place to start a tech career.", image: "https://randomuser.me/api/portraits/men/19.jpg" },
];

/* ---------------- HELPERS ---------------- */

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export default function Testimonials() {
  const slides = chunkArray(testimonialsData, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* -------- AUTO SLIDE (5 seconds) -------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>What Our Students Say</h2>

      <div style={styles.carouselWrapper}>
        <div
          style={{
            ...styles.carouselTrack,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((group, slideIndex) => (
            <div key={slideIndex} style={styles.slide}>
              {group.map((item) => (
                <div key={item.id} style={styles.card}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <p style={styles.feedback}>{item.feedback}</p>
                  <p style={styles.name}>— {item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    padding: "30px 8%",
    background: "linear-gradient(135deg, #FFF3E0, #E3F2FD)",
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "50px",
    color: "#4E342E",
  },

  carouselWrapper: {
    overflow: "hidden",
    width: "100%",
  },

  carouselTrack: {
    display: "flex",
    transition: "transform 1s ease-in-out",
  },

  slide: {
    minWidth: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: "30px 24px",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    animation: "float 4s ease-in-out infinite",
  },

  image: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    marginBottom: "16px",
    border: "3px solid #FFAB91",
    objectFit: "cover",
  },

  feedback: {
    fontSize: "16px",
    color: "#5D4037",
    lineHeight: "1.6",
    marginBottom: "14px",
  },

  name: {
    fontWeight: "600",
    color: "#FF7043",
    fontSize: "15px",
  },
};
