import {React, useState} from 'react';
import Heading from '../../Components/Heading/Heading'
import './ContactUs.scss'
import Contactform from '../../Components/Contactform/Contactform'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
// import Animate4 from '../../Components/PetrolAnimations/animation4';

const data = {
    0 : [<>          
             <Heading heading='Get In Touch ' ></Heading>
           <ul>
               <li><div class="icon"><i class="fa fa-map-marker" aria-hidden="false"></i></div><div className='getintouch'><h3 >Our Address</h3><p>Asanbani, Dumka, Jharkhand, India</p></div></li>
               <li><div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div><div className='getintouch'><h3>E-mail</h3><p>Mail: <a href="mailto:customerCare.Petroleum@jiobp.com">customerCare.Petroleum@jiobp.com</a></p></div></li>
               <li><div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div><div className='getintouch'><h3>Contact</h3><p>Mobile: <a href="tel:+91-8105070961">1800223023</a></p></div></li>
            </ul> 
    </>, "Contact"],
    1: [ <>
            <Heading heading='Complaint Register' ></Heading>
            <div className="card-body">
                <p className="text-light">A register is available for filing complaints/feedback at each of our outlets as a mandate.
                 Our Area Manager/Outlet supervisor will also provide you with a copy of the filed complaint/feedback as a reference, and also provide you with a resolution response within 7 working days.
                </p></div>  
        </>,  "Complaint"],
    2 : [<>
             <Heading heading=' Fuel Station '></Heading>
            <div className="card-body">
                <p className="text-light">You can walk into the Sales Room area at any of our outlets and request for the Supervisor/Manager who will be happy to help you with your query. The number of the Supervisor/Manager is also displayed in the Sales Room area as a reference for any further follow up.
                </p>
            </div>   
    </>, "Fuel Station"]
}

export default function ContactUs(){
    const [query, setContact] = useState(0);
    document.title = "Petrol Pump | Contact Us"
    return (
        <>
        <NavBar/>
        
        <div className="container-fluid bg-light p-0 m-0 position-relative contact-container-fluid "> 
                <div className="clipped-bg "></div>             
                 {/* <Animate4 /> */}
                <section className="contactus-banner position-relative bg-light">
                    <Heading heading='Contact Us' ></Heading>
                 
                </section>             
                <section className="contactus-content position-relative">
               
                    <div className="row p-3 pt-5 pb-5 m-0 mx-auto  justify-content-center">
                        <div className="col-lg-5 col-md-12 contact-left-area m-0 p-0">
                            <div className="contact-left-card m-0 p-0">
                                <Contactform hasMap = {0} />
                            </div> 
                        </div>
                        <div className="col-lg-5  m-0 p-0  contact-right-area">
                            <div className="card right-card">
                                {data[(query+1)%3][0]}
                                <div className="card-footer p-0 mb-0"><button className="btn btn-primary btn-block" onClick={()=>setContact(query+1)}>{data[(query + 2)%3][1]}</button></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div> 
        <div className="container-fluid p-0 m-0">
            <Footer />  
        </div>
        </>
    )
}