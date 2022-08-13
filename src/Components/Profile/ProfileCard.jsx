// import dependecies

import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cookie from 'react-cookies'
// import styles 

import './Profile.scss';

// import fucntions

import { getProfileInfo } from '../../Redux/profileinfo/profile.actions'

// import TwitterIcon from '@material-ui/icons/Twitter';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from './avatar.png'
 
export function ProfileCard(props) {
    let d = props.getProfileInfo
    console.log(props)
    useEffect((props) => {
        setTimeout(() => {
            d();
          }, 2000);
    }, [d])
    
    // gender,
    // contact_number, 
    //  These two fields are necessary after creation of new profile
    const {
        name,
        bio,
        email,
        occupation,
        address,
        contact_number,
        created_at
        } = props;
    console.log(created_at)
    return ( 
        <div className="col-md-8  col-sm-12 order-lg-last">
          <div className="card profile-card">
            <img className="card-img-top profile-avatar" src={Avatar} alt="avatar"/>
            <div className="card-body p-3 m-2"> 
            <h3><strong>{name}</strong></h3>
            <small>@{cookie.load('username')}</small>
            <p> {bio}</p> 
            {/* <p><i className="fas fa-map-marker-alt"></i> India, Uttarakhand</p> */}
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="acby5ad888ei3buyy1btru644zw1olnu" className="crayons-icon mr-2 shrink-0"><title id="acby5ad888ei3buyy1btru644zw1olnu">Joined</title>
                    <path fill="#138496" d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 012.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.36a4.025 4.025 0 01-.972-2.182l-.022-.253L2 14v-1a3 3 0 012.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 00-.993.883L4 13v.971l.003.147a2 2 0 003.303 1.4c.363-.312.602-.744.674-1.218l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 003.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 003.99 0L20 14v-1a1 1 0 00-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 11-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C15.85 2.002 17 2.5 17 1z"></path>
                </svg> Joined on {created_at? created_at.split('T')[0] : null}
            </p>
            {address? 
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9d1iqkpd825qhlz9pv5nrd6xjfttdov" className="crayons-icon mr-2 shrink-0"><title >Location</title>
                    <path  fill="#138496" d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    {address}
                </p>
                : 
                null
            }
            <ul className="list-inline ">
                {occupation?
                
                    <li className="list-inline-item social-account m-0 p-0 ">
                        <h5 className="text-info"><strong>Occupation</strong></h5>
                        <p>{occupation}</p>
                    </li>
                    :
                    null
                }

                {email ? 
                    <li className="list-inline-item social-account m-0 p-0">
                        <h5 className="text-info"><strong>Contact</strong></h5>
                        <p>{contact_number}</p>
                        <p><svg width="20" height="20" role="img" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#138496" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                            {email}
                        </p>
                        
                    </li>
                    : 
                    null
                }
            </ul>  
            </div>            
            {/* <div className="card-footer  m-0 p-0 ">
                <ul className="list-inline p-0 m-0">
                    <li className="list-inline-item social-account m-0 p-0 " style={{background: "#1DA1F2"}}><i className="fab fa-twitter m-0  "></i></li>
                    <li className="list-inline-item social-account m-0 p-0  " style={{background: "#4267B2"}}><i className="fab fa-facebook-f m-0  "></i></li>
                    <li className="list-inline-item social-account m-0 p-0 " style={{background: "linear-gradient(to right, #DD2A7B , #8134AF)"}}><i className="fab fa-instagram  m-0  "></i></li>
                </ul>  
            </div>   */}
           
          </div>
        </div>
    );
    } 
 
 
ProfileCard.propTypes = {
    getProfileInfo: PropTypes.func,
    };
const mapStateToProps = (state) => ({
    name: state.profileReducer.name,
    bio: state.profileReducer.bio,
    gender: state.profileReducer.gender,
    occupation: state.profileReducer.occupation,
    email: state.profileReducer.email, 
    contact_number: state.profileReducer.contact_number,
    address: state.profileReducer.address,
    created_at: state.profileReducer.created_at,
});
    
export default connect(mapStateToProps, { getProfileInfo })(ProfileCard);
    