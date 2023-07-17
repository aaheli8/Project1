import { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const[filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear)=>{
       setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense =>{
       return expense.date.getFullYear().toString() === filteredYear;
    });
    return(
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    {filteredExpenses.length === 0 ?
    (<h2 className='expenses-list__fallback'>No Results Found</h2> 
    ):(
    filteredExpenses.map( (expense) => (
                    <ExpenseItem 
                        key ={expense.id}
                        title={expense.title}
                        amount={expense.amount} 
                        date={expense.date}></ExpenseItem>
                
    )))}
    </Card>
    </div>
    );
}
export default Expenses;