//  import dependencies

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications'
import cookie from 'react-cookies'
// import style

import './Forms.scss';

// import redux actions

import { login, register, loading } from "../../Redux/auth/auth.actions";

const LoginForm = (props)=> {
    document.title = "Petrol Pump | Login"
    const { addToast } = useToasts();
    const initialState = {
        username: '',
        password: '',
    }
    const [logindata, setLogindata] = useState(initialState)

    const handleChange = (event)=>{
      setLogindata({
        ...logindata,
        [event.target.name]: event.target.value
      })
    }
    const handleSubmit = (event)=>{
      event.preventDefault();
      var pattern = new RegExp(/^[0-9\b]+$/);
      
      if (!pattern.test(logindata.username)) {
        return addToast("Please enter valid phone number!", { appearance: 'error' });
    
      }else if(logindata.username.length < 10){
        return addToast("Phone number must be atleast 10 digit long!", { appearance: 'error' });
      }
      else{
        props.props.loading()
        setTimeout(() => {
          props.props.login(
            logindata.username,
            logindata.password,
          );
        }, 1000);
      }
      
    }
    if (cookie.load("token")) { 
      return <Redirect to='/' />;
    }
    return(
        <>

        <form className="form-group p-4" id="login" onSubmit = { handleSubmit }> 
            <input type="text" className="input-field" placeholder="Phone Number" name="username" onChange = { handleChange } required></input>
            <input type="password" className="input-field" placeholder="Password" name="password" onChange = { handleChange } required></input>
            <button type="submit" className="btn btn-info p-1 mt-3">Submit</button>
        </form>
            
        </>
    )
}

const RegisterForm = (props)=> {
    document.title = "Petrol Pump | Register"
    const { addToast } = useToasts();
    const initialState = {
        username: '',
        password: '',
        password2: ''
    }

    const [registerdata, setRegisterdata] = useState(initialState);

    const handleChange = event => {
        setRegisterdata({
          ...registerdata,
          [event.target.name]: event.target.value
        });
      };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        var pattern = new RegExp(/^[0-9\b]+$/);
      
        if (!pattern.test(registerdata.username)) {
            return addToast("Please enter valid phone number!", { appearance: 'error' });
      
        }else if(registerdata.username.length < 10){
            return addToast("Phone number must be atleast 10 digit long!", { appearance: 'error' });
        }
        else if(registerdata.password.length<8){
            addToast("Password must be 8 character long", { appearance: 'info' })
        }
        else if(registerdata.password!==registerdata.password2){
          addToast("Password Not Matched! Try again", { appearance: 'info' })
        }
        else{
          props.props.loading()
          setTimeout(() => {
          props.props.register(
            registerdata.username,
            registerdata.password,
            registerdata.password2,
          );
        }, 1000);
        }
    }
    if (cookie.load("token")) { 
      return <Redirect to='/' />;
    }
    return(
        <>

        <form className="form-group text-light p-4" id="register" onSubmit = { handleSubmit }> 
            <input type="text" className="input-field " placeholder="Phone Number" required onChange= { handleChange } name="username"></input>
            <input type="password" className="input-field" placeholder="Password" required onChange= { handleChange } name="password"></input>
            <input type="password" className="input-field" placeholder="Confirm Password" required onChange= { handleChange } name="password2"></input>
            <button type="submit" id = "register-submit" className="btn btn-info p-1 mt-3" >Submit</button>
        </form>
            
        </>
    )
}

// const formDict = {
//     "login" : <><LoginForm /><Redirect to="/login" /></>,
//     "register" :<> <RegisterForm /><Redirect to="/register" /></>
// }
export  function Form(props) {
    return (
        <>
        {(props.type==='login')?<><LoginForm props={props} /><Redirect to="/login" /></>:<><RegisterForm  props={props}/><Redirect to="/register" /></>}
        </>
    );
}

 
Form.propTypes = {
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    token: PropTypes.string,
    isLoading: PropTypes.bool,
  };
const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  isLoading: state.authReducer.isLoading,
});
    
export default connect(mapStateToProps, { login, register, loading })(Form);
