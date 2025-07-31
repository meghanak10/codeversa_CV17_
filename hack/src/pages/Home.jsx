// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import LanguageButtons from "../components/LanguageButtons";
import FeatureCards from "../components/FeatureCards";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // ✅ initialize the navigate function

  const handleGetStarted = () => {
    navigate("/flashcards"); // ✅ navigate to next page
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/elephant.png"
          alt="Jana Bhasha Logo"
          className="hero-image"
        />
        <h1 className="hero-title">JANA BHASHA</h1>
        <p className="hero-subtitle">SPEAK REGIONAL. CONNECT DEEPER.</p>
        <button
          className="get-started"
          onClick={handleGetStarted} // ✅ handle navigation
        >
          Get Started
        </button>
      </section>

      {/* Language Selection */}
      <section className="language-section">
        <h2>Choose a Language</h2>
        <LanguageButtons />
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Flashcards with Pronunciation</h2>
        <FeatureCards />
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-steps">
          <div>🌐 Choose a Language</div>
          <div>💡 Learn 30 daily words</div>
          <div>3️⃣ Test & Improve</div>
        </div>
      </section>
    </div>
  );
};

export default Home;