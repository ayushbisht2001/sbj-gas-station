import React from 'react';
import './KPI.scss'
import star from './star-card.svg';
import client from './customer-card.svg';
import calendar from './calendar.svg';

export default function KPI(){

    return (
        <>
            <section className="KPI-section">
                <div className="KPI-banner">
                    <h1 className="heading">Our KPIs</h1>
                    <div className="title-separator m-0 mx-auto"></div>
                    <p className="heading p-2">Lorem ipsum dolor sit ec nu, vehicula tellus. Morbi nec lacinia elit, at dictum ipsum. </p>
                </div>
                <div className="KPIs">
                    <div className="KPI-card">
                        <img className="KPI-card-img" src={client} alt='KPIImage'></img>                       
                        <h1 className="KPI-card-heading">100K+</h1>
                        <p className="h4">Happy Customers</p>
                    </div>
                    <div className="KPI-card">
                        <img className="KPI-card-img" src={star} alt='KPIImage'></img>                       
                        <h1 className="KPI-card-heading">4.5</h1>
                        <p className="h4">Google Rating</p>
                    </div>
                    <div className="KPI-card">
                        <img className="KPI-card-img" src={calendar} alt='KPIImage'></img>                       
                        <h1 className="KPI-card-heading">10 years</h1>
                        <p className="h4">Seamless Service</p>
                    </div>
                </div>
            </section>
        </>
    )
}