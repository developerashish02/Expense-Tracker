import "./ExpenseItems.css";
import ExpenceDate from "./ExpenseDate";
import { useState } from "react";

const ExpenceItem = (props) => {
	// states
	const [title, seTitle] = useState(props.title);
	const handleClick = () => {
		seTitle("Updated");
	};

	return (
		<div className="expense-item">
			{/* Date component */}
			<ExpenceDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">Rs {props.amount}</div>
			</div>
			<button onClick={handleClick}>Chnage Title</button>
		</div>
	);
};

export default ExpenceItem;
