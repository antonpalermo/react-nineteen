import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';
import App from './components/app';
import { IngredientContextProvider } from './contexts/ingredients';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <IngredientContextProvider>
      <App />
    </IngredientContextProvider>
  </StrictMode>
);
