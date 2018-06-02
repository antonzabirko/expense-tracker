import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p>This is from my EditExpensePage in-line component. id: {props.match.params.id}</p>
        </div>
)};

export default EditExpensePage;