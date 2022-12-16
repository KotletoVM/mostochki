import styles from './photo.module.scss';

function Photo({ photo, href, hrefText, title }) {
  return (
    <div className={styles.photoElement}>
      <img src={photo} alt="" />
      <p>
        {title} <a href={href}>{hrefText}</a>
      </p>
    </div>
  );
}

export default Photo;
