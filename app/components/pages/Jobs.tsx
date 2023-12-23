import React from "react";
import photo from "../assets/photos/52383978.jpg";
import "../assets/styles/JobsStyle.css";

function JobList() {
  return (
    <section id="jobList">
      <h1> Find the job that best suits you!</h1>
      <div className="container">
        <div className="jobBoxes">
          <h3> First job </h3>
          <img src={photo.src} alt="" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button"> Find out more! </button>
        </div>
        <div className="jobBoxes">
          <h3> First job </h3>
          <img src={photo.src} alt="" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button"> Find out more! </button>
        </div>
        <div className="jobBoxes">
          <h3> First job </h3>
          <img src={photo.src} alt="" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button"> Find out more! </button>
        </div>
        {/* <div className="jobBoxes">
          <h3> First job </h3>
          <img src={photo.src} alt="" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button"> Find out more! </button>
        </div> */}
      </div>
      <button className="browseButton" type="button">
        Browse
      </button>
    </section>
  );
}

export default JobList;
