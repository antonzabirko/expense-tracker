const expensesTotal = (expenses) => expenses.reduce((accum, currentValue) => accum + currentValue.amount, 0);

export default expensesTotal;