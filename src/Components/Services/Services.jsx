import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Contactform from '../Contactform/Contactform'
import './Services.scss'

const services_content = {
    1 : <> 
        <div class="card-body ">
                    <h5 class="card-title"><strong>Retail Customer</strong></h5>
                    <p class="card-text text-left">Allow us to show our affections through amazing gifts and rewards. Keep giving us the opportunity to serve repeatedly and you stand a chance to win assured prizes. 
                       </p>
                    <p  class="card-text text-left"  > If you are a frequent visitor to our station, don't forget to collect your diary and get your purchase recorded.</p><p className="text-left">Please talk to nozzleman at your next visit or call us at <strong style={{fontWeight : 900 , fontSize : "20px"}}><nobr>+91-9939339733</nobr></strong>
                    </p>
                   
        </div>
    </>, 
    2: <>
                <div class="card-body">
                    <h5 class="card-title"><strong>Business Customer</strong></h5>
                    <p  class="text-left" >Let us take care of your fuel need so that you can focus on your core functions. We can deliver Petrol, Diesel and Lubes, anywhere anytime.</p>
                    <p className=" text-muted text-left">Doorstep Delivery | Assured Quality & Quantity | Flexible Payment Mechanism</p>
                    <p  className="text-left">Just call us at <strong style={{fontWeight : 900 , fontSize : "20px"}}><nobr>+91-9939339733</nobr></strong>  Else, just share your details here and we will reach out to you.</p>
                    <button className="btn btn-primary float-left "
                        onClick={()=>{
                            document.getElementById("contact").classList.toggle('d-none')
                        }}
                    >Contact Us</button>
                    <div className="d-none" id="contact">
                        <Contactform hasMap={0} />
                    </div>
                </div>
    </>
}

export default function Services(){
    // console.log(props.type, "service me")
    const ser= Number(localStorage.getItem("service") || 1 ) 
    const [service, setService] = useState(2)
    
    React.useEffect(() => {
     
        setService(service => ser)
        
      }, [ser])


    return (
        <>  
            <h1 className="heading " id = 'services'>We Value You</h1>
              <div className="title-separator"></div>
              <div className="row ">
              <div class="col-lg-8 mx-auto col-sm-12">
                <div class="card service-card text-center mt-5">
                <div class="card-header bg-primary">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item w-50">
                        <Link class={service === 1 ? "nav-link active" : "nav-link"} onClick={() => setService(1)} aria-current="true" >Retail Customer</Link>
                    </li>
                    <li class="nav-item w-50">
                        <Link class={service === 2 ? "nav-link active" : "nav-link"} aria-current="true"  onClick={() => setService(2)}  >Business Customer</Link>
                    </li>                 
                    </ul>
                </div>
             {services_content[service]}
             </div>
             </div>
            </div>
        </>
    )
}