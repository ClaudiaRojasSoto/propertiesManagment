// actions/resetPasswordActions.js

export const resetPasswordRequest = (password, confirmPassword, token) => {
    return (dispatch) => {
      dispatch({ type: 'RESET_PASSWORD_REQUEST' });
      // Similar a forgotPasswordRequest, pero enviando la contraseña, confirmación y token
    };
  };
  