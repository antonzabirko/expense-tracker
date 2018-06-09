import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={1002300}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render a single expense', () => {
    const wrapper = shallow(<ExpensesSummary Count={1} expensesTotal={40000}/>);
    expect(wrapper).toMatchSnapshot();
});