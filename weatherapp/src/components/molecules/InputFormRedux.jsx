import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const fetchWeatherData = (location) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);

const WeatherApp = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);

  const handleChangeLocation = (newLocation) => {
    dispatch({ type: 'FETCH_WEATHER_DATA', payload: newLocation });
  };

  const handleRefresh = () => {
    dispatch({ type: 'REFRESH_WEATHER_DATA' });
  };

  const fetchWeather = async () => {
    try {
      const response = await fetchWeatherData(weather.location);
      const data = await response.json();
      dispatch({ type: 'UPDATE_WEATHER_DATA', payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather-app">
      <input type="text" placeholder="Enter location" onChange={(event) => handleChangeLocation(event.target.value)} />
      <button onClick={handleRefresh}>Refresh</button>

      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <p>Current temperature: {weather.main.temp}°C</p>
          <p>Weather condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
