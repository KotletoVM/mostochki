import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import styles from './infoPage.module.scss';
function InfoPage() {
  return (
    <div className={styles.app}>
      <Header />
      <h1>мосток — деревянный настил для пешеходов вдоль улицы; дощатый тротуар</h1>
      <h1>мосточек — уменьшительно-ласкательная форма слова мосток</h1>
      <h1>мосточки — слово мосточек во множественном числе</h1>
    </div>
  );
}

export default InfoPage;
