import { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import App from './components/app';

// creates a root and display the rendered element
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
