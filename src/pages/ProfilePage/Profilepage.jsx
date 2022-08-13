import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
// import Heading from '../../Components/Heading/Heading' 
import Profile from '../../Components/Profile/Profile'

export default function Profilepage(){
    document.title = "Petrol Pump | Profile"
    return(
        <>
              <NavBar/>
              <Profile/>
              <Footer />  
        </>
    )
}