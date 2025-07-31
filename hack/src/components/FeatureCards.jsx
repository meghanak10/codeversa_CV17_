// src/components/FeatureCards.jsx
import React from "react";

const features = [
  {
    img: "/flashcard.png",
    title: "Flashcards with Pronunciation",
  },
  {
    img: "/quiz.png",
    title: "Match the Word (Quiz)",
  },
  {
    img: "/sentence.png",
    title: "Build a Sentence (Drag & Drop)",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-cards">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <img src={feature.img} alt={feature.title} />
          <p className="feature-title">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;