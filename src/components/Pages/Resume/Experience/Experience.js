import React from "react";
// import "./Experience.css"
import { RiComputerFill } from "react-icons/ri";
import experience from "./Experience.json"

const Experience = () => {
  return (
    <div>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <RiComputerFill />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
        {experience.map((exp,ind)=>(
          <li className="timeline-item" key={ind}>
            <h4 className="h4 timeline-item-title">{exp.position}</h4>
            <span>{exp.year}</span>
            <p className="timeline-text">{exp.description}</p>
          </li>
        ))}
        </ol>
      </section>
    </div>
  );
};

export default Experience;
