import React from "react";
import HeaderTitle from "./components/Header/HeaderTitle";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const acceptExpense = (newExpense) => {
      setExpenses((preExpenses) => {
        return [newExpense, ...preExpenses]
      })
  };

  return (
    <div>
      <HeaderTitle />
      <NewExpense toAddNewExpense={acceptExpense}/>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
