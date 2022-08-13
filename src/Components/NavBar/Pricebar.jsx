// Dependencies import

import React, {useEffect, useState} from 'react'
import axios from 'axios'
// Component import 
import petrol from './petrolicon.svg'
import diesel from './dieselicon.svg'
import './NavBar.scss'

// API import 
import {productPrice} from '../../api/product.api'

export default function Pricebar() {
    const [state, setState] = useState([{
        product : "petrol",
        price : 90
    },
{
    product : "diesel",
    price : 86
}])
    useEffect(() => {
        axios.get(productPrice)
            .then((res)=>{
                if (res.data.status){
                    setState(res.data.data)
                }
                else{
                    setState([])
                }
            })
    }, [])
    console.log(state)
    const pricecard = state.map((i, index)=>{
    	return(
            <>
    		<div className="col-md-4 col-6 col-sm-6 position-relative  " key = {index}>
                <div className="card petrol-price pricecard p-0 bg-dark position-relative mx-auto mt-3"  style = {{width : "100%" , maxWidth : "250px"}}>
                    <div className="card-body   p-2 m-0 text-light ">                      
                        <ul className="price-bars-text">
                            <li> <i><img src={i.product==="petrol" ? petrol : diesel } alt="" width="30px"/></i></li>
                            <li><small>{i.product.toUpperCase()}</small></li>
                            <li><small>&ensp;PRICE&nbsp;:&nbsp;₹{i.price}</small></li>
                        </ul>
                        {/* <small>{i.product.toUpperCase()}&nbsp;PRICE&nbsp;:&nbsp;₹{i.price}</small> */}
                        {/* <i class="fas fa-gas-pump bg-primary"></i> */}
                    </div>
                </div>
            </div>
            </>
    )})
    
    return (
        <div className="container-fluid p-4 bg-primary">
            <div className="row justify-content-around ">
                <div className="col-md-3 col-xm-12  col-lg-3 col-sm-12  my-auto"><img src="https://www.hindustanpetroleum.com/images/logo.png" alt="HP" className="imglogo" /></div>
                {/* <div className="col-md-3 col-12 col-sm-12 d-none d-md-block d-lg-block d-sm-block" ></div> */}
                <div className="col-md-9 col-lg-9 ">
                    <div className="row justify-content-end">{pricecard}</div></div>

                {/* <div className="col-md-4 col-12 col-sm-12 position-relative d-md-none d-lg-none d-sm-none">
                    <div className="card petrol-price pricecard p-0 bg-dark position-relative mx-auto " >
                        <div className="card-body   p-2 m-0 text-light text-center">
                            <img src={ petrol } alt="petrol" width="20px"/>
                            <small className="w-50">PETROL PRICE</small>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            
                            <img src={ diesel } alt="" width="20px"/>
                            <small className="w-50 ">DIESEL PRICE&nbsp;&nbsp;</small>
                        
                        </div>
                        <div className="card-body   p-0 m-0 text-light text-center ">
                            <small className="px-5">₹{ state.length!==0? state[0].product==="petrol"? state[0].price:state[1].price: null}</small>
                            <small className="px-4">₹{ state.length!==0? state[1].product==="diesel"? state[1].price:state[0].price: null}</small>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
