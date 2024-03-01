const initialState = {
    loading: false,
    error: null,
    success: false,
  };
  
  export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FORGOT_PASSWORD_REQUEST':
        return { ...state, loading: true };
      case 'FORGOT_PASSWORD_SUCCESS':
        return { loading: false, error: null, success: true };
      case 'FORGOT_PASSWORD_FAILURE':
        return { loading: false, error: action.error, success: false };
      default:
        return state;
    }
  };
  