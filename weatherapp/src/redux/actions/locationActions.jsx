import axios from 'axios';

export const setSearchLocation = (location) => ({
  type: 'SET_SEARCH_LOCATION',
  payload: location,
});

export const fetchTodayWeather = (location) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
    dispatch({ type: 'SET_TODAY_WEATHER', payload: response.data });
  } catch (error) {
    console.error('Error fetching today\'s weather', error);
  }
};

export const fetchForecast = (location) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
    dispatch({ type: 'SET_FORECAST', payload: response.data.list[1].main });
  } catch (error) {
    console.error('Error fetching forecast', error);
  }
};
