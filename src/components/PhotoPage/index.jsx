import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './photoPage.module.scss';
import photo1 from '../../assets/mostochki/mostok_s_kotom.jpg';
import Header from '../Header';

function Photo() {
  return (
    <div className={styles.photoApp}>
      <Header />
      <div className={styles.photoListContainer}>
        <div className={styles.photoList}>
          <div className={styles.photoElement}>
            <img src={photo1} />
            <p>
              кошька на мосточке. <a href="instagram.com">@chillout.films</a>
            </p>
          </div>
          <div className={styles.photoElement}>
            <img src={photo1} />
            <p>похуй</p>
          </div>
          <div className={styles.photoElement}>
            <img src={photo1} />
            <p>похуй</p>
          </div>
          <div className={styles.photoElement}>
            <img src={photo1} />
            <p>похуй</p>
          </div>
          <div className={styles.photoElement}>
            <img src={photo1} />
            <p>похуй</p>
          </div>
          <div className={styles.photoElement}>
            <img src={photo1} />
            <p>похуй</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
