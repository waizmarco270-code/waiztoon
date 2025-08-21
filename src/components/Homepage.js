import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="neon-text" style={{ fontSize: "3.2rem", marginBottom: "24px" }}>
        WaizToon
      </h1>
      <p className="neon-subtext" style={{ fontSize: "1.3rem" }}>
        Welcome to <span style={{ color: "#1ffefb", fontWeight: 700 }}>WaizToon</span> — 
        Your ultimate destination for <strong>top recommended movies, anime, and web series</strong> with one-click free download links.<br /><br />
        <span style={{ color: "#39ffc0" }}>Zero subscription, only pure entertainment!</span>
      </p>

      <div className="main-buttons">
        <button className="neon-btn" onClick={() => window.dispatchEvent(new CustomEvent("openPassword", {detail: "movies"}))}>
          Movies
        </button>
        <button className="neon-btn" onClick={() => window.dispatchEvent(new CustomEvent("openPassword", {detail: "anime"}))}>
          Anime
        </button>
        <button className="neon-btn" onClick={() => window.dispatchEvent(new CustomEvent("openPassword", {detail: "webseries"}))}>
          Web Series
        </button>
      </div>

      <div style={{ marginTop: "48px", color: "#4df0e1", fontSize: "1.02rem", opacity: 0.7 }}>
        <svg width="24" height="24" fill="none" style={{verticalAlign: "middle", marginRight: 6}}>
          <circle cx="12" cy="12" r="11" stroke="#36ffc0" strokeWidth="2"/>
          <text x="11" y="17" textAnchor="middle" fontSize="12" fill="#36ffc0" fontWeight="bold">?</text>
        </svg>
        <span>
          Note: All sections are password protected for exclusive community. Password will be shown below your chosen section.
        </span>
      </div>
    </div>
  );
};

export default Homepage;
