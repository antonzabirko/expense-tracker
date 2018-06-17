import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmationModal from './ConfirmationModal';

export class EditExpensePage extends React.Component {
    state = {
        modalState: undefined
    };
  onSubmit = (expense) => {
      this.props.startEditExpense(this.props.expense.id, expense);
      this.props.history.push('/');
  };
  onClick = () => {
      this.setState(() => ({ modalState: true }));
  };
  onModalConfirm = () => {
      this.setState(() => ({ modalState: undefined }));
      this.props.startRemoveExpense({ id: this.props.expense.id });
      this.props.history.push('/');
  };
  onModalCancel = () => {
      this.setState(() => ({ modalState: undefined }));
  };
  render() {
    return (
      <div>
          <div className="page-header">
              <div className="content-container">
                  <h1 className="page-header__title">Edit Expense</h1>
              </div>
          </div>
          <div className="content-container">
              <ExpenseForm
                  expense={this.props.expense}
                  onSubmit={this.onSubmit}
              />
              <div>
                  <button className="button button-secondary" onClick={this.onClick}>Remove</button>
              </div>
          </div>
          <ConfirmationModal
              modalState={this.state.modalState}
              onModalConfirm={this.onModalConfirm}
              onModalCancel={this.onModalCancel}
          />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense({ id: expense.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
