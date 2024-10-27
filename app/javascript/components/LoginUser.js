import React, { useState } from 'react';

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginUser = async (email, password) => {
    const response = await fetch("http://localhost:3000/users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });

    return response;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(null); // Clear error on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError(null); // Clear error on change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(email, password);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save the token
        console.log("Login successful");
        // You can add a redirect here if necessary
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginUser;
