import React from "react";
import "./ContactDetails.css";
import { AiOutlineMobile } from "react-icons/ai";
import { BsEnvelopeAt, BsCalendar3,BsFillGeoAltFill,} from "react-icons/bs";
const ContactDetails = () => {
  return (
    <div>
      <div className="separator"></div>
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <div className="ion-icon">
              <BsEnvelopeAt />
            </div>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:atultingre.work@gmail.com" className="contact-link">
              atultingre.work@gmail.com
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <div className="ion-icon">
              {/* <BsFillTelephoneFill /> */}
              <AiOutlineMobile />
            </div>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel:+918806234568" className="contact-link">
              +91 8806234568
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <div className="ion-icon">
              <BsCalendar3 />
            </div>
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <time dateTime="1997-12-05">Dec 05, 1997</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <div className="ion-icon">
              <BsFillGeoAltFill />
            </div>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Nanded, Maharashtra, India</address>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
