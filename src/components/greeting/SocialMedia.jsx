import React from "react";
import "../greeting/Greeting.css";
import { socialMedia } from "../../data";

function SocialMedia() {
  return (
    <div className="media-div mt-5">
      {socialMedia.map((item) => (
        <a
          href={item.link}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: item.backgroundColor }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
