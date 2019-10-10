import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
