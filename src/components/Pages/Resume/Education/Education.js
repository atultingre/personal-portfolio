import React from "react";
import "./Education.css";
import { IoBook } from "react-icons/io5";
import education from "./Education.json";

const Education = () => {
  return (
    <div>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBook />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list" >
          {education.map((edu, index) => (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{edu.college}</h4>
                <span>{edu.year}</span>
                <p className="timeline-text">{edu.degree}</p>
                <span>{edu.percentage}</span>
                <p className="timeline-text">{edu.university}</p>
              </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Education;
