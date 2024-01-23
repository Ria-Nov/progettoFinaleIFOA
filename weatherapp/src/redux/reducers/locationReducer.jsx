// import { SET_LOC, FETCH_TODAY_WEATHER, FETCH_FORECAST } from "../actions/locationActions";

const initialState = {
  location: "",
  today: {},
  forecast: {},
};

// const locationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_LOC:
//       return {
//         ...state,
//         location: action.payload,
//       };
//     case FETCH_TODAY_WEATHER:
//       return {
//         ...state,
//         today: action.payload,
//       };

//     case FETCH_FORECAST:
//       return {
//         ...state,
//         forecast: action.payload,
//       };

//     default:
//       return state;
//   }
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.payload };

    case "SET_WEATHER":
      return { ...state, today: action.payload };

    default:
      return state;
  }
};

export default reducer;
