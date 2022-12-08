import styles from './Expense.module.css';

function Expense(props) {
  const {index, chapterIndex} = props
  console.log(index);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.item}>{chapterIndex+1}.{index + 1}</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>Stone</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>1</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>1</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>1</div>
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.item}>10</div>
            <div className={styles.item}>2500</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
