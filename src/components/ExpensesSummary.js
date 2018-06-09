import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total"

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount !== 1 ? 'expenses ' : 'expense';
    const expenseFormat = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {expenseFormat}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);