import React from "react";
import { socialMedia } from "../../data";
import "./socialMedia.css";

function SocialMedia() {
  return (
    <div className="media-div">
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
