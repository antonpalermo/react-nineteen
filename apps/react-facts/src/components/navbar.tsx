import Logo from '../assets/react_logo.png';

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="react logo" />
        <span>React Facts</span>
      </nav>
    </header>
  );
}
