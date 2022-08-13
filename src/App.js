// import dependencies

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUsPage';
import ContactUs from './pages/ContactUsPage/ContactUs';
import Gallery from './pages/Gallery/Gallery';
import Profilepage from './pages/ProfilePage/Profilepage';
import ProfileSettingPage from './pages/ProfilePage/ProfileSettingPage';
import EntryPage from './pages/Entry/entry.jsx'
import AccountPage from './pages/ProfilePage/AccountPage';
import { ToastProvider } from 'react-toast-notifications';
import PrivateRoute from './PrivateRoute'
import LockRoute from './LockRoute'
import Toastify from './Components/Toastify/Toastify'
import Loader from './Components/Loader/Loader'
import Testimonialpage from './pages/Testimonialpage/Testimonialpage'
import Service from './pages/Services/ServicePage'
import Page404 from './pages/Page404/Page404'
function App() {
  return (
      <BrowserRouter>
       <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="bottom-center"
          >
          <Loader />
          <Toastify />
        <Switch>
         
          <Route exact path="/" component={Home} />  
          <Route exact path="/aboutus" component={AboutUs} /> 
          <Route exact path="/contactus" component={ContactUs} /> 
          <Route exact path="/testimonials" component={Testimonialpage} /> 
          <Route exact path="/gallery" component={Gallery} />  
          <Route exact path="/services" component={Service} />  

          
          <LockRoute exact path="/login" component = {() => <EntryPage type="login"/>}/>
          <LockRoute exact path="/register" component ={() => <EntryPage type="register"/>}/> 
                        
          <PrivateRoute exact path="/profile" component = {Profilepage}/>
          <PrivateRoute exact path="/profile/profile-settings" component = {ProfileSettingPage}/>
          <PrivateRoute exact path="/profile/account-settings" component = {AccountPage}/>
          <Route path="*" component={Page404}/>    {/* For 404 page if none match it will go to this page!*/}
        </Switch>
        </ToastProvider> 
      </BrowserRouter>

  );
}

export default App;
