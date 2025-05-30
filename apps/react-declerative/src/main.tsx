// import { createRoot } from 'react-dom/client';

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <h1>hello-world</h1>,
// );

const heading = document.createElement('h1');
heading.textContent = 'This is a heading content';
heading.className = 'heading';

const container = document.getElementById('root');

container?.appendChild(heading);
