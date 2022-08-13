import React, { useState } from 'react';
import Animation1 from '../PetrolAnimations/animation1';
import Forms from './Forms.jsx'
// import { Redirect, Link } from 'react-router-dom'
// import login from  '../../Components/Registration/login';
import './entry.scss'
import './Forms.scss'
 


const Entry = props => {
    const [form, setForm] = useState(props.type)

    return(
        <>
            <div className="login-container position-relative  ">            
                    <div className="row h-100 "  >
                        <div className="col-12 col-md-6 my-auto  " >
                            <div className="login-form-container mt-5 mb-5">
                                <div className="form-box p-4">
                                    <div className="button-box ">
                                        <div  id="toggle" style = {{left : form === "login"? "0%" : "50%"}}  ></div>
                                        <button onClick= {() => setForm("login")}    className="toggle-btn text-light" id="login-btn" >Login</button>
                                        <button  onClick= {() => setForm("register")}    className="toggle-btn text-light" id="register-btn">Register</button>
                                    </div>
                                    <div className="social-icon-box">
                                    {/* <i className="fa fa-twitter" aria-hidden="true"></i>
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    <i className="fa fa-github" aria-hidden="true"></i> */}
                                    </div>
                                   <Forms type={form}/>                           

                                </div>
                            </div>                      
                        </div>
                        <div className="  col-md-6 login-animation-container">    
                        <div>       
                            <svg  className="wave"  viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg"  >
                           
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="#9cc3df55" fillRule="evenodd">
                                    <path  d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path"  ></path>
                                </g>
                            </svg>
                         </div >                   
                            <Animation1 />
                        </div>                
                    </div>
                {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill= "#1a1919" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,224C480,203,600,117,720,101.3C840,85,960,139,1080,165.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
            </div>

        </>

    );
}

export default  Entry;