import Contact from './contact';

import Max from '../assets/max.jpg';
import Jewel from '../assets/jewel.jpg';
import Orange from '../assets/orange.jpg';
import Phoncho from '../assets/phoncho.jpg';
import Kristal from '../assets/kristal.jpg';
import Biscuit from '../assets/biscuit.jpg';

const cats = [
  {
    name: 'Max',
    img: Max,
    contacts: { email: 'max@catnip.co', mobile: '(02) 8356-7482' }
  },
  {
    name: 'Jewel',
    img: Jewel,
    contacts: { email: 'jewel@catnip.co', mobile: '(032) 416-9835' }
  },
  {
    name: 'Orange',
    img: Orange,
    contacts: { email: 'orange@catnip.co', mobile: '(+63) 917-462-3841' }
  },
  {
    name: 'Phoncho',
    img: Phoncho,
    contacts: { email: 'phoncho@catnip.co', mobile: '(+63) 925-738-2190' }
  },
  {
    name: 'Kristal',
    img: Kristal,
    contacts: { email: 'kristal@catnip.co', mobile: '(082) 299-4731' }
  },
  {
    name: 'Biscuit',
    img: Biscuit,
    contacts: { email: 'biscuit@catnip.co', mobile: '(+63) 998-145-7702' }
  }
];

export default function App() {
  return (
    <main className="container">
      <h1>Cat Contacts</h1>
      <div className="contacts">
        {cats.map(cat => (
          <Contact
            key={cat.name}
            name={cat.name}
            img={cat.img}
            contacts={cat.contacts}
          />
        ))}
      </div>
    </main>
  );
}
