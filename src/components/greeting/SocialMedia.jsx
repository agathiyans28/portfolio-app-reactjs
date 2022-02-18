import React from "react";
import "../greeting/Greeting.css";
import { socialMedia } from "../../data";

function SocialMedia() {
  return (
    <div
      className="media-div mt-5"
      // data-aos="fade-up"
      // data-aos-duration="2500"
    >
      {socialMedia.map((item, index) => (
        <a
          href={item.link}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: item.backgroundColor }}
          key={index}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
