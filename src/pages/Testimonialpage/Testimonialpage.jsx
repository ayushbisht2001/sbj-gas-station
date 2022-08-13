import React from 'react'


import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Testimonial from '../../Components/Testmonial/Testimonial'
export default function Testimonialpage() {
    document.title = "Petrol Pump | Testimonials"
    return (
        <>
         <NavBar />   
         <Testimonial/>
         <div className="container-fluid p-0 m-0">
                <Footer />  
            </div>
        </>
    )
}
