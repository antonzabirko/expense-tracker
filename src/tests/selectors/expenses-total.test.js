import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const result = expensesTotal([]);
    expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const result = expensesTotal([ expenses[1] ]);
    expect(result).toEqual(expenses[1].amount);
});

test('should correctly add up multiple expenses', () => {
    const result = expensesTotal(expenses);
    expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});