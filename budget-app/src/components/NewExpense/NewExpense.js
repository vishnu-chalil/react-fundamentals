import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "../Expenses/ExpensesList";

const NewExpense = (props) => {
  const [isEditing, toggleEditing] = useState(true);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);


  };

  const controlAddForm = ()=>{

      toggleEditing((prevEditing) =>{

        return !prevEditing;
      })

  }
    return (
      <div className="new-expense">
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} controlForm={controlAddForm}/>}
        {!isEditing && <button className="new-expense__actions" onClick={controlAddForm} >Add Expense</button>
        }
      </div>
    );
  
};

export default NewExpense;
