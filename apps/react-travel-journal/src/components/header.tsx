import Globe from '../assets/globe.svg';

export default function Header() {
  return (
    <header>
      <img src={Globe} alt="globe icon" />
      <h1>My Travel Journal</h1>
    </header>
  );
}
