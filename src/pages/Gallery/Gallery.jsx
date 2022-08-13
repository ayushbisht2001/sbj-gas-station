import React, {useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar'
import Heading from '../../Components/Heading/Heading'
import Footer from '../../Components/Footer/Footer'
import './Gallery.scss'
// import { Container } from 'react-bootstrap';
import {gallery} from '../../api/info.api'
import axios from 'axios'

export default function Gallery(){
    document.title = "Petrol Pump | Gallery"
    const [state, setState] = useState([ 
        {
        image : "https://cdn4.singleinterface.com/files/banner_images/96681/2259_1606416571_15381180.jpg"
        },
        {
            image : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/05/727133-hpcl-refinery-090518.jpg"

        },
        {
            image : "https://c.ndtvimg.com/2020-11/l4hnb0to_hindustan-petroleum-fuel-pump-hpcl_625x300_18_November_20.jpg?downsize=360:*"
            
        },
        {
            image : "https://cdn4.singleinterface.com/files/banner_images/96681/2259_1606416571_15381180.jpg"

        },
        {
            image : "https://cdn4.singleinterface.com/files/banner_images/96681/2259_1606416571_15381180.jpg"

        }


    ])
    useEffect(() => {
        axios.get(gallery , { 
            headers: {
                'content-type': 'application/json',
              }
          })
          .then(res=>{
            if (res.data.status===200){
              setState(res.data.data)
            }
            else if (res.data.status===400){
                setState([])
            }
          })
          .catch(error => {
            
            });
    }, [])
    return (
        <>
    <NavBar/>
      
            
     <div className="container-fluid gallery-header">
     <Heading heading="Gallery" />
     </div>
        
        <div className="container position-relative"   >         
                <ul className="hex">
                {state.map((i,index) =>(
                    <li className="hex-child"  key={index} >
                        <a href={i.image}>
                            <div className="hex-div">
                                {i.created_on}
                                <img src={i.image}  alt="Gallery"/>
                            </div>
                        </a>
                    </li>
                ))}
                </ul>
            </div >
    <Footer/>
        </>
    )
}