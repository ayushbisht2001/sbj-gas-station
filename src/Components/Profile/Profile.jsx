import React from 'react';
import ProfileMenuBox from './ProfileMenuBox';
import ProfileCard from './ProfileCard';
// import PurchaseHistory from './PurchaseHistory';
// import PurchaseStats from './PurchaseStats';

export default function Profile() {    
     
        return (
            <div className="container pt-5 pb-5 align-items-center">
                <div className="row"> 
                    <ProfileMenuBox />           
                    <ProfileCard />   
                </div>
                {/* <div className="row">                    
                    <PurchaseHistory />                
                    <PurchaseStats />           
                </div>                 */}
            </div>
          );
     
}
 
 