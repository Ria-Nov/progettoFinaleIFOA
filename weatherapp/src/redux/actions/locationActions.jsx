// import { thunk } from 'redux';

// export const setLocation = (location) => ({
//     type: "SET_LOCATION",
//     payload: location,
//   });

//   // export const fetchWeather = () => async (dispatch) => {
//   //   const response = await fetch(
//   //     `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`
//   //   );
//   //   const data = await response.json();

//   //   dispatch({ type: "SET_WEATHER", payload: data });
//   // };

// // export const fetchTodayWeather = () => {
// // const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Roma&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
// // const data = response.json();
// // dispatch({
// //     type: FETCH_TODAY_WEATHER,
// //     payload: data });
// // };

// // export const fetchForecast = () => {
// // const response = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Roma&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
// // const data = response.json();
// // dispatch({
// //   type: FETCH_FORECAST,
// //   payload: data,
// // })};

// export const fetchData = thunk(async () => {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
//   const data = await response.json();
//   return { type: 'FETCH_DATA_SUCCESS', data };
// });

import axios from "axios";

export const fetchTodayWeather = (location) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`
    );
  } catch {
    (error) => console.log(error);
  }
};
