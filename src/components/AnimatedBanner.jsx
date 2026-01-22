import { useEffect, useState } from "react";

export default function AnimatedBanner() {
  const slides = [
    "Learn Trending IT Courses with Experts",
    "Boost Your Skills with Hands-on Training",
    "Achieve Your Career Goals with CoreHub",
    "Join 10,000+ Successful Learners"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.banner}>
      <div key={index} style={styles.slide} className="slide-text">
        {slides[index]}
      </div>

      <style>
        {`
          .slide-text {
            animation: slideLeft 0.8s ease forwards;
          }

          @keyframes slideLeft {
            from {
              transform: translateX(80px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  banner: {
    background: "#FF7F50",
    color: "#FFFFFF",
    padding: "3px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
   
  },

  slide: {
    display: "inline-block",
    padding: "5px 0",
  },
};
