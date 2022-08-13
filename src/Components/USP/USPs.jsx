import React from 'react';
import usp1 from './usp1.png'
import usp2 from './usp2.png'
import usp3 from './usp3.png'
import {Row, Col} from 'react-bootstrap'
import './USPs.scss'


export default function USP()  {
 
    
        return ( 
            <>
              <h1 className="heading ">Our USPs</h1>
              <div className="title-separator"></div>
             <Row className = "usp mt-4 p-4">
                  
                            <Col className=" col-12 col-md-4  p-2" >
                                <div className="card usp-card ">                                    
                                    <img className="card-img-top usp-img m-0 p-0" src={usp1} alt="Cardcap"></img>
                                </div>

                            </Col>

                            <Col className="col-12 col-md-4   p-2">
                            <div className="card usp-card">
                                    <img className="card-img-top  usp-img" src={usp2} alt="Cardcap"></img>
                                </div>
                            </Col>

                            <Col className="col-12 col-md-4   p-2">
                            <div className="card usp-card">
                                    <img className="card-img-top usp-img" src={usp3} alt="Cardcap"></img>
                                </div>
                            </Col>

            </Row>
            </>
         );
    
}
 
 