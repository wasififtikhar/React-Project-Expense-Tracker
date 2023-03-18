import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const expenseTitle = (event) => {
    setNewTitle(event.target.value);
  };
  const expenseAmount = (event) => {
    setNewAmount(event.target.value);
  };
  const expenseDate = (event) => {
    setNewDate(event.target.value);
  };


  const formSubmit = (event) => {
      event.preventDefault()

      const expenseData = {
        title: newTitle,
        amount:newAmount,
        data: new Date(newDate)
      };
      props.toExtractNewExpenseData(expenseData)
      setNewTitle('');
      setNewAmount('');
      setNewDate('');
  }
  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title of Expense to Add</label>
          <input type="text" value={newTitle} onChange={expenseTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount of of Adding Expense</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={expenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date of Adding Generated Expense</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={expenseDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
