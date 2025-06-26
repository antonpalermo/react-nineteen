import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import App from './components/app';
import { MemeProvider } from './context/meme';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MemeProvider>
      <App />
    </MemeProvider>
  </StrictMode>
);
