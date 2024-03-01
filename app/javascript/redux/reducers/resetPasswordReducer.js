const initialState = {
  loading: false,
  error: null,
  success: false,
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_PASSWORD_REQUEST':
    case 'REQUEST_RESET_PASSWORD_REQUEST':
      return { ...state, loading: true, error: null };
    case 'RESET_PASSWORD_SUCCESS':
      return { loading: false, error: null, success: true };
    case 'REQUEST_RESET_PASSWORD_SUCCESS':
      return { ...state, loading: false, error: null, success: false };
    case 'RESET_PASSWORD_FAILURE':
    case 'REQUEST_RESET_PASSWORD_FAILURE':
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};
