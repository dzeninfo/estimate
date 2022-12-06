import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MdDeleteForever,
  MdArrowUpward,
  MdArrowDownward,
  MdVisibility,
  MdArrowDropDownCircle,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import AddButton from '../UI/AddButton';
import ExpensesList from './ExpensesList';
import styles from './Chapter.module.css';

function Chapter(props) {
  const { chapter, addChapters, deleteChapters, index } = props;
  const [expenses, setExpenses] = useState([]);

  const addExpensesHandler = () => {
    const newExpense = {
      id: uuidv4(),
    };
    setExpenses([...expenses, newExpense]);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.column}>
            <div className={styles.item}>{index + 1}</div>
          </div>
          <div className={styles.column}>
            <div className={styles.block}>
              <div className={styles.title}>
              Chapter:
              </div>
              <input
                className={styles.input}
                type="text"
                placeholder="New chapter"
              />
            </div>
            <div className={styles.row}>
              <AddButton
                title="Add new Chapter"
                text="Chapter"
                onClick={addChapters}
              />
              <AddButton
                title="Add new Expense"
                text="Item"
                onClick={addExpensesHandler}
              />
              <MdArrowUpward className={styles.icon} />
              <MdArrowDownward className={styles.icon} />
              <MdDeleteForever
                className={styles.icon}
                onClick={() => deleteChapters(chapter.id)}
              />
            </div>
          </div>
        </div>
        <details open className={styles.container}>
          <summary className={styles.summary}>
            <MdKeyboardArrowDown className={`${styles.icon} ${styles.totalColumn}`}/>
            <h4 className={styles.totalColumn}>Total for the Section "Earthworks":</h4>
            <div className={styles.totalColumn}>30000</div>
          </summary>

        <ExpensesList expenses={expenses}/>
        </details>
      </div>
    </>
  );
}

export default Chapter;
