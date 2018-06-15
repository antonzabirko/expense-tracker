import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().utc().startOf('month'),
        endDate: moment().utc().endOf('month')
    })
});

test('should set sortBy to "amount"', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to "date"', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter to "Jest test text"', () => {
    const text = 'Jest test text';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('Jest test text');
});

test('should set start date to January 1, 1970', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
});

test('should set end date to January 1, 1970', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
});