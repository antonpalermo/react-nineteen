import { useEffect, useState } from 'react';
import Header from './header';

export default function App() {
  const [imgs, setImgs] = useState();

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      setImgs(await response.json());
    }

    fetchImage();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-5xl sm:max-w-4xl mx-auto px-5">
        {JSON.stringify(imgs)}
      </div>
    </>
  );
}
