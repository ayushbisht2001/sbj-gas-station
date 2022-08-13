import React from 'react';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Animate3 from '../../Components/PetrolAnimations/animation3.jsx'
import {Container, Row, Col} from  'react-bootstrap'
import './AboutUs.scss'
import  Animate  from '../../Components/PetrolAnimations/animation2.jsx';
import USP from  '../../Components/USP/USPs.jsx';
import badge1 from './badge1.png'
import proprieter from './proprieter.png'
// import CarouselMid from '../../Components/CarouselMid/CarouselMid'
export default  function AboutUs()  {   
        document.title = "Petrol Pump | About Us"
        return ( 
            <>
                <NavBar />
                    <div className="container-fluid  m-0 p-0 ">
                        <Row className="about-banner m-0"  >
                            <Col  lg={6} md={6} sm={12} className="text-left"   >
                                <h1 style = {{color: "black"}}className="heading text-left pl-4 mt-4">Shree Balajee Filling Station</h1>
                                <h5 className = "heading   h6 pl-4 pt-0 mt-1 text-left  ">We enable you to go the distance !</h5>
                                {/* <hr style= {{marginTop: "2px"}}></hr> */}
                             </Col >
                            <Col  lg={6} md={6} className =" position-relative"  >
                                <div className="animate-box ">
                                    <Animate />
                                </div>
                            </Col>

                        </Row>
                        
                        <Row className = "about-body p-4 mt-4">
                            <Container >
                                <Row id="about-desp">
                                    <Col className="about-desp" lg={7} md={7} sm={12}>
                                        <h1 className=" heading">About Us</h1>
                                        <div className="title-separator "></div>
                                        <p className="mt-4"><strong >Shree Balajee Filling Station</strong> situated in picturesque location of Asanbani in Dumka district of Jharkhand, Shree Balajee Filling Station symbolizes excellent customer service and supreme quality. 
                                            It is not merely a refueling station (aka petrol pump) but a destination to bring cheer and smile by taking wholesome care of you and your vehicle. <br /><br /><br />
                                            We abide by stringent quality, measurement, compliance and safety norms stipulated by Hindustan Petroleum Corporation Limited (HPCL). Fitted with state of art machinery and equipment, we follow global standards of filling station management. <br /><br /><br />
                                            We serve each and every customer with equal commitment and dedication. If you are an en-route retail customer, don't forget to stop by and experience our services. If you own a business and require frequent supply of petrol/diesel/lubes, we facilitate assured supply, doorstep delivery and flexible payment mechanism.
                                        </p>
                                    </Col>
                                    <Col lg={5} md={5}  >
                                    <div className="animate3-box mx-auto ">
                                        <Animate3 />
                                    </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>

                        <Row className = "about-body p-4 mt-4" >
                            <Container >
                                <Row>
                                 
                                    <Col className="about-desp order-md-last "  id="aboutproprietor" lg={12} md={12} sm={12} >
                                        <h1 className=" heading  " >About the Proprietor</h1>
                                        <div className="title-separator  "></div>
                                        <p className="mt-4"><strong >Mahabir Modi</strong>  is the sole proprietor of Shree Balajee Filling Station. Coming with around 35 years of experience in various businesses, his sole mantra is 'Customer Obsession'. He comes from respected Modi family of asanbani who are known for their business acumen as well as social services. <br /><br /><br />
                                            He strived hard to set up this station around 10 years ago. He is of the belief that it is the right of every person to have the access to unaltered fuel for one's vehicle and business. Just as clean water is essential for healthy body, clean fuel is indispensable for healthy vehicle. He was very uncomfortable with the rampant malpractices in the unorganized and unregulated distribution networks in and around asanbani.<br /><br /><br />
                                            Any organized petrol pump/filling station was around 30 KMs away. Due to lack of alternatives, people were being forced to use adulterated fuel which poised excessive environmental hazard causing irreversible damage to flora and fauna. Frequent malfunctioning of vehicle engine due to sub-standard fuel was putting huge financial strain on people. Additionally, lots of preventable accidents were also attributed to poor fuel quality.<br /><br /><br />
                                            In this backdrop when HPCL floated the advertisement for filling station in Asanbani, it was the moment he had been waiting for. He was awarded the proprietorship in 2010, and since then there is no looking back. The station is serving around thousands of customers daily and has been felicitated by HPCL on various occasions.<br /><br /><br />
                                            Mahabir also supports and helps anciliary services e.g Dhaba, repair services in and around itself. Station has been specifically employing individuals from backward section of society. Directly and indirectly, Shree Balajee Filling Station has been able to generate employment opportunity for hundreds of people.<br /><br /><br />
                                            He also enjoys good rapport with local tribal and non-tribal community because of his social services and good work.
                                        </p>
                                    </Col>
                                    {/* <Col lg={5} md={5}   >
                                        
                                        <div className="animate3-box mx-auto ">
                                            <img src={proprieter} alt="" className="img-fluid" />
                                        </div>
                                    </Col> */}
                                </Row>
                            </Container>
                        </Row>
                        <Container>
                            <h1 className="heading text-center">Rewards and Recognition</h1>
                            <div className="title-separator    "  ></div>
                            <Row>
                                <Col lg={4} md={4} sm={8} className="mx-auto">
                                    <div className="card badge-card mx-auto text-center">
                                        <img className="card-img-top about-badge mx-auto" src={badge1} alt="2nd badge"></img>
                                        <p className="heading pt-2">2nd Prize by HPCL for Dumka district</p>
                                    </div>
                                </Col>
                                {/* <Col lg={8} md={8} sm={12}>
                                </Col> */}
                            </Row>
                        </Container>

                        <div className="container   ">
                        <USP/>
                        </div> 
                       
                    </div>
                <Footer />
            </>
         );
    }

 