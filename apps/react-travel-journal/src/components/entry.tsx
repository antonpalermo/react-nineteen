import Location from '../assets/location.svg';
import Fuji from '../assets/fuji.jpg';

export default function Entry() {
  return (
    <article className="journal-entry">
      <img className="journal-cover" src={Fuji} alt="mount fuji" />
      <div className="journal-contents">
        <div className="journal-meta">
          <img src={Location} alt="pin icon" />
          <span>Japan</span>
          <a href="#">View on Google Maps</a>
        </div>
        <h2>Mt. Fuji</h2>
        <span>12 Jan, 2021 - 24 Jan, 2021</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eleifend faucibus tellus sit amet ornare. Nullam sollicitudin diam non
          eros suscipit, at tincidunt eros rutrum. Maecenas ac dapibus ipsum.
        </p>
      </div>
    </article>
  );
}
