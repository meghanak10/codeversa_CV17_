// src/components/LanguageButtons.jsx
import React from "react";

const languages = ["Kannada", "Telugu", "Tamil", "Malayalam", "Hindi"];

const LanguageButtons = () => {
  return (
    <div className="language-buttons">
      {languages.map((lang) => (
        <button key={lang} className="lang-btn">
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageButtons;