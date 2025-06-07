import Globe from '../assets/globe.svg';

export default function Header() {
  return (
    <header className="bg-[#f55a5a] text-white w-full inline-flex items-center justify-center min-h-16">
      <img src={Globe} alt="globe icon" className="w-6 mr-2" />
      <h1 className="font-semibold">My Travel Journal</h1>
    </header>
  );
}
