import React, { useState } from 'react';
import { connect }from 'react-redux';
import { signIn } from '../../store/actions/authAction';

const SignIn = () =>
 {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        //console.log(email, password);
        this.props.signIn(email,password)
    }
     return (
        <form className="container" onSubmit={e => handleSubmit(e)}> 
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                          id="email" 
                          type="email" 
                          className="validate"  
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          />
                        <label for="email">Email</label>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                         id="password" 
                         type="password" 
                         className="validate"
                         value={password}
                         onChange = {e =>setPassword(e.target.value)}
                         />
                        <label for="password">Password</label>
                    </div> 
                    <div className="input-field col s12">
                       <button className="btn lighten-1 z-depth-0">Login</button>
                    </div>
                </div>    
                
        </form>
                    
        )
    }
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credential) => dispatch(signIn(credential))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)

