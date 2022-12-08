import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MdDeleteForever,
  MdArrowUpward,
  MdArrowDownward,
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

  const [chapterName, setChapterName] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setChapterName(chapterName);
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
              <div className={styles.title}>Chapter:</div>
              <form className={styles.form} onSubmit={onSubmitHandler}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter chapter name"
                  value={chapterName}
                  onChange={(e) => setChapterName(e.target.value)}
                />
              </form>
            </div>
            <div className={styles.row}>
              <AddButton
                title="Add new Chapter"
                textOnButton="Chapter"
                onClick={addChapters}
              />
              <AddButton
                title="Add new Expense"
                textOnButton="Item"
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
            <MdKeyboardArrowDown
              className={`${styles.icon} ${styles.totalColumn}`}
            />
            <h4 className={styles.totalColumn}>
              Total for the Section "
              {chapterName === '' ? 'New chapter' : chapterName}":
            </h4>
            <span className={styles.totalColumn}>30000</span>
          </summary>
          <ExpensesList expenses={expenses} addExpenses={addExpensesHandler} chapterIndex={index}/>
        </details>
      </div>
    </>
  );
}

export default Chapter;
