// import dependencies

import React, { useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import cookie from 'react-cookies'
import {Redirect} from 'react-router-dom'
// import components

import { postProfileInfo } from '../../Redux/profileinfo/profile.actions'
import ProfileMenuBox from './ProfileMenuBox';
import { Button, Form, Col, Spinner } from 'react-bootstrap';


export function ProfileSettings(props) {
	const initialState = {
		first_name: props.first_name,
		last_name: props.last_name,
		bio: props.bio, 
		gender:
					props.gender === "O"
					? "Other"
					: props.gender === "M"
					? "Male"
					: props.gender === "F"
					? "Female"
					: "Select",
		occupation: props.occupation,
		contact_number: props.contact_number,
		redirect: false,
		loading: false,
		email: props.email,
		address: props.address
	};
	
	const [data, setData] = useState(initialState);    
	const handleInputChange = event => {
		setData({
		  ...data,
		  [event.target.name]: event.target.value
		});
	}
	const onSumbmitHandler = event => {
		event.preventDefault();
		setData({
			...data, loading: true
		})
		setTimeout(() => {
			props.postProfileInfo(data.first_name, data.last_name, data.bio, data.gender, data.occupation, data.email, data.contact_number, data.address);
			setData({
			...data, redirect: true
			})
		setData({
			...data, loading: false
		})
		}
		, 2000);
	}
	if (data.redirect){
		return <Redirect to={`/profile`} />
	}
	return ( 
		<>
			<div className="container pt-5 pb-5 align-items-center ">
			<div className="row"> 
				<ProfileMenuBox />           
				<div className="col-md-8 col-sm-12 mx-auto my-auto ">
				<div className="card  profile-setting-card w-100 ">
					<div className="card-header  h4 bg-primary text-light text-center">Profile Settings</div>
					<div className="card-body">       
								<Form
									className='text-info' style={{fontWeight:"900"}}
									onSubmit = { onSumbmitHandler }
								>
									{/* <h5 className='text-center text-info'><strong>@{cookie.load('username')}</strong></h5> */}

									<Form.Row>
									<Col xl={6} lg={6} md={6} sm={12}>
										<Form.Group>
										<Form.Label >First Name*</Form.Label>
										<Form.Control
											type='text'
											placeholder='Your first name'
											name='first_name'                        
											required
											onChange = {handleInputChange}
											value = {data.first_name}
										/>
										</Form.Group>
									</Col>
									<Col xl={6} lg={6} md={6} sm={12}>
										<Form.Group>
										<Form.Label>Last Name*</Form.Label>
										<Form.Control
											type='text'
											placeholder='Your last name'
											name='last_name'				                         
											required
											onChange = {handleInputChange}
											value =  {data.last_name}
										/>
										</Form.Group>
									</Col>
									</Form.Row>
									<Form.Group controlId='bio'>
									<Form.Label>Bio*</Form.Label>
									<Form.Control
										as='textarea'
										rows='3'
										placeholder='Your profile bio'
										name='bio'			                   
										required
										onChange = {handleInputChange}
										value =  {data.bio}
									/>
									</Form.Group>
									<Form.Row>
									<Col xl={12} lg={12} md={12} sm={12}>
										<Form.Group controlId='email'>
										<Form.Label>Email*</Form.Label>
										<Form.Control
											type='email'
											placeholder='Email'                             
											name='email'
											required
											onChange = {handleInputChange}
											value =  {data.email}
										/>
										</Form.Group>
									</Col>
									</Form.Row>
									<Form.Row>
									<Col xl={12} lg={12} md={12} sm={12}>
										<Form.Group controlId='contact_number'>
										<Form.Label>Contact Number*</Form.Label>
										<Form.Control
											type='number'				                        
											placeholder='Contact Number'                             
											name='contact_number'
											required
											onChange = {handleInputChange}
											value =  {data.contact_number}
										/>
										</Form.Group>
									</Col>
									</Form.Row>
									<Form.Row>
									<Col xl={6} lg={6} md={6} sm={12}>
										<Form.Group controlId='gender'>
										<Form.Label>Gender*</Form.Label>
										<Form.Control
											as='select'
											name='gender'
											required
											onChange = {handleInputChange}
											value =  {data.gender}
										>
											<option>Select</option>
											<option>Female</option>
											<option>Male</option>
											<option>Other</option>
										</Form.Control>
										
										</Form.Group>
									</Col>
									<Col xl={6} lg={6} md={6} sm={12}>
										<Form.Group controlId='occupation'>
										<Form.Label>Occupation*</Form.Label>
										<Form.Control
											type='text'
											placeholder='Enter your Occupation'
											name='occupation'
											required
											onChange = {handleInputChange}
											value =  {data.occupation}
										/>
										</Form.Group>
									</Col>
									</Form.Row>	
									<Form.Group controlId="exampleForm.ControlTextarea1" >
										<Form.Label>Address*</Form.Label>
										<Form.Control 
											as="textarea"  
											rows="6" 
											name="address" 
											placeholder="Address" 
											onChange= {handleInputChange}
											required
											value = {data.address}
											/>
									</Form.Group>			               
									<Button type='submit' variant='primary' className="ml-1 mt-2">
									{
									data.loading ? 
										<>
										<span>Loading... </span>
										<Spinner animation="border" size="sm" />
										
										</>
										:
										"Save Changes" 
									}
									</Button>
								</Form>
								</div>
								</div>
				</div>   
			</div>
						
			</div>
		</>
	);
}

ProfileSettings.propTypes = {
	postProfileInfo: PropTypes.func,
	};
const mapStateToProps = (state) => ({
	first_name: state.profileReducer.first_name,
	last_name: state.profileReducer.last_name,
	name: state.profileReducer.name,
	bio: state.profileReducer.bio,
	gender: state.profileReducer.gender,
	occupation: state.profileReducer.occupation,
	email: state.profileReducer.email, 
	contact_number: state.profileReducer.contact_number,
	address: state.profileReducer.address
});
	
export default connect(mapStateToProps, { postProfileInfo })(ProfileSettings);
		
