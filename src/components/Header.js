import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/" exact activeClassName="is-active">Home</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Create</NavLink></p>
    </header>
);

export default Header;