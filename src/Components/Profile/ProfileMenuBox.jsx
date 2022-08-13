import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


export default function  ProfileMenuBox() {
 
    function disabled_collapse(){
        var s_width = window.innerWidth ;         
        if(s_width > 750)
            return true
        else
            return false
        
    }

     
    const [open, setOpen] = useState(disabled_collapse());
    
   
    return (  
       <>
         <div className="col-md-4 col-sm-12 ">
            <div className="card profile-menu-card " >
                <div className="text-center  text-light  bg-primary m-0 p-0 card-header h-4" id="headingOne">Menu Box
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="  collapse-menu-btn text-center   m-0 p-0 card-header h-4"
                    // disabled ={disabled_collapse()?"true":""}
                    >                   
                </Button>              
                </div> 
                <Collapse in={open}>             
        
                    <div className=" card-body p-0 m-0 " id="example-collapse-text">             
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/profile" >Profile</Link></li>
                            {/* <li className="list-group-item"><Link to="">Emails</Link></li> */}
                            {/* <li className="list-group-item"><Link to="">Message</Link></li> */}
                            <li className="list-group-item"><Link to="/profile/profile-settings/">Profile Settings</Link></li>
                            <li className="list-group-item"><Link to="/profile/account-settings/">Account</Link></li>
                            {/* <li className="list-group-item"><Link to="">Statistics</Link></li> */}
                            {/* <li className="list-group-item"><Link to="">Billing</Link></li> */}
                        </ul> 
                    </div>
                </Collapse>
            </div>
            </div>
         </>    
         
        );
    
}
 
 