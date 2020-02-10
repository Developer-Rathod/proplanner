import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/createproject'>NewProject</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to='/' className='btn btn-floating lighten-1'>DR</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut()) // dispatching sinout creater
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
