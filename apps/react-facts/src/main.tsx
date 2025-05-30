import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);
// render element
root.render(
  <StrictMode>
    <h1>sample</h1>
  </StrictMode>
);
