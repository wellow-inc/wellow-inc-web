
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hide loader once app is ready
window.addEventListener('load', () => {
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.visibility = 'hidden';
    }, 600);
  }
});
