import React from "react";
import "../assets/styles/JobsStyle.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartSimple,
  faCoffee,
  faGamepad,
  faHelmetSafety,
  faLaptopCode,
  faMobile,
  faPaintRoller,
  faPenNib,
  faPenToSquare,
  faSignHanging,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

function JobList() {
  return (
    <section id="jobs">
      <h1> Pick a Category</h1>
      <div className="jobList">
        <div className="jobElements">
          <FontAwesomeIcon icon={faWindowMaximize} size="2xl" />
          <h3>Design & Development</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faPenNib} size="2xl" />
          <h3>Design & Creative</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faChartSimple} size="2xl" />
          <h3>Sales & Marketing</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faMobile} size="2xl" />
          <h3>Mobile Application</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faHelmetSafety} size="2xl" />
          <h3>Construction</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          <h3>Information Technology</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faSignHanging} size="2xl" />
          <h3>Real Estate</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
          <h3>Content Writer</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faCashRegister} size="2xl" />
          <h3>Cashier</h3>
        </div>
        <div className="jobElements">
          <FontAwesomeIcon icon={faGamepad} size="2xl" />
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
