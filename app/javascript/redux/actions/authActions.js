// Actions type
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Login Action
export const login = (email, password) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/login', { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data
    });
  }
};
