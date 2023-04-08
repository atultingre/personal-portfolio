import React, { useRef } from "react";
import "./Sidebar.css";
import {BsChevronDown} from "react-icons/bs";

import ContactDetails from "./ContactDetails/ContactDetails";
import SocialMedia from "./Social/SocialMedia";

const Sidebar = () => {
  const sidebarRef = useRef(null);

  const elementToggleFunc = (elem) => {
    elem.current.classList.toggle("active");
  };

  const handleSidebarToggle = () => {
    elementToggleFunc(sidebarRef);
  };

  return (
    <aside className="sidebar active" data-sidebar ref={sidebarRef}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./images/my-avatar1.png" alt="Atul Tingre" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Atul Tingre">
            Atul Tingre
          </h1>
          <p className="title">React Developer</p>
        </div>
        <button
          className="info-more-btn"
          onClick={handleSidebarToggle}
          data-sidebar-btn>
          <span>Show Contacts</span>
          <div className="ion-icon">
            <BsChevronDown />
          </div>
        </button>
      </div>
      <div className="sidebar-info-more">
        <ContactDetails/>
        <SocialMedia/>
      </div>
    </aside>
  );
};

export default Sidebar;
