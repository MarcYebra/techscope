import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import RedBox from 'redbox-react';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    const root = createRoot(reactElement);
    if (window.railsEnv && window.railsEnv === 'development') {
      try {
        root.render(<App />);
      } catch (e) {
        root.render(<RedBox error={e} />);
      }
    } else {
      root.render(<App />);
    }
  }
});
