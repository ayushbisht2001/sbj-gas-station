import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
// import Heading from '../../Components/Heading/Heading' 
// import Profile from '../../Components/Profile/Profile'
import ProfileSettings from '../../Components/Profile/ProfileSettings'

export default function ProfileSettingPage(){
    document.title = "Petrol Pump | Profile Settings"
    return(
        <>
              <NavBar/>
              <ProfileSettings />
              <Footer />  
        </>
    )
}