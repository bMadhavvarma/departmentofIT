import '../src/index.css'
import React, { useEffect, useState } from 'react'
import LandingPage from './Components/Landingpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Syllabus from './Components/Syllabus/Syllabus';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Theme changed");
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage change={handleThemeChange} />} />
          <Route path="/syllabus" element={<Syllabus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
