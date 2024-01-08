import React from "react";
import "../assets/styles/ApplyPageStyle.css";
import "../assets/styles/JobsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCoffee,
  faFileCircleCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

function ApplyPage() {
  return (
    <section id="applyPage">
      <h1> How to Apply?</h1>
      <div className="applyPageContainer">
        <div className="processBox">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
          <h3> Search</h3>
          <p>
            {" "}
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>
        <div className="processBox">
          <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" />
          <h3> Apply</h3>
          <p>
            {" "}
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>
        <div className="processBox">
          <FontAwesomeIcon icon={faCheck} size="2xl" />
          <h3> Work</h3>
          <p>
            {" "}
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ApplyPage;
