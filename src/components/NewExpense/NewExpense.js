import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const gettingNewExpenseData = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.toAddNewExpense(newExpense);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <AddExpenseForm
          toExtractNewExpenseData={gettingNewExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
