import Expense from './Expense';

function ExpensesList(props) {
  const { expenses } = props;
  return (
    <>
      <Expense />
      {expenses.map((expense) => (
        <Expense key={expense.id}/>
      ))}
    </>
  );
}

export default ExpensesList;
