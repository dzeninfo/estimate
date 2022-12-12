import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { useState } from 'react';
import DeleteButton from './../../UI/DeleteButton';
import styles from './Expense.module.css';

function Expense(props) {
  const { index, chapterIndex, deleteExpenses, expense } = props;

  const [quntity, setQuantity] = useState(0);
  const [costPerUnit, setCostPerUnit] = useState(0);
  const [total, setTotal] = useState(0);
  // const total = group.reduce((acc, cur) => {
  //   acc += cur.g1 + cur.g2 + cur.g3;
  //   return acc;
  // }, 0);
  const calculate = () => {
    setTotal(quntity*costPerUnit);
  }

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
          <div className={styles.item}>AliExpress</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>
            <input
              className={styles.quantityInput}
              type="number"
              value={quntity}
              onChange={(e) => setQuantity(+e.target.value)}
              placeholder="0"
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>
            <input className={styles.unitInput} placeholder="m2" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.item}>
              <input
                className={styles.perUnitInput}
                type="number"
                value={costPerUnit}
                onChange={(e) => setCostPerUnit(+e.target.value)}
                placeholder="0"
              />
            </div>
            <div className={styles.item}>{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
