"use client";
import React, { useState } from "react";
import "../registerStyle.css";

function Register() {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div>
      <form>
        <div id="registerForm">
          <h1>{isRegister ? "Register" : "Login"}</h1>
          {isRegister && (
            <>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
              />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </>
          )}
          <input type="text" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <button
            className="signUp"
            type="button"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Sign up" : "Login"}
          </button>
          <p>
            {isRegister
              ? "Already have an account? "
              : "Don't have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsRegister(!isRegister);
              }}
            >
              {isRegister ? "Log in" : "Register"}
            </a>
          </p>
          <hr />
          <button className="facebookLogin" type="button">
            Login with Facebook
          </button>
          <button className="googleLogin" type="button">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
