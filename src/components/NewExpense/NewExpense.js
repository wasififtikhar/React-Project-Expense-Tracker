import AddExpenseForm from './AddExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const gettingNewExpenseData = (newExpenseData) => {
        const newExpense = {
            ...newExpenseData,
            id: Math.random().toString()
        }
      props.toAddNewExpense(newExpense);
    };

    return (
        <div className='new-expense'>
            <AddExpenseForm toExtractNewExpenseData={gettingNewExpenseData}/>
        </div>
    );
};

export default NewExpense;