import React, { useState } from "react";
import "chart.js/auto";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
import Data from "./Data";
// import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
const Home = () => {
  // const navigate = useNavigate();

  // const Navbar = () => {
  //   const handleLogout = () => {
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("refreshToken");

  //     toast.success("Logged out successfully", {
  //       position: "top-center",
  //       autoClose: 3000,
  //     });

  //     navigate("/login");
  //   };

  //   return (
  //     <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
  //       <ul
  //         style={{
  //           listStyleType: "none",
  //           display: "flex",
  //           justifyContent: "space-around",
  //           alignItems: "center",
  //           margin: 0,
  //         }}
  //       >
  //         <li>
  //           <Link className="links" to="/home">
  //             Home
  //           </Link>
  //         </li>
  //         <li>
  //           <Link className="links" to="/about">
  //             About
  //           </Link>
  //         </li>
  //         <li>
  //           <Link className="links" to="/contact">
  //             Contact
  //           </Link>
  //         </li>
  //         <li>
  //           <Link className="links" to="/services">
  //             Services
  //           </Link>
  //         </li>
  //         <li>
  //           <button
  //             onClick={handleLogout}
  //             style={{
  //               padding: "0.5rem 1rem",
  //               backgroundColor: "#f44336",
  //               color: "white",
  //               border: "none",
  //               borderRadius: "4px",
  //               cursor: "pointer",
  //             }}
  //           >
  //             Logout
  //           </button>
  //         </li>
  //       </ul>
  //     </nav>
  //   );
  // };

  return (
    <div>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <Data />
      </div>
    </div>
  );
};

export default Home;
