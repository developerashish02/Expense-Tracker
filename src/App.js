import ExpenceItem from "./components/Expense/ExpenceItems";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expense = [
		{
			id: "e1",
			title: "Car Inseranse",
			amount: "10,000",
			date: new Date(2020, 7, 14),
		},
		{
			id: "e1",
			title: "Bike Inseranse",
			amount: "5,000",
			date: new Date(2021, 7, 14),
		},
		{
			id: "e1",
			title: "Helth Inseranse",
			amount: "12,000",
			date: new Date(2022, 7, 14),
		},
		{
			id: "e1",
			title: "Family Inseranse",
			amount: "20,000",
			date: new Date(2022, 7, 14),
		},
	];
	return (
		<div className="App">
			<NewExpense />
			<ExpenceItem
				title={expense[0].title}
				amount={expense[0].amount}
				date={expense[0].date}
			/>
			<ExpenceItem
				title={expense[1].title}
				amount={expense[1].amount}
				date={expense[1].date}
			/>
			<ExpenceItem
				title={expense[2].title}
				amount={expense[2].amount}
				date={expense[2].date}
			/>
			<ExpenceItem
				title={expense[3].title}
				amount={expense[3].amount}
				date={expense[3].date}
			/>
		</div>
	);
}

export default App;
