import React from "react";
import "./Resume.css";
// import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const Resume = () => {
  return (
    <div className="article" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {/* <Skills/> */}
      <Education/>
      <Experience/>
    </div>
  );
};

export default Resume;
