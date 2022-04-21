import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [newYear, setNewYear] = useState("2020");

  const newYearHandle = (enteredNewYear) => {
    setNewYear(enteredNewYear);
  };

  const filtered = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter onSaveNewYear={newYearHandle} newYearSelected={newYear} />
      <ExpensesChart expenses={filtered}/>
      <ExpenseList itemy={filtered}/>
    </Card>
  );
}

export default Expenses;
