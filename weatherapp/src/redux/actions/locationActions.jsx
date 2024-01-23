import axios from 'axios';

// Azione per impostare la posizione di ricerca nell'applicazione
export const setSearchLocation = (location) => ({
  type: 'SET_SEARCH_LOCATION',  // Tipo dell'azione
  payload: location,            // Dati aggiunti all'azione (in questo caso, la posizione)
});

// Azione asincrona per ottenere i dati meteorologici attuali e aggiornare lo stato
export const fetchTodayWeather = (location) => async (dispatch) => {
  try {
    // Effettua la chiamata API per ottenere i dati meteorologici attuali
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
    
    // Dispaccia l'azione per aggiornare lo stato con i dati ricevuti
    dispatch({ type: 'SET_TODAY_WEATHER', payload: response.data });
  } catch (error) {
    // Gestisce eventuali errori durante la chiamata API e logga un messaggio di errore
    console.error('Error fetching today\'s weather', error);
  }
};

// Azione asincrona per ottenere i dati delle previsioni future e aggiornare lo stato
export const fetchForecast = (location) => async (dispatch) => {
  try {
    // Effettua la chiamata API per ottenere i dati delle previsioni future
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`);
    
    // Dispaccia l'azione per aggiornare lo stato con i dati ricevuti
    dispatch({ type: 'SET_FORECAST', payload: response.data.list[1].main });
  } catch (error) {
    // Gestisce eventuali errori durante la chiamata API e logga un messaggio di errore
    console.error('Error fetching forecast', error);
  }
};
