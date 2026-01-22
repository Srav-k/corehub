import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import V1 from "../assets/V1.mp4";
import V2 from "../assets/V2.mp4";
import V3 from "../assets/V3.mp4";
import CourseCard from "../components/CourseCard";
import Testimonials from "../components/Testimonials";
import CourseTable from "../components/CourseTable";

/* ================= COUNTDOWN ================= */
function CountdownTimer() {
  // Set target date ONCE (9 days from now)
  const targetDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 9);
    return date;
  }, []);

  const calculateTimeLeft = () => {
    const diff = targetDate - new Date();

    if (diff <= 0) {
      return { d: 0, h: 0, m: 0, s: 0 };
    }

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <div style={styles.timerContainer}>
      <h2 style={styles.timerHeading}>🚀 New Batch Starting Soon!</h2>

      <div style={styles.timerRow}>
        <span>{time.d}d</span>:
        <span>{time.h}h</span>:
        <span>{time.m}m</span>:
        <span>{time.s}s</span>
      </div>

      <button style={styles.timerButton}>Register Now</button>
    </div>
  );
}

/* ================= HOME ================= */
export default function Home() {
  const slides = [
    {
      video: V1,
      title: "Digital IT Service With Excellent Quality",
      text:
        "Providing expert web and mobile solutions, voice/non-voice services, and digital transformation strategies worldwide.",
    },
    {
      video: V2,
      title: "Excellent IT Services for Your Success",
      text:
        "We deliver world-class designing, development, software testing, e-commerce, and mobile application services globally.",
    },
    {
      video: V3,
      title: "Trusted Technology Partners for Your Growth",
      text:
        "Offering premium support, cloud solutions, automation, and business-ready digital products.",
    },
  ];

  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index, slides.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [index]);

  return (
    <>
      {/* HERO */}
      <div style={styles.heroContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          style={styles.videoBackground}
        >
          <source src={slides[index].video} type="video/mp4" />
        </video>

        <div style={styles.videoOverlay} />

        <div style={styles.textBox}>
          <div style={styles.badge}>Only High Quality Services</div>
          <h1 style={styles.title}>{slides[index].title}</h1>
          <p style={styles.text}>{slides[index].text}</p>
        </div>

        <div style={styles.viewMore}>
          <span>View More</span>
          <FaChevronDown />
        </div>
      </div>

      {/* TIMER */}
      <section style={styles.timerSection}>
        <CountdownTimer />
      </section>

      {/* COURSES */}
      <section style={styles.courseSection}>
        <h2 style={styles.courseHeading}>Our Top Courses</h2>

        <div style={styles.cardsGrid}>
          <CourseCard
            title="Web Development"
            desc="Master HTML, CSS, JavaScript, React & backend technologies."
            image="https://e0.pxfuel.com/wallpapers/66/409/desktop-wallpaper-software-engineer-software-development.jpg"
          />
          <CourseCard
            title="UI/UX Design"
            desc="Learn professional UI/UX design principles & tools like Figma."
            image="https://img.freepik.com/premium-photo/ux-graphic-designer-web-ui-development-concept_31965-17176.jpg"
          />
          <CourseCard
            title="Mobile Apps"
            desc="Build iOS & Android apps using React Native & Flutter."
            image="https://img.freepik.com/premium-photo/mobile-app-development-concept_670147-16167.jpg"
          />
          <CourseCard
            title="Software Testing"
            desc="Manual testing, automation testing, tools & QA."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfwAhgmyiHHQ7kj-aEbk9AGCKcwo0wYeuwg&s"
          />
        </div>
      </section>

      {/* COURSE TABLE */}
      <section style={styles.tableSection}>
        <CourseTable />
      </section>

      <Testimonials />
    </>
  );
}

/* ================= STYLES ================= */
const styles = {
  heroContainer: {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    borderRadius: "18px",
  },

  videoBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },

  videoOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
    zIndex: 2,
  },

  textBox: {
    position: "absolute",
    top: "30%",
    left: "8%",
    zIndex: 3,
    maxWidth: "520px",
    color: "#9BFF6E",
  },

  badge: {
    background: "#3d42b9",
    color: "#fff",
    padding: "10px 22px",
    borderRadius: "30px",
    marginBottom: "20px",
    fontWeight: "bold",
    display: "inline-block",
  },

  title: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  text: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  viewMore: {
    position: "absolute",
    bottom: "30px",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: "14px",
  },

  timerSection: {
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    backgroundSize: "cover",
  },

  timerContainer: {
    backgroundImage: "url('https://media.istockphoto.com/id/1343087913/photo/abstract-clock-deal-over-white-wall-realistic-3d.jpg?s=612x612&w=0&k=20&c=QSd9EkN263I5dbJKeRruhV5dSkooK0CV5Wo9pvx2Axg=')",
    backgroundSize: "cover",
    padding: "150px 440px" ,
    borderRadius: "18px",
    textAlign: "center",
    color: "#0f0f0fff",
    maxWidth: "600px",
    width: "100%",
  },

  timerHeading: {
    fontSize: "47px",
    marginBottom: "30px",
  },

  timerRow: {
    fontSize: "38px",
    fontWeight: "800",
    color: "#090909ff",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "30px",
  },

  timerButton: {
    background: "#FFA000",
    border: "none",
    padding: "14px 36px",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },

  courseSection: {
    padding: "80px 20px",
    backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/039/053/949/small/ai-generated-modern-interior-design-office-hall-with-conference-table-wooden-floor-and-dark-wall-background-photo.jpeg')",
    backgroundSize: "cover",
    marginBottom: "40px",
    borderRadius: "25px"
  },

  courseHeading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "40px",
    color: "white"
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "16px",
    maxWidth: "1200px",
    margin: "auto",
  },

  tableSection: {
    padding: "80px 20px",
    background:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72')",
    backgroundSize: "cover",
  },
};
