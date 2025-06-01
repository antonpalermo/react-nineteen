import reactLogo from './assets/react_logo.png';

export default function Header() {
  return (
    <header className="page-header">
      <img src={reactLogo} className="header-image" alt="react-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
