import { useEffect, useState } from 'react';
import Header from './header';
import { useMeme } from '../context/meme';

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
  const { meme } = useMeme();

  return (
    <>
      <Header />
      <div className="max-w-5xl sm:max-w-4xl mx-auto px-5">
        <img src={meme?.url} alt={meme?.name} />
      </div>
    </>
  );
}
