import React, { useEffect, useState } from "react";

const PASSWORDS = {
  movies: "waizmovies",
  anime: "waizanime",
  webseries: "waizseries"
};

const SECTION_NAMES = {
  movies: "Movies",
  anime: "Anime",
  webseries: "Web Series"
};

const PasswordModel = ({ visible, section, onClose, onUnlock }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInput("");
    setError("");
    setSuccess(false);
  }, [visible, section]);

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORDS[section]) {
      setSuccess(true);
      setError("");
      setTimeout(() => {
        onUnlock(section);
        onClose();
      }, 1200);
    } else {
      setError("Incorrect password. Try again!");
      setSuccess(false);
    }
  };

  return (
    <div
      className="modal-bg"
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(14,18,28,0.87)",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}
    >
      <form
        className="modal-content"
        onSubmit={handleSubmit}
        style={{
          background: "linear-gradient(135deg,#151d2c 80%,#222940 100%)",
          borderRadius: 24,
          boxShadow: "0 6px 56px 0 #1debcf55",
          padding: "32px 30px 20px 30px",
          minWidth: 320,
          position: "relative",
          display: "flex", flexDirection: "column", alignItems: "center"
        }}
      >
        <div style={{ fontSize: 34, color: "#39ffc0", marginBottom: 10 }}>
          <span role="img" aria-label="lock">
            <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
              <rect x="7" y="18" width="28" height="18" rx="7" fill="#1fd6c2" opacity="0.4"/>
              <rect x="14" y="8" width="14" height="18" rx="7" fill="#39ffc0" />
              <circle cx="21" cy="28" r="3.5" fill="#13ffe9" stroke="#1ffefb" strokeWidth="2"/>
            </svg>
          </span>
        </div>
        <h3 style={{ margin: 0, fontWeight: 800, color: "#1ffefb", fontSize: "1.5rem" }}>
          {SECTION_NAMES[section]} Access
        </h3>
        <p style={{ margin: "14px 0 0", color: "#aefff3", fontSize: "1rem" }}>
          Enter the password to unlock this section.
        </p>
        <input
          type="password"
          placeholder="Enter password…"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{
            margin: "22px 0 0 0",
            padding: "12px",
            width: "90%",
            borderRadius: 12,
            border: "none",
            background: "#14182b",
            color: "#39ffc0",
            fontSize: "1.1rem",
            outline: "2px solid #13ffe9",
            boxShadow: "0 0 11px #39ffc0cc"
          }}
        />
        <button
          type="submit"
          className="neon-btn"
          style={{
            width: "80%",
            marginTop: "17px",
            fontSize: "1.15rem"
          }}
        >
          Unlock
        </button>
        <div style={{ height: 30, marginTop: 7, fontWeight: 600 }}>
          {error && <span style={{ color: "#ff3994" }}>{error}</span>}
          {success && (
            <span style={{ color: "#35ffb7" }}>
              Access Granted! Redirecting...
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 14,
            background: "none",
            border: "none",
            color: "#1ffefb",
            fontSize: 26,
            cursor: "pointer",
            lineHeight: 1
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <div style={{color:'#15fff1', marginTop:6, fontSize:'0.98rem', opacity:0.65}}>
          <span>The current password (for now): <b>{PASSWORDS[section]}</b></span>
        </div>
      </form>
    </div>
  );
};

export default PasswordModel;
