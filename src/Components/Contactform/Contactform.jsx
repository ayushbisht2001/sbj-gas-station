// Dependencies import 
import React ,{ Component }from 'react'
import axios from 'axios'

//  Component import 
import './Contactform.scss'
import Heading from '../Heading/Heading'
import {Button, Form, Col, Spinner } from 'react-bootstrap'
import { useToasts } from 'react-toast-notifications'

// API import 
import {userContactus} from '../../api/user.api'
// import GoogleMap from '../Map/Map.jsx';

function ContactForm(Component) {
  return function WrappedComponent(props) {
    const toastFuncs = useToasts()
    return <Component {...props} {...toastFuncs} />;
  }
}
class withToast extends Component {
  state = {
    name: '', 
    email: '', 
    message: '',
    loading: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true});

    axios.post(userContactus , { 
        name: this.state.name,
        email: this.state.email, 
        message: this.state.message, 
      })
      .then(res=>{
        if (res.data.status===201){
          this.setState({ loading: false});
          document.getElementById("form").reset()
          this.props.addToast(res.data.msg, { appearance: 'success' });
        }
        else if (res.data.status===400){
          this.setState({ loading: false});
          this.props.addToast(res.data.msg, { appearance: 'error' });
        }
      })
      .catch(error => {
        this.setState({ loading: false});
        this.props.addToast('The server is not excepting any request at this moment!! Try again later', { appearance: 'error' });
      });
      
  }
  handleChange = event =>{
    this.setState({ [event.target.name]: event.target.value,         
    });
  }
  
  render() {
      
      return (
        
        <div className="container-fluid p-3" id = 'contactform'>
          <Heading heading='Request For Service'/>
          <div className="row ">
              <div className = { this.props.hasMap === 1? "col-sm-12  col-lg-6    mt-4 contact-info" : "col-sm-12  col-lg-12 mt-4 contact-info"} >
                  <Form 
                        name="contact_form" 
                        className='' 
                        onSubmit = { this.handleSubmit }
                        id='form'
                      >
                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control 
                              type="text" 
                              name="name" 
                              placeholder="Name" 
                              onChange= {this.handleChange} 
                              required
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control 
                              type="email" 
                              name="email" 
                              placeholder="E-mail" 
                              onChange= {this.handleChange} 
                              required
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="exampleForm.ControlTextarea1"  className="p-0">
                          <Form.Control 
                            as="textarea"  
                            rows="6" 
                            name="message" 
                            placeholder="Write Your Message..." 
                            onChange= {this.handleChange} 
                           
                            required
                            />
                        </Form.Group>

                        <Button type='submit' variant='primary' className="mt-2 float-left">
                              {this.state.loading ? 
                                <>
                                <span>Loading... </span>
                                <Spinner animation="border" size="sm" />
                                </>
                                :
                                "Send Message" 
                              }
                        </Button>
                      </Form>
              </div>
              {this.props.hasMap === 1 ? 
              <> 
              <div className="col-md-6 col-lg-6 position-relative mt-4">          
                <iframe  title='map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.4057476237745!2d87.44302731430453!3d24.121427880419404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7534b5c27d66d%3A0x9349fdbe2d3da01a!2sHP%20PETROL%20PUMP%20-%20SHREE%20BALAJEE%20FILLING%20STATION!5e1!3m2!1sen!2sin!4v1620199675694!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>
              
              </div>
              </>
              : ""}
         
          </div>
        
    </div>
      );
    }
  }

  export default ContactForm(withToast);


  

  