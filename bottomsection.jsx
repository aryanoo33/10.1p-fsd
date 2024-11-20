import React, { useState } from "react";
import axios from "axios"; // Axios for HTTP requests
import "./bottomsection.css"; // Your CSS file

const BottomBar = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isSuccess, setIsSuccess] = useState(false); // Success state for styling

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubscribe = async () => {
    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email.");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true); // Start loading spinner
    setMessage(""); // Clear any previous messages

    try {
      const response = await axios.post("http://localhost:6000/subscribe", {
        email,
      });

      setMessage("Subscription successful! Check your email.");
      setIsSuccess(true);
      setEmail(""); // Clear email input
    } catch (error) {
      console.error("Subscription error:", error); // Debugging log
      setMessage(
        error.response?.data?.error || "Failed to subscribe. Please try again."
      );
      setIsSuccess(false);
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="Btm_bar">
      <p>Sign Up for Daily Insider</p>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe} disabled={isLoading}>
        {isLoading ? "Subscribing..." : "SUBSCRIBE"}
      </button>
      {message && (
        <p className={`message ${isSuccess ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default BottomBar;
