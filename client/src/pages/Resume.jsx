import React from "react";
import "./Resume.css";

function Resume(){

  return(
    <div className="resume-page">

      <h1>
        My Resume
      </h1>


      <iframe
        src="Professional-Resume manav.pdf"
        title="Resume"
        className="resume-frame"
      ></iframe>


      <a
        href="Professional-Resume manav.pdf"
        download
        className="download-btn"
      >
        Download Resume
      </a>


    </div>
  );

}

export default Resume;