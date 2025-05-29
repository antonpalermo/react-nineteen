import { createRoot } from 'react-dom/client';

import App from './components/app';

// 1. create root
const root = createRoot(document.getElementById('root') as HTMLElement);
// 2. render component
root.render(<App />);
