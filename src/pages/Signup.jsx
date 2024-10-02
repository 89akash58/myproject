import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the CSS file for styling
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for react-toastify

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-center", // Corrected to string notation
        autoClose: 3000, // Alert duration set to 3 seconds
      });
      return;
    }

    const requestBody = {
      name: name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    try {
      const response = await fetch(
        "https://django-2-9zg8.onrender.com/api/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        toast.success("Signup successful!", {
          position: "top-center", // Corrected to string notation
          autoClose: 3000, // Alert duration set to 3 seconds
        });
        setTimeout(() => navigate("/login"), 3000); // Navigate after 3 seconds
      } else {
        const errorData = await response.json();
        toast.error(`Signup failed: ${errorData.message || "Unknown error"}`, {
          position: "top-center", // Corrected to string notation
          autoClose: 3000, // Alert duration set to 3 seconds
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center", // Corrected to string notation
        autoClose: 3000, // Alert duration set to 3 seconds
      });
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Demostration </h1>
      <div className="auth-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Signup
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="link">
            Login
          </span>
        </p>
        <ToastContainer />
      </div>
    </>
  );
}

export default Signup;
