import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const getSelectedYear = (event) => {
        props.toSelectYear(event.target.value)
    } 

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Select to Yearly Track</label>
                <select value={props.selected} onChange={getSelectedYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter