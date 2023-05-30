import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Support from "./pages/support";
import Dev from "./pages/dev";
import Developer from "./pages/developer";
import { useState, useEffect } from "react";

const App = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    if (theme.matches === true) {
      setMode("dark");
    } else {
      setMode("white");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme); // "dark" or "light"
      });
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/dev" element={<Dev />} />
      <Route path="/developer" element={<Developer theme={mode} />} />
    </Routes>
  );
};

export default App;
