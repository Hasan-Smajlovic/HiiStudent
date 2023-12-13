import React from "react";
import "./globals.css";

function Register() {
  return (
    <>
      <form>
        <div id="registerForm">
          <h1> Sign up </h1>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
          />
          <input type="text" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          <button className="signUp" type="button">
            Sign up
          </button>
          <p>
            Already have an account? <a href="google.com"> Log in </a>
          </p>
          <hr></hr>
          <button className="facebookLogin" type="button">
            Login with Facebook
          </button>
          <button className="googleLogin" type="button">
            Login with Google
          </button>
        </div>
      </form>
    </>
  );
}

export default function Home() {
  return <Register />;
}
