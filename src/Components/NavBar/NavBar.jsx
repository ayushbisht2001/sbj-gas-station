// import dependencies 

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import cookie from 'react-cookies'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { store } from "../../Redux/store";
import { HashLink } from 'react-router-hash-link';
// import styles

import './NavBar.scss'

//  import components

import { logout, loading } from "../../Redux/auth/auth.actions";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
// import Topstrip from './Topstrip'
import Pricebar from './Pricebar'


const  NavHover = ()=>{
    return(
        <div className="animation" id = "nav-hover"></div>
    )
}


export function NavBar(props) {
    const [lft, setLeft] = useState("141.4px");
    const [width, setWidth] = useState("55px")
    const [expanded, setExpanded] = useState(false);
     const AnimateHover= (pos) => {
       setLeft(lft => pos[0])
       setWidth(width => pos[1])
       localStorage.setItem("left", pos[0])
       localStorage.setItem("width", pos[1])
 
        
    }
 
  

    React.useEffect(() => {
        const leftPos = String(localStorage.getItem("left") || "141px")
        const widthTrack = String(localStorage.getItem("width" || "55px"))
        setLeft(leftPos)
        setWidth(widthTrack)
      }, [])


    const ele = document.getElementById("nav-hover");
    if (ele)
    {
    ele.style.left = lft;
    ele.style.width = width;
    } 

    const toggleService = (val) =>{
        localStorage.setItem("service", val)   
    }
    

    return (
        <>
        {/* Pricebar for petrol price */}
        {/* <Pricebar /> */}

        {/* Main Navbar containing menu baar and login and logout */}
        <Navbar expanded={expanded}   expand="lg" sticky="top" className="navbar-parent">
        <Navbar.Brand href="/" className="text-light ">
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}  />
        <Navbar.Collapse id="basic-navbar-nav "  >
            <Nav className="mr-auto nav-left-section">
                <Link onClick= { ()=> {AnimateHover(["calc(130px + var(--pad-nav))", "55px"]); setExpanded(false);}} to="/"   className= "nav-link waves-effect waves-light nav-link-item  ">Home</Link>
                
                <NavDropdown title="About Us" id="basic-nav-dropdown" onClick= { ()=> AnimateHover(["calc(193px + 2 * var(--pad-nav))", "90px"])}   className=" nav-link-item     waves-effect waves-light " >
                    
                    <HashLink to ="/aboutus/#about-desp"  onClick = {() => setExpanded(false)}  className="dropdown-item">About SBFL</HashLink> 
                    <HashLink to ="/aboutus/#aboutproprietor"  onClick = {() => setExpanded(false)}  className="dropdown-item">About Proprietor</HashLink> 
                </NavDropdown>

                <NavDropdown title="Services" id="basic-nav-dropdown" onClick= { ()=> AnimateHover(["calc(290px + 3 * var(--pad-nav))", "85px"])} className= " nav-link-item ">
                    <HashLink to ="/services/#petrol"  onClick = {() => setExpanded(false)}  className="dropdown-item">Petrol</HashLink> 
                    <HashLink to ="/services/#diesel"  onClick = {() => setExpanded(false)}  className="dropdown-item">Diesel</HashLink> 
                     <HashLink to ="/services/#lubes"  onClick = {() => setExpanded(false)}  className="dropdown-item">Lubes</HashLink> 
                </NavDropdown>

                <Link   onClick= { ()=> {AnimateHover(["calc(383px + 4 * var(--pad-nav)) ", "65px"]); setExpanded(false);}}  to ="/gallery"  className=  "nav-link nav-link-item    text-light ">Gallery</Link>
                
                <NavDropdown title="Our Benefits" id="basic-nav-dropdown" onClick= { ()=> AnimateHover(["calc(455px + 5 * var(--pad-nav))", "115px"])}  className=" nav-link-item ">
                    <HashLink to ="/#services" onClick = { () => {toggleService(2); setExpanded(false); }} className="dropdown-item">For Business</HashLink> 
                    <HashLink to ="/#services" onClick = { () => {toggleService(1); setExpanded(false);}} className="dropdown-item">For Retail Customers</HashLink> 
                </NavDropdown>

                <HashLink to='/#FAQ' onClick= { ()=> {AnimateHover(["calc(570px + 6 * var(--pad-nav))", "55px"]); setExpanded(false); } }   className= "nav-link nav-link-item  text-light" >FAQ</HashLink>
                <Link to="/contactus"  onClick= { ()=> {AnimateHover(["calc(625px + 7 * var(--pad-nav))", "90px"]); setExpanded(false);}} className =  "nav-link nav-link-item  text-light">Contact Us</Link>
                <Link to="/testimonials"  onClick= { ()=> {AnimateHover(["calc(725px + 8 * var(--pad-nav))", "100px"]); setExpanded(false);}} className =  "nav-link nav-link-item  text-light">Testimonials</Link>
                {/* <HashLink to ="/#contactform" onClick= { ()=> toggle(7)} className =  "nav-link nav-link-item    text-light">Contact Us</HashLink> */}
                <NavHover />               
            </Nav>
            <Nav className="mr-auto " >

            {cookie.load("token")?
                <>
                
                <Link to ="/profile" onClick = {() => setExpanded(false)} className= "nav-linktext-light  waves-effect waves-light p-0  pl-3  profile-logo">
                    <i className="fas fa-user-circle fa-2x m-0 p-1"></i>
                </Link>
                <span className = "nav-link text-light  waves-effect waves-light right-nav">{cookie.load("username")}</span>
                <Link to ="/"  onClick={()=>{
                    store.dispatch(loading());
                    setTimeout(() => {
                      store.dispatch(logout());
                    }, 1000);  setExpanded(false);          
                    }} className= "nav-link text-light  waves-effect waves-light right-nav">Logout</Link>
                </>
                :

                <>
                <Link to ="/login"   onClick = {() => setExpanded(false)}  className= "nav-link text-light  waves-effect waves-light right-nav">Login</Link>
                <Link to ="/register"  onClick = {() => setExpanded(false)}  className=  "nav-link text-light right-nav ">Signup</Link>
            
                </>

            }

            
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}


 

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { logout, loading })(NavBar);
