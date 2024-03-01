export const requestPasswordReset = (email) => {
  return (dispatch) => {
    dispatch({ type: 'RESET_PASSWORD_REQUEST' });

    const apiEndpoint = `http://localhost:3000/api/v1/password/forgot`;

    axios.post(apiEndpoint, { email })
        .then(response => {
            dispatch({
                type: 'REQUEST_RESET_PASSWORD_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: 'REQUEST_RESET_PASSWORD_FAILURE',
                error: error.response?.data?.message ?? error.message
            });
        });
  };
};

export const resetPassword = (password, confirmPassword, token) => {
  return (dispatch) => {
    dispatch({ type: 'RESET_PASSWORD_REQUEST' });

    const apiEndpoint = `http://localhost:3000/api/v1/password/reset`;

    axios.post(apiEndpoint, { user: { password, password_confirmation: confirmPassword, reset_password_token: token }})
        .then(response => {
            dispatch({
                type: 'RESET_PASSWORD_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: 'RESET_PASSWORD_FAILURE',
                error: error.response?.data?.message ?? error.message
            });
        });
  };
};
