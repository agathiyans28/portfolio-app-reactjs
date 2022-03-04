import React from "react";
import "./ResumeButton.css";
import { greeting } from "../../data";

export default function ResumeButton() {
  return (
    <div className="">
      <a
        href={greeting.resumeLink}
        target="_blank"
        rel="noreferrer"
        className="resume-btn btn btn-primary px-5 py-2 rounded"
      >
        Resume
      </a>
    </div>
  );
}
