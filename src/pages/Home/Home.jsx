import {React, useState} from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import CarouselMid from '../../Components/CarouselMid/CarouselMid'
import Footer from '../../Components/Footer/Footer'
// import Contactform from '../../Components/Contactform/Contactform'
import FAQ from '../../Components/Contactform/FAQ'
import { Container } from 'react-bootstrap'
import USP from '../../Components/USP/USPs'
import Animate4 from '../../Components/PetrolAnimations/animation4';
import './Home.scss'

import KPI from '../../Components/KPI/KPI.jsx'
import Services from '../../Components/Services/Services.jsx'
import FeaturedService from '../../Components/FeaturedServices/FeaturedService.jsx'
import Covid from '../../Components/CovidAdvisory/Covid.jsx';

export default function Home() {
    document.title = "Petrol Pump | Home"
    const [service, setService] = useState(2);

    function handleChange(cservice){
        console.log(cservice, "hey its new")
        setService(cservice);
    }
    return (
        <>
            <NavBar onChange = {handleChange} />
            {/* <Container className = 'mt-5'>
                <CarouselMid />
            </Container> */}
            {/* <CarouselMid /> */}

            <div className="container-fluid m-0 p-0 position-relative" style = {{ height : "90vh" , width : "100vw", overflow :"hidden"}}>    
                <Animate4 />
                <div className='anime-box' >
                <h2 >Shree Balajee</h2> 
                <h2 > Filling Station</h2>            
                <p style={ {   position : "relative",color : "", fontSize : "40px " }} > We enable you to go the distance !</p>  
                </div>


            </div>
            
            <div className="container-fluid p-0 m-0">
                <KPI />
            </div>
            
            <Container >
                <Services type={service}  />                
            </Container>
            <div className="container-fluid  mt-5 mb-5" style={{background : "#9cc3df55"}}>
            <Covid/>   
            </div>
             <Container>             
                <USP/>
            </Container>            

            
         
            <div className="container-fluid p-0 m-0 bg-silver">
               <FeaturedService/>
            </div>
            
           

            <Container>
                <FAQ />
            </Container>
            <div className="container-fluid p-0 m-0">
                <Footer />  
            </div>
            
        </>
    )
}
