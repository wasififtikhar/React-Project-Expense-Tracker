import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [newYear, setNewYear] = useState("2022");

  const setSelectedYear = (selectedYear) => {
    setNewYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });

 

  return (
    <Card className="expenses">
      <ExpensesFilter selected={newYear} toSelectYear={setSelectedYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
