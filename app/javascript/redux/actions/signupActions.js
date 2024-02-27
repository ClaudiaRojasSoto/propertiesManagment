import axios from 'axios';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = (userData) => async dispatch => {
  try {

    const response = await axios.post('http://localhost:3000/api/v1/signup', {
      user: userData
    });

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data
    });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response ? error.response.data : error.message
    });
  }
};
