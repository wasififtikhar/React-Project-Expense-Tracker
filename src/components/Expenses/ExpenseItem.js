import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title)
   console.log("ExpenseItem evaluted by React");

    const changeExpenseTitle = () => {
      setTitle("Updated!")
      console.log(title);
    }

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'><pre>Expense =  ${props.amount}</pre></div>
      </div>
      <button onClick={changeExpenseTitle}>Update Title</button>
    </Card>
  )
}

export default ExpenseItem;