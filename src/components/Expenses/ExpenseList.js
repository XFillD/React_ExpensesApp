import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if(props.itemy.length === 0){
    return <h2>No items found</h2>
  }
  return <>
  {props.itemy.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />
  ))
  }
  </>
}

export default ExpenseList;