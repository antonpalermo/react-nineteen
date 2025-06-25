import { useEffect, useState } from 'react';
import Header from './header';

type Meme = {
  box_count: number;
  captions: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};

export default function App() {
  const [meme, setMeme] = useState<Meme>();
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const result = await response.json();

      setMeme(result.data.memes[0]);
      setMemes(result.data.memes);
    }

    fetchImage();
  }, []);

  function pickRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const meme = memes[randomIndex];
    setMeme(meme);
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl sm:max-w-4xl mx-auto px-5">
        <button
          onClick={pickRandomMeme}
          className="bg-violet-500 text-white border border-violet-400 rounded px-3 py-2 text-sm font-medium"
        >
          Pick random meme template
        </button>
        <img src={meme?.url} alt={meme?.name} />
      </div>
    </>
  );
}
