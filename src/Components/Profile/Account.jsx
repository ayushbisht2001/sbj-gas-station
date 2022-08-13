// import dependencies 

import React, { useState } from 'react';
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'
import { store } from '../../Redux/store';
import { Spinner } from 'react-bootstrap'
// import components

import ProfileMenuBox from './ProfileMenuBox';
import {Card, Button, Form} from 'react-bootstrap'

// import API

import { userProfilePasswordchange } from '../../api/user.api'

export default function  Account() {
    const { addToast } = useToasts();
    const initialState = {
        oldpassword: '',
        newpassword1: '',
        newpassword2: '',
        redirect: false,
        loading: false,

       };
  
   const [data, setData] = useState(initialState);

   
  
   const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const onSumbmitHandler = event => {
      event.preventDefault();
      
      if(data.newpassword1.length<8 || data.newpassword2.length<8){
        addToast("Password must be 8 character long", {apperance: 'error'});
      }
      else if(data.newpassword1!==data.newpassword2){
        addToast("Password not matched", {apperance: 'error'});
      }
      else{
          setData({
              ...data, loading: true
          })
          setTimeout(() => {
        const token = store.getState().authReducer.token;
        axios({
          url: `${userProfilePasswordchange}`,
          method: "PATCH",
          data: {
            current_password: data.oldpassword,
            new_password: data.newpassword1,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
          .then((res) => {
              console.log(res.data)
              if (res.data.status === 400){
                  setData({
                      ...data, loading: false
                  })
                addToast(res.data.msg, {apperance: 'error'});
              }
              else{
                addToast(res.data.msg, {apperance: 'success'});
                  setData({
                      ...data,redirect: true, loading: false
                  })

              }
            
            
          })
          .catch((err) => {
            addToast("Wrong Password! Enter again!", {apperance: 'error'});
          });
      }
      , 2000);
      }
      

    }
    if (data.redirect){
    return <Redirect to={`/profile`} />
    }
    return(
        <>
            <div className="container  pt-5 pb-5  align-items-center">
                <div className="row "> 
                    <ProfileMenuBox />           
                    <div className="col-md-8 col-sm-12 mx-auto my-auto   ">
                        
                            <Card className="mx-auto account-password-card w-100 ">
                                <Card.Header className="h4 bg-primary text-light text-center" >Set new password</Card.Header>
                                    <Card.Body>
                                        <Form
                                            className=' text-info ' style={{fontWeight:"900"}}	
                                            onSubmit = { onSumbmitHandler }			                  
                                        >
                                            <Form.Row className="pt-4">                                        
                                                <Form.Label>Current Password*</Form.Label>
                                                <Form.Control
                                                type='password'
                                                placeholder='Current Password'
                                                name='oldpassword'                                               
                                                required
                                                onChange = { handleInputChange }
                                                />
                                            </Form.Row>
                                            
                                            <Form.Row className="pt-4">                                        
                                                <Form.Label>New Password*</Form.Label>
                                                <Form.Control
                                                type='password'
                                                placeholder='Enter New Password'
                                                name='newpassword1'                                               
                                                required
                                                onChange = { handleInputChange }
                                                />
                                            </Form.Row>
                                            
                                            <Form.Row className="pt-4">                                        
                                                <Form.Label>Confirm Password*</Form.Label>
                                                <Form.Control
                                                type='password'
                                                placeholder='Confirm Password'
                                                name='newpassword2'                        
                                                required
                                                onChange = { handleInputChange }
                                                />
                                            </Form.Row>

                                            <Button variant="primary" className="mt-5" type = 'submit'>

                                            {
                                            data.loading ? 
                                                <>
                                                <span>Loading... </span>
                                                <Spinner animation="border" size="sm" />
                                                
                                                </>
                                                :
                                                "Set New Password" 
                                            }
                                            </Button>
                                        </Form>
                                      
                                    </Card.Body>
                            </Card>
                       

                        {/* <div className="row  pl-3 pr-3 mt-4 ">
                        <Card className="mx-auto account-password-card w-100 ">
                                <Card.Header className="h4 bg-warning text-center" >Account Contacts</Card.Header>
                                    <Card.Body>
                                                                              
                                    </Card.Body>
                            </Card>
                        </div>  */}


                    </div>

                </div>
            </div>
        </>
    )
}
