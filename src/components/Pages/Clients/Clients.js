import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <div>
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href=" // eslint-disable-next-line">
              <img src="./images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="// eslint-disable-next-line">
              <img src="./images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="// eslint-disable-next-line">
              <img src="./images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="// eslint-disable-next-line">
              <img src="./images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="// eslint-disable-next-line">
              <img src="./images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="// eslint-disable-next-line">
              <img src="./images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Clients;
