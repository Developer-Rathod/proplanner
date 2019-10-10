import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <Link to='/'>ProPlanner</Link>
            <SignedInLinks />
            <SignedOutLinks />
        </nav>
    )
}

export default Navbar
