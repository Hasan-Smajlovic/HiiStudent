import React from "react";
import "../assets/styles/AboutUsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

function AboutUsPage() {
  return (
    <section id="aboutUs">
      <h1>Why Us?</h1>
      <div className="aboutUsContainer">
        <div className="aboutUsText">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Hendrerit dolor magna eget est lorem ipsum. Pellentesque elit eget
            gravida cum sociis natoque penatibus et. Orci eu lobortis elementum
            nibh. Sit amet mattis vulputate enim nulla aliquet porttitor lacus.
            Volutpat ac tincidunt vitae semper. Consequat id porta nibh
            venenatis cras. Nisl nunc mi ipsum faucibus vitae aliquet nec
            ullamcorper sit. Elementum eu facilisis sed odio morbi. Viverra
            ipsum nunc aliquet bibendum enim facilisis. Ultrices tincidunt arcu
            non sodales neque sodales ut. enim.
          </p>
        </div>
        <div className="quoteBoxes">
          <div className="quoteBox">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p>
              The only thing standing between you and outrageous success is
              continuous progress.
            </p>
            <h2> Dan Waldschmidt</h2>
          </div>
          <div className="quoteBox">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p>
              Success is the sum of small efforts, repeated day in and day out.
            </p>
            <h2> Robert Collier</h2>
          </div>
          <div className="quoteBox">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p>
              Always do your best. What you plant now, you will harvest later.
            </p>
            <h2> Og Mandino</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
