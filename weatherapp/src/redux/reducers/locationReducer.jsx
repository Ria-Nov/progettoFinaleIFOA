// Definizione dello stato iniziale dell'applicazione
const initialState = {
  location: '',     // Posizione di ricerca dell'utente
  today: {},        // Dati meteorologici attuali
  forecast: {},     // Dati delle previsioni
};

// Reducer che specifica come lo stato dell'applicazione cambia in risposta alle azioni
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Azione per impostare la posizione di ricerca
    case 'SET_SEARCH_LOCATION':
      return { ...state, location: action.payload };

    // Azione per impostare i dati meteorologici attuali
    case 'SET_TODAY_WEATHER':
      return { ...state, today: action.payload };

    // Azione per impostare i dati delle previsioni
    case 'SET_FORECAST':
      return { ...state, forecast: action.payload };

    // Azione predefinita che restituisce lo stato invariato se l'azione non è gestita
    default:
      return state;
  }
};

export default rootReducer;
