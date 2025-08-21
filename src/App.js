import React, { useState, useCallback, useEffect } from "react";
import Homepage from "./components/Homepage";
import PasswordModel from "./components/PasswordModel";
import Section from "./components/Section";

// All section keys and names
const SECTIONS = {
  movies: "Movies",
  anime: "Anime",
  webseries: "Web Series"
};

const App = () => {
  // Which section are we viewing? null = homepage
  const [currentSection, setCurrentSection] = useState(null);

  // Which modal is open and for which section?
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSection, setModalSection] = useState(null);

  // Listen for homepage buttons click (custom event from Homepage)
  useEffect(() => {
    function handleOpenPassword(e) {
      setModalVisible(true);
      setModalSection(e.detail);
    }
    window.addEventListener("openPassword", handleOpenPassword);
    return () => window.removeEventListener("openPassword", handleOpenPassword);
  }, []);

  // When password unlocks
  const handleUnlock = useCallback(
    section => {
      setCurrentSection(section);
    },
    []
  );

  // To go back to homepage
  const handleGoHome = () => {
    setCurrentSection(null);
  };

  return (
    <div>
      {/* Show homepage if not viewing any section */}
      {currentSection === null && <Homepage />}
      {/* Show the section page when a section is chosen */}
      {currentSection !== null && (
        <Section
          section={currentSection}
          title={SECTIONS[currentSection]}
          onGoHome={handleGoHome}
        />
      )}
      {/* Password modal pops up when you click a button */}
      <PasswordModel
        visible={modalVisible}
        section={modalSection}
        onClose={() => setModalVisible(false)}
        onUnlock={handleUnlock}
      />
    </div>
  );
};

export default App;
