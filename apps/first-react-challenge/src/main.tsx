import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ul>
    <li>Exciting</li>
    <li>Popular</li>
    <li>Reactive</li>
  </ul>,
);
