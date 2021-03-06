import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';

class SignIn extends Component {
    state ={
        email: '',
        password:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError } = this.props; 
        return (
            <form className="container" onSubmit={e => this.handleSubmit(e)}> 
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                          id="email" 
                          type="email" 
                          className="validate"  
                          value={this.email}
                          onChange={this.handleChange}
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
                         value={this.password}
                         onChange = {this.handleChange}
                         />
                        <label for="password">Password</label>
                    </div> 
                    <div className="input-field col s12">
                       <button className="btn lighten-1 z-depth-0">Login</button>
                       <div className="red-text center">
                           {authError ? <p>{authError}</p> :null }
                       </div>
                    </div>
                </div>    
                
        </form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credential) => dispatch(signIn(credential))
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
