import styles from './photoPage.module.scss';
import photo1 from '../../assets/mostochki/mostok_s_kotom.jpg';
import photo2 from '../../assets/mostochki/mostok_v_blizi.jpg';
import photo3 from '../../assets/mostochki/default.jpg';
import photo4 from '../../assets/mostochki/kizhma.jpg';
import photo5 from '../../assets/mostochki/mezen.jpg';
import Header from '../Header';
import Photo from '../Photo';

function PhotoPage() {
  return (
    <div className={styles.photoApp}>
      <Header />
      <div className={styles.photoListContainer}>
        <div className={styles.photoList}>
          <Photo
            title="кошька на мосточках."
            href="https://www.instagram.com/chillout.films/"
            hrefText="@chillout.films"
            photo={photo1}
          />
          <Photo
            title="мосточки под лупой."
            href="https://www.instagram.com/chillout.films/"
            hrefText="@chillout.films"
            photo={photo2}
          />
          <Photo title="мосточки обыкновенные." href="" hrefText="" photo={photo3} />
          <Photo
            title="мосточки в кимже."
            href="https://www.drive2.ru/c/488261504009765132/"
            hrefText="drive2.ru: хрен13"
            photo={photo4}
          />
          <Photo title="где-то тут точно есть мосточки." href="" hrefText="" photo={photo5} />
        </div>
      </div>
    </div>
  );
}

export default PhotoPage;
