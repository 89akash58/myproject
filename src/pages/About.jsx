import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div style={{ padding: "2rem" }}>
        <h2>About Us</h2>
        <p>
          Welcome to our platform! We are dedicated to providing exceptional
          services and ensuring that our users have the best experience
          possible. Our mission is to innovate and provide solutions that make
          life easier.
        </p>
      </div>
    </div>
  );
}

export default About;
