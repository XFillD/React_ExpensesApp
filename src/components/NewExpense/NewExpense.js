import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [show, setShow] = useState(false);

  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.newExpenseData(expenseData);
    setShow(false);
  };

  const showFormHandle = () => {
    setShow(true);
  };
  const hideFormHandle = () => {
    setShow(false);
  };

  return (
    <div className="new-expense">
      {show === false ? (
        <button onClick={showFormHandle}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} forma={hideFormHandle} />
      )}
    </div>
  );
};

export default NewExpense;
