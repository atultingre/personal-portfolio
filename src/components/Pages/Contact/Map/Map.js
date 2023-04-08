import React from "react";
import "./Map.css"
const Map = () => {
  
  return (
    <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120610.97447258228!2d77.23345246841072!3d19.147408064135487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d66bb9d31721%3A0x43892c180155daf1!2sNanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680889822169!5m2!1sen!2sin"
            width="400"
            // loading="lazy"
            height="300"
            title="my-google-location"

            ></iframe>
        </figure>
      </section>
  )
}


export default Map;
