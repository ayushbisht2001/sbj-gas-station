import React from 'react'
import {Carousel} from 'react-bootstrap'
import './CarouselMid.scss'


const data = [
    {
        img: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-j7qfahv2v2u4srvevft6f6uki0-20170609142002.Medi.jpeg",
        heading: "First Slide",
        headingsmall: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img: "https://c.ndtvimg.com/2020-11/l4hnb0to_hindustan-petroleum-fuel-pump-hpcl_625x300_18_November_20.jpg?im=Resize=(1230,900)",
        heading: "Second Slide",
        headingsmall: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img: "https://cdn4.singleinterface.com/files/banner_images/96681/2259_1606416571_15381180.jpg",
        heading: "Third Slide",
        headingsmall: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
]

const slide = data.map(i =>(
    <Carousel.Item key={i.img}>
        <img
        className="img-responsive "
        src={i.img}
        alt={i.heading}
        style={{"width": "100%" , "maxHeight":"80vh"}}
        />
        {/* <Carousel.Caption className="mt-3  bg-light  carousel-block-opacity d-none d-md-block ">
        <h3 className=" h3 heading pt-0 text-dark ">{i.heading}</h3>
        <p className="heading pt-0 text-primary " >{i.headingsmall}</p>
        </Carousel.Caption> */}
    </Carousel.Item>
))

export default function CarouselMid() {
    
    return (
        <>
        <Carousel>
            {slide}
        </Carousel>  
        </>
    )
}
