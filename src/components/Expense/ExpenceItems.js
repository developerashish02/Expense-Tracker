import './ExpenseItems.css'
import ExpenceDate from "./ExpenseDate";

const ExpenceItem = (props) => {
	return (
		<div className="expense-item">
			{/* Date component */}
			<ExpenceDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">Rs {props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenceItem;
