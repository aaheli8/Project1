import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const [isEditing,setIsEditing] = useState(false)
    const startEditigHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (

    <div className="new-expense">
       {!isEditing && <button onClick={startEditigHandler}> Add New Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
    )
}

export default NewExpenses;