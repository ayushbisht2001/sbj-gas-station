import axios from 'axios';

import {
  userProfile
} from '../../api/user.api';

import {
  PROFILE_INFO,
  PROFILE_INFO_ERROR,
} from './profile.types';

export const postProfileInfo = (first_name, last_name, bio, gender, occupation, email, contact_number, address) => (dispatch, getState) => {
  if (gender === 'Other') {
    gender = 'O';
  } else if (gender === 'Male') {
    gender = 'M';
  } else if (gender === 'Female') {
    gender = 'F';
  } else {
    gender = '';
  }
  const profileData = {
    first_name,
    last_name,
    bio,
    gender,
    occupation,
    email, 
    contact_number,
    address

  };
  const { token } = getState().authReducer;
  // headers

  axios({
    url: userProfile,
    method: 'POST',
    data: profileData,
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      // localStorage.setItem('profileId', res.data.data.id);
      if (res.data.status === 404) {
        dispatch({
          type: PROFILE_INFO_ERROR,
          payload: res.data,
        });
        // toast.error('Please fill valid details', {
        //   position: 'bottom-right',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      } else {
        dispatch({
          type: PROFILE_INFO,
          payload: res.data,
        });
        // toast.success('Success', {
        //   position: 'bottom-right',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const getProfileInfo = () => (dispatch, getState) => {
  // Get token from state
  const { token } = getState().authReducer;
  // headers
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  axios
    .get(userProfile, config)
    .then((res) => {
      // localStorage.setItem('profileId', res.data.data.id);
      if (res.data.status === 404) {
        dispatch({
          type: PROFILE_INFO_ERROR,
          payload: res.data,
        });
      } else {
        dispatch({
          type: PROFILE_INFO,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};
