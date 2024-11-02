import React from 'react';

const SignupUser = async (email, password) => {
  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email,
        password,
        password_confirmation: password,
      },
    }),
  });

  const data = await response.json();
  if (response.ok) {
    console.log("User registered", data);
  } else {
    console.error("Registration failed", data);
  }
};

export default SignupUser;