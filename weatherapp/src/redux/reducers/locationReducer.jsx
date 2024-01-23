const initialState = {
  location: '',
  today: {},
  forecast: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_LOCATION':
      return { ...state, location: action.payload };
    case 'SET_TODAY_WEATHER':
      return { ...state, today: action.payload };
    case 'SET_FORECAST':
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
