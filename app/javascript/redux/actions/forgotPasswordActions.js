import axios from 'axios';

export const forgotPasswordRequest = (email) => {
  return (dispatch) => {
    dispatch({ type: 'FORGOT_PASSWORD_REQUEST' });

    const apiEndpoint = 'http://localhost:3000/api/v1/password/forgot';

    const body = { email };

    axios.post(apiEndpoint, body)
        .then(response => {
            dispatch({
                type: 'FORGOT_PASSWORD_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: 'FORGOT_PASSWORD_FAILURE',
                error: error?.response?.data?.message ?? error.message
            });
        });
  };
};
