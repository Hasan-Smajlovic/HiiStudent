import React from "react";
import { Link } from "react-router-dom";
import "../indexStyle.css";

function IndexPage() {
  return (
    <div className="navBar">
      <h1 className="navTitle">HiiStudent</h1>
      <ol className="navList">
        <li>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/aboutUs"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About us{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            Contact{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Register/Log in
          </Link>
        </li>
      </ol>
    </div>
  );
}

export default IndexPage;
