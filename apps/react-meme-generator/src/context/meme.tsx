import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

type Meme = {
  box_count: number;
  captions: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};

const MemeContext = createContext<
  | { memes: Meme[]; meme: Meme | undefined; getRandomMeme: () => void }
  | undefined
>(undefined);

export function useMeme() {
  const context = useContext(MemeContext);

  if (!context) {
    throw new Error('useMeme must be use inside MemeProvider component');
  }

  return context;
}

export type MemeProviderProps = {
  children: ReactNode;
};

export function MemeProvider({ children }: MemeProviderProps) {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [meme, setMeme] = useState<Meme>();

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => {
        const fetchedMemes = res.data.memes as Meme[];
        setMemes(fetchedMemes);

        const randomMemeIndex = Math.floor(Math.random() * fetchedMemes.length);
        setMeme(fetchedMemes[randomMemeIndex]);
      });
  }, []);

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setMeme(memes[randomIndex]);
  }

  return (
    <MemeContext.Provider value={{ meme, memes, getRandomMeme }}>
      {children}
    </MemeContext.Provider>
  );
}
