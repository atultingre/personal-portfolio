import React from "react";
import "./About.css";
// import Service from "../Service/Service";
// import Clients from "../Clients/Clients";
import Skills from "../Resume/Skills/Skills"


const About = () => {
  return (
    <div className="about active article">
        <header>
          <h2 className="h2 article-title">About Me</h2>
        </header>
        <section className="about-text">
          <p>
            Hi there, I'm a React frontend developer with a passion for building elegant, user-friendly web applications. With years of experience in the field.
          </p>
          <p>I am skilled in creating dynamic and responsive interfaces using the latest technologies and best
            practices.</p>
          <p>
            I love to collaborate with other developers and designers to bring
            great ideas to life. Let's work together to build something amazing!
          </p>
        </section>
        <Skills/>
        {/* <Service /> */}
        {/* <Clients/> */}
    </div>
  );
};

export default About;
