import Expense from './Expense';
import AddButton from './../UI/AddButton';

function ExpensesList(props) {
  const { expenses, addExpenses, chapterIndex } = props;
  return (
    <>
      {/* {expenses.length === 0 && (
        <AddButton
          onClick={addExpenses}
          textOnButton="Click to add new item"
          title="Add new item"
        />
      )} */}
      {expenses.map((expense, index) => (
        <Expense key={expense.id} index={index} chapterIndex={chapterIndex}/>
      ))}
      <AddButton
        onClick={addExpenses}
        textOnButton="Click to add new item"
        title="Add new item"
      />
    </>
  );
}

export default ExpensesList;
