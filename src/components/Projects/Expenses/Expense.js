import styles from './Expense.module.css';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import DeleteButton from './../../UI/DeleteButton';


function Expense(props) {
  const { index, chapterIndex, deleteExpenses, expense } = props;
  console.log(expense);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.item}>
            {chapterIndex + 1}.{index + 1}
          </div>
        </div>
        <div className={styles.column}>
          <div className={`${styles.item} ${styles.item_input}`}>
            <input
              className={styles.input}
              placeholder="Example: Brick laying of internal walls and partitions"
            />
            <MdArrowUpward className={styles.icon} />
            <MdArrowDownward className={styles.icon} />
            <div onClick={() => deleteExpenses(expense.id)}>
              <DeleteButton title="Delete item" />
            </div>
          </div>
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
