import { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Flags from "./pages/Flags";
import FlagDetail from "./pages/FlagDetail";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      style={{
        background: isDarkMode ? "#272829" : "#fff",
        color: isDarkMode ? "#fff" : "#272829",
      }}
    >
      <Header toggleDarkMode={toggleDarkMode} />
      <Flags />
      <Routes>
        <Route path="/flags" element={<Flags />} />
        <Route path="/flags/:region" element={<FlagDetail />} />
      </Routes>
    </div>
  );
};

export default App;
