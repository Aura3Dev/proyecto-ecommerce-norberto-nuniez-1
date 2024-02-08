import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
        <Link to="/">Brand</Link>
        <Link to="/item/1">Item</Link> {}
        <Link to="/category/1">Category</Link> {}
    </nav>
    );
};

export default NavBar;

