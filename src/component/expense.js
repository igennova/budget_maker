import React, { Component } from "react";
import "./expense.css";

function ExpenseItem(props) {
  const exdate=new Date(2023,3,10);
  const extitle="lucky";
  const amount=1000;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
