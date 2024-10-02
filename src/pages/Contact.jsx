import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div style={{ padding: "2rem" }}>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at:</p>
        <ul>
          <li>Email: support@ourplatform.com</li>
          <li>Phone: +1-234-567-890</li>
        </ul>
        <p>Our support team is available 24/7 to help you.</p>
      </div>
    </div>
  );
}

export default Contact;
