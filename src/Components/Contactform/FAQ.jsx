import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Heading from '../Heading/Heading'
import Arrow from './icon-arrow-down.svg'
import './Contactform.scss'
import {Faq} from '../../api/info.api'
export default function FAQ() {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState([])
    const toggle = index =>{
        if (clicked === index){
            return setClicked(null);
        }
        setClicked(index)
    }
    console.log(data)
    useEffect(() => {
        axios.get(Faq , { 
            headers: {
                'content-type': 'application/json',
              }
          })
          .then(res=>{
            if (res.data.status===200){
              setData(res.data.data)
            }
            else if (res.data.status===400){
                setData([])
            }
          })
          .catch(error => {
            
            });
    }, [])    
    return (
        <div className="contact-info" id="FAQ">
            {data.length ? <Heading heading='Frequently Asked Question'/>: null}   
            {data.map((i,index) => (
                <div className="button" onClick={()=> toggle(index)} key={index}>
                    <div className="questions" >
                        <p className={clicked === index ? "ques ques_active": "ques"}>
                            {i.ques}
                            <span>
                                <img src={Arrow} alt="Arrow" className={clicked===index ? "close arrow": "close"} />
                            </span>
                        </p> 
                        <p className={clicked===index ? "ans ans_active": "ans"}>
                            {i.ans}
                        </p>
                    </div>
                </div> 
            ))}
        </div>
    
    )
}
