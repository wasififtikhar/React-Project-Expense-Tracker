import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            Generated Expense{" "}
            <span className="headding-title">{props.title}</span>
          </h2>
          <div className="expense-item__price">
            <pre>
              Amount = <span className="headding-amount">${props.amount}</span>
            </pre>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
