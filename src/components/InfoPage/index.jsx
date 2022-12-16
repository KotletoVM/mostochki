import Header from '../Header';
import styles from './infoPage.module.scss';
function InfoPage() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.infoContainer}>
        <div className={styles.infoContainerChild}>
          <h1>значение:</h1>
          <h2>
            мост<span>о́</span>к — деревянный настил для пешеходов вдоль улицы; дощатый тротуар
          </h2>
          <h2>
            мост<span>о́</span>чек — уменьшительно-ласкательная форма слова мосток
          </h2>
          <h2>
            мост<span>о́</span>чки — слово мосточек во множественном числе
          </h2>
        </div>
        <div className={styles.infoContainerChild}>
          <h1>морфологические и синтаксические свойства:</h1>
          <h2>
            по слогам: мос-т<span>о́</span>ч-ки
          </h2>
          <h2>
            существительное, неодушевлённое, мужской род, 2-е склонение; формы ед. ч. не
            используются
          </h2>
          <h2>
            корень: <span>-мост-</span>; суффиксы: <span>-оч-к</span>; окончание: <span>-и</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
