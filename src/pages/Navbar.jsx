import React from "react";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 3000,
    });

    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 0,
        }}
      >
        <li>
          <Link className="links" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="links" to="/services">
            Services
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
