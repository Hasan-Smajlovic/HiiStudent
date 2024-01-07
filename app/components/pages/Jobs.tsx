import React from "react";
import "../assets/styles/JobsStyle.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLaptopCode,
  faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

function JobList() {
  return (
    <section id="jobs">
      <h1> Pick a Category</h1>
      <div className="jobList">
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Design & Development</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Design & Creative</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Sales & Marketing</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Mobile Application</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Construction</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Information Technology</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Real Estate</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Content Writer</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Construction Worker</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Game Developer</h3>
        </div>
      </div>
      <button id="categoriesBtn" type="button">
        BROWSE ALL CATEGORIES
      </button>
    </section>
  );
}

export default JobList;
