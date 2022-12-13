import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MdArrowUpward,
  MdArrowDownward,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import AddButton from '../UI/AddButton';
import styles from './Chapter.module.css';
import DeleteButton from '../UI/DeleteButton';
import ExpensesList from './Expenses/ExpensesList';
// import Expense from './Expenses/Expense';

function Chapter(props) {
  const { chapter, addChapters, deleteChapters, index } = props;

  const [expenses, setExpenses] = useState([]);
  const addExpensesHandler = () => {
    const newExpense = {
      id: uuidv4(),
    };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpensesHandler = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // const defaultGroup = expenses.map((i) => ({
  //   g1: 0,
  //   g2: 0,
  // }));
  // console.log(defaultGroup);

  // const [group, setGroup] = useState(defaultGroup);
  // // console.log(group[0]);

  // const onChange = (type, value, index) => {
  //   const newGroup = group.map((g, idx) => {
  //     if (index === idx)
  //       return {
  //         ...g,
  //         [type]: parseInt(value || 0),
  //       };
  //     return g;
  //   });
  //   setGroup(newGroup);
  //   // console.log(newGroup);
  // };
  // console.log(group ? 0 : (group[index].g1 * group[index].g2));
  
  // const total = group.reduce((acc, cur) => {
  //   acc += cur.g1 + cur.g2;
  //   return acc;
  // }, 0);
  // console.log(total);

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
              <div onClick={() => deleteChapters(chapter.id)}>
                <DeleteButton title="Delete Chapter" />
              </div>
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
            <span className={styles.totalColumn}>0</span>
          </summary>
          <ExpensesList
            expenses={expenses}
            addExpenses={addExpensesHandler}
            chapterIndex={index}
            deleteExpenses={deleteExpensesHandler}
            // defaultGroup={defaultGroup}
            // onChange={onChange}
            // group={group}
            // setGroup={setGroup}
          />
        </details>
      </div>
    </>
  );
}

export default Chapter;
