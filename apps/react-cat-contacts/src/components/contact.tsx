import style from './contact.module.css';

export interface ContactProps {
  name: string;
  img: string;
  contacts: {
    email: string;
    mobile: string;
  };
}

export default function Contact({ name, img, contacts }: ContactProps) {
  return (
    <article className={style.article_container}>
      <div className={style.cover_container}>
        <img src={img} alt={`${name}'s contact photo`} />
      </div>
      <div className={style.article_contents}>
        <h2 className={style.article_name}>{name}</h2>
        <span>{contacts.email}</span>
        <span>{contacts.mobile}</span>
      </div>
    </article>
  );
}
