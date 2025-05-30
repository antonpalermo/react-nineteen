import { createRoot } from 'react-dom/client';

function Navbar() {
  return (
    <nav>
      <div>Navbar</div>
    </nav>
  );
}

// create root
const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <Navbar />
  </div>,
);
