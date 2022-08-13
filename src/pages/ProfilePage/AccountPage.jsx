import React  from 'react';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Account from '../../Components/Profile/Account'
 
 
export default  function AccountPage () {
        document.title = "Petrol Pump | Account"
        return ( 
            <>
            <NavBar/>
            <Account />
            <Footer /> 
            </> 
         );
   
}
 