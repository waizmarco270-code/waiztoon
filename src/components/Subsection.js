import React, { useState } from "react";

// Dynamic import for your JSON data
import content from "../../data/content.json";

// Rainbow Border Animation using CSS
const cardBase =
  "box-shadow: 0 0 20px #26fff7b6, 0 0 40px #2bffcc8f; transition: box-shadow 0.29s, transform 0.22s; border-radius: 20px;";
const cardHover =
  "box-shadow: 0 0 32px #09ffe2, 0 0 80px #b6fff3, 0 0 22px #fff040; border: 2px solid #5cf7ff; transform: scale(1.05) rotate(-2deg);";

const Subsection = ({ section, subKey, title }) => {
  // Pull array of items (or empty array)
  const items =
    (content &&
      content[section] &&
      content[section][subKey] &&
      Array.isArray(content[section][subKey])) ?
      content[section][subKey] : [];

  // For popup info
  const [infoIndex, setInfoIndex] = useState(null);

  // Confirmation/info for download link
  const handlePosterClick = (item) => {
    if (!item.download) return;
    if (
      window.confirm(
        `You are about to open the download link for:\n\n${item.name}\n\nOkay to continue?`
      )
    ) {
      window.open(item.download, "_blank");
    }
  };

  return (
    <div style={{ marginBottom: 48 }}>
      {/* Subsection Title */}
      <h2
        style={{
          fontWeight: 830,
          fontSize: "2rem",
          color: "#3fffea",
          marginBottom: 11,
          letterSpacing: "1px",
          marginTop: 54
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "34px",
          justifyContent: "center"
        }}
      >
        {items.length > 0
          ? items.map((item, idx) => (
              <div
                key={item.name || idx}
                style={{
                  width: 167,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  background: "#131631cc",
                  ...({
                    boxShadow:
                      infoIndex === idx
                        ? cardHover
                        : cardBase,
                  }),
                  borderRadius: 20,
                  position: "relative",
                }}
                tabIndex={0}
                // Hover styles for desktop, infoIndex for mobile/hold
                onMouseEnter={() => setInfoIndex(idx)}
                onMouseLeave={() => setInfoIndex(null)}
                onFocus={() => setInfoIndex(idx)}
                onBlur={() => setInfoIndex(null)}
                onClick={() => handlePosterClick(item)}
              >
                {/* Rank Number */}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 12,
                    background: "#33fbe7e5",
                    color: "#161d20",
                    borderRadius: 9,
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    padding: "4px 10px",
                    zIndex: 10,
                    boxShadow: "0 1px 14px #11d4ad80"
                  }}
                >
                  #{idx + 1}
                </div>
                {/* Poster Image */}
                <img
                  src={item.img || "https://via.placeholder.com/160x230?text=No+Image"}
                  alt={item.name}
                  style={{
                    width: 150,
                    height: 210,
                    objectFit: "cover",
                    borderRadius: 16,
                    margin: "18px 0 0 0",
                    boxShadow: "0 0 12px #25fff1cc",
                    border: infoIndex === idx ? "2.5px solid #fff626" : "2px solid #2cf4e4",
                    transition: "border 0.11s"
                  }}
                  draggable={false}
                />
                {/* Name */}
                <div
                  style={{
                    margin: "12px 0 9px 0",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#46fefa",
                    textAlign: "center",
                    minHeight: 30,
                    letterSpacing: "0.7px",
                  }}
                >
                  {item.name}
                </div>

                {/* Info on hover/hold */}
                {infoIndex === idx && item.info && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "84px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      minWidth: 160,
                      maxWidth: 178,
                      background: "rgba(20,30,35,0.98)",
                      color: "#f3fd67",
                      borderRadius: 11,
                      boxShadow: "0 0 22px #ffd459bb",
                      padding: "8px 12px 10px 12px",
                      fontSize: "0.99rem",
                      zIndex: 20,
                      animation: "fadein .23s"
                    }}
                  >
                    {item.info}
                    <div style={{ color: "#1bcfee", fontSize: "0.81rem", marginTop: 5 }}>
                      [Tap poster to open download link]
                    </div>
                  </div>
                )}
              </div>
            ))
          : // Placeholder for empty/future
            Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: 167,
                  minHeight: 285,
                  background: "rgba(24,32,35,0.69)",
                  borderRadius: 18,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1bffea",
                  boxShadow: "0 0 10px #299fff33",
                  margin: "10px 0"
                }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 700, opacity: 0.4 }}>+</div>
                <div style={{ fontSize: "1.1rem", textAlign: "center", opacity: 0.5 }}>
                  Coming Soon...
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Subsection;
