import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { useState } from 'react';
import DeleteButton from './../../UI/DeleteButton';
import styles from './Expense.module.css';

function Expense(props) {
  const {
    index,
    chapterIndex,
    deleteExpenses,
    expense,
    expenses,
    // defaultGroup,
    // group,
    // onChange
  } = props;
  // console.log(expenses);

  const defaultGroup = expenses.map((i) => ({
    g1: 0,
    g2: 0,
  }));
  console.log(defaultGroup);
  const [group, setGroup] = useState(defaultGroup);
  console.log(group);

  const onChange = (type, value, index) => {
    const newGroup = group.map((g, idx) => {
      if (index === idx)
        return {
          ...g,
          [type]: parseInt(value || 0),
        };
      return g;
    });
    setGroup(newGroup);
    // console.log(newGroup);
  };

  // const total = group[index].g1 * group[index].g2;

  // const total = group.reduce((acc, cur) => {
  //   acc += cur.g1 + cur.g2;
  //   return acc;
  // }, 0);
  // console.log(total);

  // const [quntity, setQuantity] = useState(0);
  // const [costPerUnit, setCostPerUnit] = useState(0);
  // const [total, setTotal] = useState(0);
  // const total = group.reduce((acc, cur) => {
  //   acc += cur.g1 + cur.g2 + cur.g3;
  //   return acc;
  // }, 0);
  // const calculate = () => {
  //   setTotal(quntity*costPerUnit);
  // }

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
              name={`g1-${index + 1}`}
              defaultValue={group[index].g1}
              onChange={(e) => onChange('g1', e.target.value, index)}
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
                name={`g2-${index + 1}`}
                defaultValue={group[index].g2}
                onChange={(e) => onChange('g2', e.target.value, index)}
                placeholder="0"
              />
            </div>
            <div className={styles.item}>
              {group[index].g1 * group[index].g2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
