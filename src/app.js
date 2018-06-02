import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
//
import 'normalize.css/normalize.css';
//** Custom Imports:
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses( state.expenses, state.filters ));
});
store.dispatch(addExpense({ description: 'Water Bill', amount: 7500, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Rent Bill', amount: 3500, createdAt: 5000 }));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));