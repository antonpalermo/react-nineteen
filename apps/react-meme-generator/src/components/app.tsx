import { useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import Header from './header';
import { useMeme } from '../context/meme';

type Caption = {
  text: string;
  position: {
    x: number;
    y: number;
  };
};

export default function App() {
  const { meme } = useMeme();

  const [captions, setCaptions] = useState<Caption[]>([
    {
      text: 'Caption 1',
      position: {
        x: 0,
        y: 0
      }
    }
  ]);

  function handleOnStart(e: DraggableEvent, data: DraggableData) {}

  function handleOnStop(e: DraggableEvent, data: DraggableData) {
    console.log(e, data);
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl sm:max-w-4xl mx-auto px-5">
        <img src={meme?.url} alt={meme?.name} className="mx-auto" />
        {captions.map((caption, i) => (
          <Draggable
            key={i}
            bounds="parent"
            defaultPosition={{ x: caption.position.x, y: caption.position.y }}
            onStart={(e, data) => handleOnStart(e, data)}
            onStop={(e, data) => handleOnStop(e, data)}
          >
            <div>{caption.text}</div>
          </Draggable>
        ))}
        <button className="bg-violet-500 text-white border border-violet-400 rounded px-3 py-2 text-sm font-medium hover:cursor-pointer">
          Add text
        </button>
      </div>
    </>
  );
}
