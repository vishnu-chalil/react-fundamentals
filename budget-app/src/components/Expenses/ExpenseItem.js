import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className=" expense-item__price">{props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
