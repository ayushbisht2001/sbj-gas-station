import React, { Component } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
export class Footer extends Component {
    render() {
        return (
          <footer className="footer container-fluid ">
              <div className="container p-0 ">
                  <div className="row justify-content-center p-4">
                    <div className="col-sm-12 col-md-3 col-lg-3 p-2 text-center justify-content-center">
                     <div><h1>Petrol Pump</h1></div>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      <a href="https://prashantpandey.ml/"><i className="fa fa-twitter"></i></a>
                      <a href="https://prashantpandey.ml/"><i className="fa fa-linkedin"></i></a>
                      <a href="https://prashantpandey.ml/"><i className="fa fa-github"></i></a>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">     
                       <div className="dropdown-header">Links</div>
                       <Link className="dropdown-item" to="/">Home</Link>
                       <Link className="dropdown-item" to='/aboutus'>About</Link>
                       <Link className="dropdown-item" to='/contactus'>Contact Us</Link>
                       
                    </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-2">
                  <iframe title = 'map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7282.8662431346265!2d87.445216!3d24.121423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9349fdbe2d3da01a!2sHP%20PETROL%20PUMP%20-%20SHREE%20BALAJEE%20FILLING%20STATION!5e0!3m2!1sen!2sin!4v1620478903324!5m2!1sen!2sin" width="100%" height="400px" allowfullscreen="" loading="lazy"></iframe>
                  <div>
                  </div>
                </div>

                  
                </div>
                  <div className="dropdown-divider"></div>
                  <div className="row align-items-center justify-content-center p-1">
                    <h6>&copy;Copyright ©2020 All rights reserved</h6>
                  </div>
              </div>  
          </footer>
        )
    }
}

export default Footer
