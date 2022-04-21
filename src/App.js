import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [newExpense, setNewExpense] = useState([]);
  

const addExpenseDataHandle = (expense) => {
  setNewExpense(prevExpense => {
    return [expense, ...prevExpense]
  });
};

  return (
    <div>
      <NewExpense newExpenseData={addExpenseDataHandle}/>
     <Expenses items={newExpense}/>
    </div>
  );
}

export default App;
