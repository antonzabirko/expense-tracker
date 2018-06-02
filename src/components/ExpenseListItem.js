import React from 'react';

const ExpenseListItem =  ({ description, amount, createdAt }) => (
    <div>
        <p>Description: {description} | Amount: {amount} | createdAt: {createdAt}</p>
    </div>
);

export default ExpenseListItem;