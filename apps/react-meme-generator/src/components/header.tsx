import { useMeme } from '../context/meme';

export default function Header() {
  const { getRandomMeme } = useMeme();

  return (
    <header>
      <nav className="max-w-5xl mx-auto px-5">
        <div className="w-full py-5 inline-flex items-center justify-between">
          <h1 className="font-sans text-2xl font-medium">Meme Generator</h1>
          <button
            onClick={getRandomMeme}
            className="bg-violet-500 text-white border border-violet-400 rounded px-3 py-2 text-sm font-medium"
          >
            Pick random meme template
          </button>
        </div>
      </nav>
    </header>
  );
}
