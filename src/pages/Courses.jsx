import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnrollmentForm from "../components/EnrollmentForm";

export default function Courses() {
  const navigate = useNavigate();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollment, setShowEnrollment] = useState(false);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setShowEnrollment(true);
  };

  const handleCloseEnrollment = () => {
    setShowEnrollment(false);
    alert("You have successfully enrolled in " + selectedCourse.name);
  };

  const handleViewDetails = (courseSlug) => {
    navigate(`/courses/${courseSlug}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Available Courses – 2025</h1>

      <div style={styles.courseGrid}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <img src={course.image} alt={course.name} style={styles.image} />

            <div style={styles.offerBadge}>{course.offer}</div>

            <h2 style={styles.title}>{course.name}</h2>

            {/* ===== Fee Structure ===== */}
            <div style={styles.feeBox}>
              <span style={styles.oldFee}>₹{course.originalFee}</span>
              <span style={styles.newFee}>₹{course.discountFee}</span>
              <span style={styles.installment}>
                EMI starts at ₹{course.emi}/month
              </span>
            </div>

            <div style={styles.buttons}>
              <button
                style={styles.detailBtn}
                onClick={() => handleViewDetails(course.slug)}
              >
                View Details
              </button>

              <button
                style={styles.enrollBtn}
                onClick={() => handleEnroll(course)}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showEnrollment && selectedCourse && (
        <EnrollmentForm
          course={selectedCourse.name}
          onClose={handleCloseEnrollment}
        />
      )}
    </div>
  );
}

/* ================= COURSE DATA ================= */

const courses = [
  {
    id: 1,
    slug: "web",
    name: "Web Development",
    offer: "🔥 20% OFF + Free Hosting",
    originalFee: "18,000",
    discountFee: "14,999",
    emi: "2,500",
    image:
      "https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg",
  },
  {
    id: 2,
    slug: "uiux",
    name: "UI/UX Design",
    offer: "🎨 Free Portfolio",
    originalFee: "16,000",
    discountFee: "12,999",
    emi: "2,200",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
  },
  {
    id: 3,
    slug: "mobile",
    name: "Mobile App Development",
    offer: "📱 Live App + Internship",
    originalFee: "22,000",
    discountFee: "17,999",
    emi: "3,000",
    image:
      "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
  },
  {
    id: 4,
    slug: "testing",
    name: "Software Testing",
    offer: "🧪 Automation Included",
    originalFee: "15,000",
    discountFee: "11,999",
    emi: "2,000",
    image:
      "https://thumbs.dreamstime.com/b/software-testing-internet-business-technology-concept-143071525.jpg",
  },
  {
    id: 5,
    slug: "python",
    name: "Python Programming",
    offer: "🐍 Mini Projects",
    originalFee: "14,000",
    discountFee: "10,999",
    emi: "1,900",
    image:
      "https://www.dicslaxminagar.com/blog/wp-content/uploads/2024/06/0_pU8l4-u0s1flFQiU.png",
  },
  {
    id: 6,
    slug: "datascience",
    name: "Data Science & AI",
    offer: "📊 ML Projects",
    originalFee: "28,000",
    discountFee: "22,999",
    emi: "3,800",
    image:
      "https://img.freepik.com/premium-photo/black-background-with-graphic-data-data-written-yellow_1108670-18741.jpg",
  },
  {
    id: 7,
    slug: "cloud",
    name: "Cloud Computing (AWS)",
    offer: "☁️ Certification",
    originalFee: "25,000",
    discountFee: "19,999",
    emi: "3,500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WmUBN6Wr0qLh0nujmg5rYWa2In7mYaTQOQ&s",
  },
  {
    id: 8,
    slug: "cyber",
    name: "Cyber Security",
    offer: "🔐 Ethical Hacking",
    originalFee: "26,000",
    discountFee: "20,999",
    emi: "3,600",
    image:
      "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
  },
];

/* ================= STYLES ================= */

const styles = {
     container: {
  padding: "50px 10%",
  minHeight: "100vh",

  backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),
    url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f")
  `,

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
},


  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "45px",
    color: "#fff",
  },

  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },

  card: {
    position: "relative",
    background: "#fff",
    borderRadius: "18px",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.35s ease",
    animation: "fadeUp 0.6s ease",
  },

  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  offerBadge: {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "#FF7043",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "16px",
    fontSize: "11px",
    fontWeight: "bold",
  },

  title: {
    fontSize: "18px",
    margin: "14px 0",
    color: "#3E2723",
    textAlign: "center",
  },

  feeBox: {
    textAlign: "center",
    marginBottom: "16px",
    animation: "slideIn 0.6s ease",
  },

  oldFee: {
    textDecoration: "line-through",
    color: "#888",
    fontSize: "14px",
    display: "block",
  },

  newFee: {
    color: "#FF5722",
    fontSize: "22px",
    fontWeight: "bold",
    animation: "pulse 1.5s infinite",
  },

  installment: {
    fontSize: "12px",
    color: "#444",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "auto",
  },

  detailBtn: {
    backgroundColor: "#E6C27A",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "7px",
    cursor: "pointer",
  },

  enrollBtn: {
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "7px",
    cursor: "pointer",
  },
};
