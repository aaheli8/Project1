import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'
function Expenses(props){
    return(
    <Card className="expenses">
     <ExpenseItem date={props.items[0].date} title={props.items[0].title}  a={props.items[0].amount}/>
     <ExpenseItem date={props.items[1].date} title={props.items[1].title}  a={props.items[1].amount}/>
     <ExpenseItem date={props.items[2].date} title={props.items[2].title}  a={props.items[2].amount}/>
     <ExpenseItem date={props.items[3].date} title={props.items[3].title}  a={props.items[3].amount}/>
    </Card>
    );
}
export default Expenses;