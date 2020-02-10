import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo">ProPlanner</Link>
                {/* <SignedInLinks />
                <SignedOutLinks /> */}
                { links }
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    //console.log(state)
    return{
        auth: state.firebase.auth // getting firbase auth.uid property
    }
}
export default connect(mapStateToProps)(Navbar)
