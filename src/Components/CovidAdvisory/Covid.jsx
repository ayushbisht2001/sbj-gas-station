import React from 'react';
import './Covid.scss'
import Animate5  from '../../Components/PetrolAnimations/animation5';
import Heading from '../../Components/Heading/Heading' 


const data = [
    {
       "SN" : "01",
       "content" : "As per Government guidelines, refuelling stations come under essential services"
    },
    {
        "SN" : "02",
        "content" : "We ensure social distancing and robust hygiene protocols "
     },
     {
        "SN" : "03",
        "content" : "Our staffs are screen daily"
     },
     {
        "SN" : "04",
        "content" : "As per Government guidelines, refuelling stations come under essential services"
     }
]



const Content = data.map(i =>(
                <div className="row covid-content" key = {i.index}>
                    <div className="covid-sn text-center "><div className="covid-circle"><p >{i.SN}</p></div></div>
                    <div className="covid-ad">{i.content}</div>
                </div>
))

export default function Covid(){

    return (
        <>
        <Heading heading='Covid 19 Advisory'/>          
          <div className=""></div>
            <div className="row position-relative   ">
              
                <div className="col-lg-6 col-sm-12 position-relative h-100 p-0 animate5-container">
                    <Animate5 />
                </div>
                <div className="col-lg-6 position-relative p-0">
                    <div className="covid-advisory">
                      
                        
                        <div className="advisory-box p-4">
                           {Content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}