import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
