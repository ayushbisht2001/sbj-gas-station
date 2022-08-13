import {
    PROFILE_INFO,
    PROFILE_INFO_ERROR
} from './profile.types'
const initialState = {
    first_name: '',
    last_name: '',
    name: '',
    gender: '',
    occupation: '',
    email: '',
    bio: '',
    contact_number: '',
    address:'',
    created_at: ''
  }

  export default function profileReducer(state = initialState, action) {
    switch (action.type) {
      case PROFILE_INFO:
        let fullname = action.payload.data.first_name + ' '   + action.payload.data.last_name
        return {
        ...state,
        first_name: action.payload.data.first_name,
        last_name: action.payload.data.last_name,
        name: fullname,
        gender: action.payload.data.gender,
        occupation: action.payload.data.occupation,
        email: action.payload.data.email,
        bio: action.payload.data.bio,
        contact_number: action.payload.data.contact_number,
        address: action.payload.data.address,
        created_at: action.payload.data.created_at
        };
      case PROFILE_INFO_ERROR:
          return{
            name: '',
            gender: '',
            occupation: '',
            email: '',
            bio: '',
            contact_number: '',
            address: ''
          }
      default:
        return state;
    }
  }