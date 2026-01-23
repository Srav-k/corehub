import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import V1 from "../assets/V1.mp4";
import V2 from "../assets/V2.mp4";
import V3 from "../assets/V3.mp4";
import CourseCard from "../components/CourseCard";
import Testimonials from "../components/Testimonials";
import CourseTable from "../components/CourseTable";

/* ================= COUNTDOWN COMPONENT ================= */
function CountdownTimer() {
  const targetDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 9);
    return date;
  }, []);

  const calculateTimeLeft = () => {
    const diff = targetDate - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
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
    <div className="timerContainer">
      <h2 className="timerHeading">🚀 New Batch Starting Soon!</h2>
      <div className="timerRow">
        <span>{time.d}d</span>:
        <span>{time.h}h</span>:
        <span>{time.m}m</span>:
        <span>{time.s}s</span>
      </div>
      <button className="timerButton">Register Now</button>
    </div>
  );
}

/* ================= MAIN HOME COMPONENT ================= */
export default function Home() {
  const slides = [
    {
      video: V1,
      title: "Digital IT Service With Excellent Quality",
      text: "Providing expert web and mobile solutions, voice/non-voice services, and digital transformation strategies worldwide.",
    },
    {
      video: V2,
      title: "Excellent IT Services for Your Success",
      text: "We deliver world-class designing, development, software testing, e-commerce, and mobile application services globally.",
    },
    {
      video: V3,
      title: "Trusted Technology Partners for Your Growth",
      text: "Offering premium support, cloud solutions, automation, and business-ready digital products.",
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
    <div className="home-wrapper">
      <style>{`
        /* 1. Global & Hero Styles */
        .home-wrapper {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        .heroContainer {
          height: 100vh;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          margin: 10px;
        }
        .videoBackground {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        .videoOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
          z-index: 2;
        }
        .textBox {
          position: absolute;
          top: 30%;
          left: 8%;
          z-index: 3;
          max-width: 650px;
          color: #9BFF6E;
          padding: 20px;
        }
        .badge {
          background: #3d42b9;
          color: #fff;
          padding: 10px 22px;
          border-radius: 30px;
          margin-bottom: 20px;
          font-weight: bold;
          display: inline-block;
        }
        .title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
          color: #fff;
        }
        .text {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 500;
          color: #e0e0e0;
        }
        
        /* 2. Timer Section */
        .timerSection {
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .timerContainer {
          background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
                      url('https://media.istockphoto.com/id/1343087913/photo/abstract-clock-deal-over-white-wall-realistic-3d.jpg?s=612x612&w=0&k=20&c=QSd9EkN263I5dbJKeRruhV5dSkooK0CV5Wo9pvx2Axg=');
          background-size: cover;
          background-position: center;
          padding: 60px 40px;
          border-radius: 24px;
          text-align: center;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .timerHeading {
          font-size: clamp(24px, 4vw, 42px);
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        .timerRow {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 900;
          color: #3d42b9;
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        /* 3. Course Cards Grid */
        .courseSection {
          padding: 80px 5%;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                      url('https://static.vecteezy.com/system/resources/thumbnails/039/053/949/small/ai-generated-modern-interior-design-office-hall-with-conference-table-wooden-floor-and-dark-wall-background-photo.jpeg');
          background-size: cover;
          background-attachment: fixed;
          border-radius: 30px;
          margin: 0 20px 40px 20px;
        }
        .cardsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* 4. Table Section - Fix Alignment */
        .tableSection {
          padding: 80px ;
          background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), 
                      url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72');
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* Wraps the imported CourseTable for scrollability */
        .tableContainer {
          width: 100%;
                  
        }

        /* 5. UI Components Fixes */
        .timerButton {
          background: #FFA000;
          border: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .timerButton:hover { transform: scale(1.05); }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }

        /* ================= MEDIA QUERIES ================= */

        /* iPad / Tablets */
        @media (max-width: 1024px) {
          .textBox { left: 5%; top: 25%; }
          .cardsGrid { grid-template-columns: repeat(2, 1fr); width: 100%; }
          .cardsGrid > * { width: 100%; max-width: 100%; }
          .courseSection {  margin: 20px; }
          .timerContainer { padding: 50px 20px; }
        }

        /* Mobile Phones */
        @media (max-width: 768px) {
          .heroContainer { height: 80vh; margin: 0; border-radius: 0; }
          .textBox { 
            top: 20%; 
            left: 0; 
            text-align: center; 
            width: 100%; 
            padding: 20px; 
          }
          .title { font-size: 28px; }
          .cardsGrid { grid-template-columns: 1fr; }
          .cardsGrid > * { width: 100%; max-width: 100%; }
          .courseSection { margin: 10px; padding: 40px 15px; }
          .timerRow { gap: 8px; font-size: 24px; }
          .tableSection { padding: 20px; 
                      font-size:8px; }
          .tableContainer{ 
                    width:100%;
                    padding:0px;
                    margin:0px;
                    }            
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="heroContainer">
        <video ref={videoRef} autoPlay muted loop className="videoBackground">
          <source src={slides[index].video} type="video/mp4" />
        </video>
        <div className="videoOverlay" />
        <div className="textBox">
          <div className="badge">Only High Quality Services</div>
          <h1 className="title">{slides[index].title}</h1>
          <p className="text">{slides[index].text}</p>
        </div>
            </div>

      {/* TIMER SECTION */}
      <section className="timerSection">
        <CountdownTimer />
      </section>

      {/* COURSES SECTION */}
      <section className="courseSection">
        <h2 style={{ textAlign: "center", color: "white", fontSize: "32px", marginBottom: "40px" }}>
          Our Top Courses
        </h2>
        <div className="cardsGrid">
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

      {/* COURSE TABLE SECTION */}
      <section className="tableSection">
        <div className="tableContainer">
          <CourseTable />
        </div>
      </section>

      <Testimonials />
    </div>
  );
}