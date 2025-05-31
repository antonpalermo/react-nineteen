import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import reactLogo from './assets/react_logo.png';

function FactsHeading() {
  return <h1>React Facts</h1>;
}

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

// creates a root and display the rendered element
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <main>
      <img src={reactLogo} alt="react-logo" />
      <FactsHeading />
      <Facts />
    </main>
  </StrictMode>
);
