import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EnrollmentForm from "./EnrollmentForm";
import certificateImg from "../assets/certificate.png";

/* ================= COURSE DATA ================= */

const courseData = {
  web: {
    title: "Web Development",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60",
    offer: "🔥 Flat 30% OFF + Free Hosting",
    content: [
      "Advanced Certification in Web Development",
      "This course transforms beginners into job-ready full stack developers.",
      "You will learn both frontend and backend technologies in depth.",
      "Hands-on projects help you build real-world applications.",
      "Learn REST APIs, databases, authentication, and deployment.",
      "Industry best practices and clean coding standards are covered."
    ],
    tools: [
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Bootstrap", img: "https://img.icons8.com/?size=96&id=PndQWK6M1Hjo&format=png"},
      { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", img: "https://img.icons8.com/?size=128&id=2ZOaTclOqD4q&format=png"},
      { name: "Mango DB", img: "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png"},
    
    ],
  
  faqs: [
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, this course starts from basics and gradually moves to advanced full stack development."
      },
      {
        q: "Will I get a certificate after completion?",
        a: "Yes, you will receive an industry-recognized certificate."
      },
      {
        q: "Do you provide placement assistance?",
        a: "Yes, we provide resume building, mock interviews, and job referrals."
      }
    ],
  },

  cloud: {
    title: "Cloud Computing",
    image:
      "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    offer: "☁️ Free AWS Basics + Live Labs",
    content: [
      "Learn Cloud Computing from scratch.",
      "Understand AWS, Azure, and Google Cloud.",
      "Deploy real applications on cloud servers.",
      "Learn EC2, S3, IAM, VPC, and Cloud Security.",
      "Hands-on labs with real-world scenarios."
    ],
    tools: [
      { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "GCP", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOEowzKhM3UvKQUDhSQrc9-RlRiKdnsyEjQ&s"},
      { name: "Terraform", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSQJR1y2P07KVW4I6kD6UUwq9T9ceBb54FQ&s"},
      { name: "Amazon S3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JB6hcnd3KBsUgNOQnh0dTrdouOAW7_8DsA&s"},
      { name: "CloudWatch", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0q43o0WBI8pISuHHHo5JHyWFE_LIpNSVytWXLvnPyA&s"}
    ],
    faqs: [
      {
        q: "Do I need prior cloud experience?",
        a: "No prior experience is required. We start from fundamentals."
      },
      {
        q: "Will this course cover AWS certification topics?",
        a: "Yes, it aligns with AWS Cloud Practitioner & Associate level."
      },
      {
        q: "Are live projects included?",
        a: "Yes, you will work on real-world cloud deployment projects."
      }
    ],
  },

  cyber: {
    title: "Cyber Security",
    image:
      "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    offer: "🛡️ Free Ethical Hacking Toolkit",
    content: [
      "Learn Cyber Security fundamentals.",
      "Understand ethical hacking techniques.",
      "Network security and penetration testing.",
      "Malware analysis and threat detection.",
      "Hands-on real attack simulations."
    ],
    tools: [
      { name: "Kali Linux", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" },
      { name: "Wireshark", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLi4uBJc38CXIpXCUuRuJSSj7mvHYRcUyU4Q&s"},
      { name: "Metasploit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJLv6OIquV8erxxaoDSYFdYS-Nm3E1BmMKWurxCxH&s" },
      { name: "Nmap", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS9-ZqvpHcnMfuToEDzt1ZLgJFMQivb6tHg&s"},
      { name: "Burp Suite", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKEIGzgB9jQe3A9kbAiip6nRlA2OHXBAvdA&s"},
      { name: "OpenVAS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT445VzV2mkCZsYtORXI1YyFP9E6fBPUM_DTA&s"},
      { name: "Snort", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_GniNPYumizF56mxYJcIUIcYTZwwvOz3qg&s"},
      { name: "Nessus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFiIHWN0nxsq1BvigHiCY0o1veAxzVCoF8IHZm8HT-Q&s"}
    ],
    faqs: [
  {
    q: "Do I need prior security knowledge?",
    a: "No prior experience is required. We start with cyber security fundamentals."
  },
  {
    q: "Will ethical hacking be covered?",
    a: "Yes, the course includes ethical hacking and penetration testing basics."
  },
  {
    q: "Are hands-on labs included?",
    a: "Yes, you will work on real attack simulations and security labs."
  },
],
  },

  python: {
    title: "Python Programming",
    image:
      "https://images.unsplash.com/photo-1690683790356-c1edb75e3df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
    offer: "🐍 Free E-Books + Mini Projects",
    content: [
      "Learn Python from basics to advanced.",
      "Work with data structures and OOP.",
      "Automation and scripting.",
      "Build real-world Python projects."
    ],
    tools: [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "PyCharm", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwsNeG9ohPQprnlYpK8KLu0AaRG2ijDv7Zw&s"},
      { name: "Django", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBFW4WL42Ner2mePRFWrs3_nDbCohVdk-vw&s"},
      { name: "IDLE", img: "https://www.shutterstock.com/image-illustration/idle-acronym-integrated-development-environment-260nw-2666931815.jpg" },
      { name: "Streamlit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_RTxXW-gvsoluolFZaP75pVoDdwRJJ3z__SElRFBgA&s"},
    ],
    faqs: [
  {
    q: "Is this course suitable for beginners?",
    a: "Yes, the course starts from Python basics and gradually moves to advanced topics."
  },
  {
    q: "Will I build real projects?",
    a: "Yes, you will work on automation scripts and real-world Python projects."
  },
  {
    q: "Does this course cover frameworks like Django or Flask?",
    a: "Yes, popular Python frameworks are introduced with practical examples."
  },
    ],
  },
  
  uiux: {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVpJTIwdXglMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    offer: "🎨 Free Design Resources + Case Studies",
    content: [
      "Learn UI & UX fundamentals from scratch.",
      "Create wireframes and interactive prototypes.",
      "Understand user research and usability testing.",
      "Design real-world web and mobile interfaces."
    ],
    tools: [
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "sketch", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fo4IXFqq8AwYhijSAqYurQ2B3kgRNLcWmLS8jBus5w&s" },
      { name: "Framer", img: "https://img.icons8.com/?size=160&id=js8pNS2UtYKY&format=png" },
      { name: "InVison", img: "https://img.icons8.com/?size=160&id=O72vI2OWltx4&format=png" },
      { name: "Balsamiq", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9PHdhfhus4-wre9FVLCycf9Ootc2r7V39XfviCfv&s" },
      { name: "Whimsical", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      
    ],

     faqs: [
  {
    q: "Do I need design experience to join?",
    a: "No design background is required. We cover UI/UX fundamentals from scratch."
  },
  {
    q: "Will I learn tools like Figma?",
    a: "Yes, the course includes hands-on training with Figma and prototyping tools."
  },
  {
    q: "Are real design case studies included?",
    a: "Yes, you will work on real-world UI/UX case studies and projects."
  },
],
  },
  
  mobile: {
    title: "Mobile App Development",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    offer: "📱 Free App Templates + Live Projects",
    content: [
      "Build Android and iOS applications.",
      "Learn native and cross-platform development.",
      "Integrate APIs and backend services.",
      "Publish apps to Play Store and App Store."
    ],
    tools: [
      { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Android", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "JavaScript", img: "https://arosys.com/wp-content/uploads/2025/08/typescript-vs-javascript.webp" },
      { name: "SQlite", img: "https://i.ytimg.com/vi/YXPksR7xjpw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfGoFU9Dnl0ojUHoqBqpkeQp-LwQ" },
      { name: "swift", img: "https://i0.wp.com/swifttech.com.np/wp-content/uploads/2025/04/insights.jpg?fit=925%2C515&ssl=1" }
    ],
     faqs: [
  {
    q: "Can beginners join this course?",
    a: "Yes, the course starts from basics and gradually moves to advanced concepts."
  },
  {
    q: "Will I learn Android and iOS development?",
    a: "Yes, you will learn cross-platform development for both Android and iOS."
  },
  {
    q: "Will I build and publish real apps?",
    a: "Yes, you will build real mobile apps and learn deployment to app stores."
  },
],
  },
  
  testing: {
    title: "Software Testing",
    image:
      "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjB0ZXN0aW5nfGVufDB8fDB8fHww",
    offer: "🧪 Free Testing Tools + Practice Projects",
    content: [
      "Understand manual and automation testing.",
      "Write test cases and bug reports.",
      "Perform functional and regression testing.",
      "Work with real-time testing scenarios."
    ],
    tools: [
      { name: "Selenium", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "JIRA", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Playwright", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hwDQ7NWPXzqww9vUWS0E899PR_QfPwaoGg&s" },
      { name: "Cypress", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3DTYND8_KLwpGNDUUF8OoBz-gGfrqLH1pA&s" },
      { name: "Appium", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-xoJ23KlIkj138gR-9F_bHzh7I85O_7j2A&s" },
      { name: "SoapUI", img: "https://i0.wp.com/blog.nashtechglobal.com/wp-content/uploads/2024/07/SoapUI%402x-1.webp?fit=872%2C270&ssl=1" },
      { name: "Bugzilla", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWurpWXHtTb3G-fqyrS2GPyTr-X8POFe9eBg&s" },
      { name: "TestRail", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46LWOq6ozvg4L7aAZ5iyWSP2chJKHKLtebA&s " }
    ],
     faqs: [
  {
    q: "Is prior coding knowledge required?",
    a: "No, basic computer knowledge is enough to get started."
  },
  {
    q: "Does this course include automation testing?",
    a: "Yes, both manual and automation testing concepts are covered."
  },
  {
    q: "Will I work on real testing projects?",
    a: "Yes, you will practice with real-time testing scenarios and tools."
  },
   ],

  },

  datascience: {
    title: "Data Science & AI",
    image:
      "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    offer: "🤖 Free Datasets + AI Mini Projects",
    content: [
      "Learn data analysis and visualization.",
      "Work with machine learning algorithms.",
      "Build predictive and AI-based models.",
      "Solve real-world data problems."
    ],
    tools: [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "SQL", img: "https://www.dpriver.com/blog/wp-content/uploads/2022/08/sql-server-data-lineage-gudu-sqlflow-1.svg" },
      { name: "Dask", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTZ9OCjf0WEOawMifzxWePEm9j6A0I_WNDwNScMGnHg&s"},
      { name: "XGBoost", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqWwoPXjgPW5parKr_Z14ila6w_w-5F2EHA&s"},
      { name: "Machine Learning", img: "https://cdn.educba.com/academy/wp-content/uploads/2019/05/Machine-Learning-Tools.jpg" },
    ],
       faqs: [
  {
    q: "Do I need a strong math background?",
    a: "Basic math is sufficient. Concepts are explained in an easy and practical way."
  },
  {
    q: "Will machine learning be covered?",
    a: "Yes, the course includes machine learning and AI fundamentals."
  },
  {
    q: "Are real-world datasets used?",
    a: "Yes, you will work with real datasets and data science projects."
  },
],
  },
};

export default function ViewDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseData[courseId];

  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  if (!course) {
    return (
      <div style={styles.notFound}>
        <h2>Course details not found</h2>
        <button onClick={() => navigate("/courses")} style={styles.backBtn}>
          ← Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "#f4f6fb", minHeight: "100vh" }}>
      {/* ================= BANNER ================= */}
      <div style={styles.banner}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          ← Back
        </button>
        <h1>{course.title}</h1>
      </div>

      {/* ================= OFFER ================= */}
      <div style={styles.offerWrap}>
        <span style={styles.offerBadge}>{course.offer}</span>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div style={styles.container}>
        <img src={course.image} alt={course.title} style={styles.image} />

        {/* ===== BULLET POINT CONTENT (FIXED) ===== */}
        <ul style={{ paddingLeft: "20px", marginTop: "15px" }}>
          {course.content.map((line, i) => (
            <li key={i} style={{ marginBottom: "8px", lineHeight: "1.6" }}>
              {line}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "40px" }}>Tools You Will Use</h3>

        <div style={styles.marquee}>
          <div style={styles.marqueeInner}>
            {[...course.tools, ...course.tools].map((tool, i) => (
              <div key={i} style={styles.toolCard}>
                <img src={tool.img} alt={tool.name} style={styles.toolImg} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div style={styles.actionBar}>
          <button
            style={styles.enrollBtn}
            onClick={() => setShowEnrollForm(true)}
          >
            Enroll Now
          </button>

          <button
            style={styles.certificateBtn}
            onClick={() => setShowCertificate(true)}
          >
            View Certificate
          </button>
        </div>
      </div>

      {/* ================= FAQ SECTION (MOVED OUT) ================= */}
      <div style={{ maxWidth: "1100px", margin: "40px auto", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          ❓ Frequently Asked Questions
        </h2>

        {course.faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "18px",
              marginBottom: "12px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              cursor: "pointer"
            }}
            onClick={() =>
              setActiveFaq(activeFaq === index ? null : index)
            }
          >
            <strong>{faq.q}</strong>
            {activeFaq === index && (
              <p style={{ marginTop: "10px", color: "#555" }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ================= ENROLL MODAL ================= */}
      {showEnrollForm && (
        <EnrollmentForm
          course={course.title}
          onClose={() => setShowEnrollForm(false)}
        />
      )}

      {/* ================= CERTIFICATE MODAL ================= */}
      {showCertificate && (
        <div style={styles.overlay}>
          <div style={styles.certificateBox}>
            <h2>Your Certificate</h2>
            <img
              src={certificateImg}
              alt="Certificate"
              style={styles.certificateImg}
            />

            <h3>🛠 Tools Covered</h3>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
              {course.tools.map((tool, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <img src={tool.img} alt={tool.name} width={60} />
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>

            <button
              style={{ ...styles.closeBtn, marginTop: "20px" }}
              onClick={() => setShowCertificate(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ================= STYLES (UNCHANGED) ================= */

const styles = {
  banner: {
    background: "#6c6cd4",
    padding: "70px 20px 100px",
    color: "#fff",
    textAlign: "center",
    position: "relative"
  },
  backBtn: {
    position: "absolute",
    left: "20px",
    top: "20px",
    background: "#fff",
    color: "#4b4ba3",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  },
  offerWrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-40px",
    position: "relative"
  },
  offerBadge: {
    background: "linear-gradient(135deg, #ff7a18, #ff3d00)",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "32px",
    fontWeight: "800",
    animation: "pulse 1.8s infinite"
  },
  container: {
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px"
  },
  image: {
    width: "100%",
    maxHeight: "260px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "20px"
  },
  marquee: { overflow: "hidden", marginTop: "20px" },
  marqueeInner: {
    display: "flex",
    gap: "20px",
    width: "max-content",
    animation: "scrollX 18s linear infinite"
  },
  toolCard: {
    minWidth: "160px",
    background: "#fff",
    borderRadius: "14px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
  },
  toolImg: { width: "48px", height: "48px", marginBottom: "10px" },
  actionBar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px"
  },
  enrollBtn: {
    background: "#6c6cd4",
    color: "#fff",
    border: "none",
    padding: "14px 30px",
    borderRadius: "10px",
    fontWeight: "700"
  },
  certificateBtn: {
    background: "#fff",
    color: "#6c6cd4",
    border: "2px solid #6c6cd4",
    padding: "14px 30px",
    borderRadius: "10px",
    fontWeight: "700"
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },
  certificateBox: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90%",
    textAlign: "center"
  },
  certificateImg: {
    width: "100%",
    borderRadius: "8px",
    marginTop: "15px"
  },
  closeBtn: {
    background: "#6c6cd4",
    color: "#fff",
    border: "none",
    padding: "10px 22px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer"
  },
  notFound: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
};
