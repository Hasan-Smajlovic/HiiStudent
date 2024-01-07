import React from "react";
import "../assets/styles/HomeStyle.css"; // Import the styles

const HomePage = () => {
  return (
    <section id="home">
      <div className="homePage">
        <h1>
          {" "}
          Welcome, <br></br> Find the most exciting jobs for You!
        </h1>
        <div className="homePageElements">
          <input type="text" placeholder="Job Title or Keyword"></input>
          <select title="Location">
            <option value="Sarajevo">Sarajevo</option>
            <option value="Visoko">Visoko</option>
            <option value="Tuzla">Tuzla</option>
            <option value="Ilijaš">Ilijaš</option>
          </select>
          <button type="button"> Find Job</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
