import { createRoot } from 'react-dom/client';

function Navbar() {
  return (
    <nav>
      <div>Navbar</div>
    </nav>
  );
}

function Home() {
  return <h1>React Home</h1>;
}

// create root
const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <Navbar />
    <Home />
  </div>,
);
