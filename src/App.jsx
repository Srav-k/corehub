import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (✅ FIXED CASE-SENSITIVE IMPORTS)
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ContactUs from "./pages/Contactus";

// Components
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import AnimatedBanner from "./components/AnimatedBanner";
import BackgroundWrapper from "./components/BackgroundWrapper";
import ViewDetails from "./components/ViewDetails";
import ChatBot from "./components/ChatBot";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReturnRefund from "./components/ReturnRefund";

export default function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <Header />
        <AnimatedBanner />
        <NavMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<ViewDetails />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<ReturnRefund />} />
        </Routes>

        <ChatBot />
        <Footer />
      </BackgroundWrapper>
    </Router>
  );
}

