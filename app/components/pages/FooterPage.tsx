import React from "react";
import "../assets/styles/FooterPageStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

function FooterPage() {
  return (
    <section id="footerPage">
      <div className="footerPageContainer">
        <div className="about">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="contactInfo">
          <h3>CONTACT US</h3>
          <p>Adress: Lorem ipsum </p>
          <p>Phone: 123-456-7890</p>
          <p>Email: email123@email.com </p>
        </div>
        <div className="links">
          <h3>IMPORTANT LINKS</h3>
          <p>Home</p>
          <p>Jobs</p>
          <p>CV</p>
          <p>Apply</p>
          <p>Post Job</p>
          <p>About Us</p>
        </div>
        <div className="sendEmail">
          <h3>ASK US QUESTION</h3>
          <p>If you have any questions feel free to ask!</p>
          <input type="text" placeholder="Email Address"></input>
          <button type="submit">
            {" "}
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FooterPage;
