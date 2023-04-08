import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Resume from "./components/Pages/Resume/Resume";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <main>
    <Sidebar />
    <div className="main-content">
      <Router>
        <Navbar toggleTheme={toggleTheme}/>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    </main>
  );
}

export default App;
