const initialState = {
    loading: false,
    error: null,
    success: false,
  };
  
  export const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESET_PASSWORD_REQUEST':
        return { ...state, loading: true };
      case 'RESET_PASSWORD_SUCCESS':
        return { loading: false, error: null, success: true };
      case 'RESET_PASSWORD_FAILURE':
        return { loading: false, error: action.error, success: false };
      default:
        return state;
    }
  };
  