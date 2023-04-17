import React, { Component } from "react";
import "./expense.css";

function ExpenseItem(props) {
  const month=props.date.toLocaleString("en-UK",{month:"long"}) ;
  const day=props.date.toLocaleString("en-UK",{day:"2-digit"});
  const year=props.date.getFullYear();
  

  return (
    <div className="expense-item">
      <div>{month}</div>
      <p>{day}</p>{"\n"}
      <div>{year}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
