import React from "react";
import "./Contact.css";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm"

const Contact = () => {
  return (
    <div className="article contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <Map />
      <ContactForm/>
    </div>
  );
};

export default Contact;
