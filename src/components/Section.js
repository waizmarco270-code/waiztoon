import React from "react";
import Subsection from "./Subsection";

// Section-wise backgrounds (edit these colors/gradients as you wish)
const SECTION_STYLES = {
  movies: {
    gradient: "radial-gradient(ellipse at top left, #1a2538 60%, #18234c 100%)",
    bgImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80')"
  },
  anime: {
    gradient: "radial-gradient(ellipse at bottom right, #2b1c35 70%, #422366 100%)",
    bgImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')"
  },
  webseries: {
    gradient: "radial-gradient(ellipse at center, #132b2e 60%, #2e7537 100%)",
    bgImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80')"
  }
};

const SUBSECTIONS = [
  {
    key: "pure_masterpiece",
    title: "A Pure Masterpiece (Top 10)"
  },
  {
    key: "goat",
    title: "Greatest Of All Time (Top 10)"
  },
  {
    key: "must_watch",
    title: "Must Watch Before Die (Top 10)"
  },
  {
    key: "underrated",
    title: "Underrated Masterpiece"
  },
  {
    key: "movies_masterpiece",
    title: "Anime Movies Pure Masterpiece"
  }
];

// Neon gradient borders for section card
const cardStyle = {
  margin: "60px auto 42px auto",
  padding: "32px 8vw 48px 8vw",
  borderRadius: 32,
  maxWidth: 1200,
  background: "rgba(20,30,42,0.90)",
  boxShadow: "0 8px 60px 0 #10ffe799",
  border: "2.5px solid #13ffe9"
};

const Section = ({ section, title, onGoHome }) => {
  const bgStyle = SECTION_STYLES[section] || SECTION_STYLES["movies"];
  const finalBg = `${bgStyle.gradient}, ${bgStyle.bgImage ? bgStyle.bgImage : ""}`;
  
  return (
    <div
      style={{
        minHeight: "100vh",
        background: finalBg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      <div style={cardStyle}>
        {/* Section Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1
            className="neon-text"
            style={{
              marginTop: 0,
              marginBottom: "14px",
              fontSize: "2.6rem",
              letterSpacing: "1px"
            }}
          >
            {title}
          </h1>
          {/* Go back home button */}
          <button
            onClick={onGoHome}
            className="neon-btn"
            style={{
              fontSize: "1rem",
              padding: "10px 22px",
              borderRadius: "10px",
            }}
          >
            ⬅️ Home
          </button>
        </div>
        <div style={{ fontSize: "1.18rem", color: "#63ffe3", opacity: 0.75, marginBottom: 34 }}>
          Explore the best of <b>{title}</b> — tap any poster to unlock downloads & info!
        </div>
        {/* Render all subsections for this section */}
        {SUBSECTIONS.map((sub, idx) => (
          <Subsection
            key={sub.key}
            section={section}
            subKey={sub.key}
            title={sub.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
