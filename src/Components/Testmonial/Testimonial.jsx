import React,{ useState, useEffect} from 'react'

import './Testimonial.scss'
import Heading from '../Heading/Heading'
import {testimonial} from '../../api/info.api'
import axios from 'axios'

const URL = process.env.PUBLIC_URL;


export default function Testimonial() {
        
    const [state, setState] = useState([

        {
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, suscipit? Tempore nulla eos quod enim repellat totam alias facilis ipsam.",
            photo : "profile.jpg",
            name : "Ayush Bisht"
        },
          {
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, suscipit? Tempore nulla eos quod enim repellat totam alias facilis ipsam.",
            photo : "profile.jpg",
            name : "Ayush Bisht"
        },
          {
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, suscipit? Tempore nulla eos quod enim repellat totam alias facilis ipsam.",
            photo : "profile.jpg",
            name : "Ayush Bisht"
        },
          {
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, suscipit? Tempore nulla eos quod enim repellat totam alias facilis ipsam.",
            photo : "profile.jpg",
            name : "Ayush Bisht"
        },


    ])
    useEffect(() => {
        axios.get(testimonial , { 
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
        <div className="container">
            <Heading heading="What Our Clients Say" />
            <div className="row">

            {state.map((i,index) => (
                <div className="col-md-4 col-sm-6 col-lg-4 col-12 py-2" key={index}>
                    <div className="card testimonial">
                        <div className="card-body p-5">
                            <p className="card-text pt-4">{i.content}</p>
                            <div className="testimonial__footer mt-5">
                                <div className="testimonial__img">
                                    <img className="smallimg" src={`${URL}/assets/${i.photo}`} alt="" />
                                    <div className="testimonial__description pl-3">
                                       <span className="font-weight-bold">{i.name}</span> 
                                        <div>{i.designation}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
