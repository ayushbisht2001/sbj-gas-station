import server from './server'

// User Login/Logout/Register API's

export const userRegister = `${server}/api/user/register/`;
export const userLogin = `${server}/api/user/login/`;
export const userLogout = `${server}/api/user/logout/`;

// Contact Us API's

export const userContactus = `${server}/api/user/contact/`;


//  Profile Page API's 

export const userProfile = `${server}/api/user/profile/`;  // GET or POST both
export const userProfilePasswordchange = `${server}/api/user/profile/passwordchange/`