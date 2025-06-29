import { useRef, useState } from 'react';
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
  const childRef = useRef<HTMLDivElement>(null);

  const [captions, setCaptions] = useState<Caption[]>([
    {
      text: 'Caption 1',
      position: {
        x: 0,
        y: 0
      }
    }
  ]);

  function newCaption() {
    setCaptions(prevState => [
      ...prevState,
      { text: 'Caption', position: { x: 0, y: 0 } }
    ]);
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl sm:max-w-4xl mx-auto px-5">
        <div>
          <img src={meme?.url} alt={meme?.name} className="mx-auto" />
          {captions.map((caption, i) => (
            <Draggable
              key={i}
              bounds="parent"
              nodeRef={childRef}
              defaultPosition={{ x: caption.position.x, y: caption.position.y }}
            >
              <div
                ref={childRef}
                className="w-fit meme-font text-white uppercase text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                {caption.text}
              </div>
            </Draggable>
          ))}
        </div>
        <button
          onClick={newCaption}
          className="bg-violet-500 text-white border border-violet-400 rounded px-3 py-2 text-sm font-medium hover:cursor-pointer"
        >
          Add text
        </button>
      </div>
    </>
  );
}
