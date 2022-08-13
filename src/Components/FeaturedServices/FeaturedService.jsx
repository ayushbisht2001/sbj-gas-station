import React from 'react';
import Heading from '../../Components/Heading/Heading' 
import './FeaturedService.scss'
import fuelCane from './fuelCane.png'
import fireExt from './fireExt.png'
import petrolStick from './petrolStick.png'


export default function FeaturedService() {
    return (
        <>
        <Heading heading='Our Featured Services'/>
        <div className="fs-section-1">
            <div className="fs-section-box">
                <div>
                <img src= {fuelCane} className="section-1-img" alt='Products'></img>
                </div>
                <h2 className="heading pt-3">100% Pure Fuel</h2>
                <p className="heading pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a magna nec nunc porttitor pulvinar at nec libero. Aliquam vitae quam luctus, sagittis purus porta, vehicula tellus. Morbi nec lacinia elit, at dictum ipsum. </p>
            </div>
            <div className="fs-section-box">
                <div>
                    <img src={fireExt} className="section-1-img" alt='Products'></img>
                </div>
            <h2 className="heading pt-3">Fire Safety</h2>
            <p className="heading pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a magna nec nunc porttitor pulvinar at nec libero. Aliquam vitae quam luctus, sagittis purus porta, vehicula tellus. Morbi nec lacinia elit, at dictum ipsum. </p>
          
            </div>
            <div className="fs-section-box">
                <div>
                     <img src={petrolStick} className="section-1-img" alt='Products'></img>
                </div>
                <h2 className="heading pt-3">Latest Machinary</h2>
                <p className="heading pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a magna nec nunc porttitor pulvinar at nec libero. Aliquam vitae quam luctus, sagittis purus porta, vehicula tellus. Morbi nec lacinia elit, at dictum ipsum. </p>
          
            </div>
        </div>
        </>
    )
}