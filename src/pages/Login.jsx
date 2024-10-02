import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const requestBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://django-2-9zg8.onrender.com/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);

        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
        });
        navigate("/home");
      } else {
        const errorData = await response.json();
        toast.error(
          `Login failed: ${errorData.detail || "Invalid credentials"}`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const makeAuthenticatedRequest = async (url, method = "GET", body = null) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(url, options);

    if (response.status === 401) {
      const refreshed = await refreshToken();
      if (refreshed) {
        return makeAuthenticatedRequest(url, method, body);
      } else {
        window.location.href = "/login";
      }
    }

    return response;
  };

  // Token refresh logic
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await fetch(
      "https://django-2-9zg8.onrender.com/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("accessToken", data.access);
      return true;
    }

    return false;
  };

  return (
    <>
      <ToastContainer />
      <h1 style={{ textAlign: "center" }}>Demonstration</h1>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading} // Disable input during loading
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading} // Disable input during loading
            />
          </div>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/")} className="link">
            Signup
          </span>
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
