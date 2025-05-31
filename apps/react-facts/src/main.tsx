import { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import reactLogo from './assets/react_logo.png';

function Facts() {
  return (
    <ul>
      <li>Developed by Facebook</li>
      <li>Component-Based Architecture</li>
      <li>Virtual DOM for Performance</li>
      <li>JSX - JavaScript + XML</li>
      <li>Strong Ecosystem and Community</li>
    </ul>
  );
}

function Header() {
  return (
    <header>
      <img src={reactLogo} alt="react-logo" />
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2025 Anton Palermo development. All rights reserved</small>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Reasons I want to learn React!</h1>
        <Facts />
      </main>
      <Footer />
    </>
  );
}

// creates a root and display the rendered element
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
