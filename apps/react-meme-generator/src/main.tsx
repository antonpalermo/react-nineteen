import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import App from './components/app';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
