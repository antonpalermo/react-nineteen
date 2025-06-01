import Facts from './facts';
import Header from './header';
import Footer from './footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Reasons I want to learn React!</h1>
        <Facts />
      </main>
      <Footer />
    </>
  );
}
