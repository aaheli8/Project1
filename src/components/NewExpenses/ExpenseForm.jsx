import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle,setenteredTitle]=useState('');//Can have multiple states
    const [enteredAmount,setenteredAmount]=useState('');
    const [enteredDate, setenteredDate]= useState('');
   /* const[userInput,setUserInput] = useState({ // States all together in one state
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''

    });*/
    const titleChangeHandler = (event) =>{
        setenteredTitle(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
            
        })*/
    };
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    };
    const submitHandler = (event) => {
       event.preventDefault();

       const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
       };
       props.onSaveExpenseData(expenseData);
       setenteredTitle('');
       setenteredAmount('');
       setenteredDate('');

    };
    //Two way binding using value
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" step="2023-03-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;