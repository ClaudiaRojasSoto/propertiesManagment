const initialState = {
    greeting: 'Hello, Guest'
  };
  
  const greetingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GREET_USER':
        return { ...state, greeting: `Hello, ${action.payload}` };
      default:
        return state;
    }
  };
  
  export default greetingsReducer;