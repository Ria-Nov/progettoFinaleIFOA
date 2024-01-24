import { useDispatch, useSelector } from "react-redux";
import {
  setSearchLocation,
  fetchTodayWeather,
  fetchForecast,
} from "../../redux/actions/locationActions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./inputForm.css";

// Definisci il componente funzionale InputForm
const InputForm = () => {
  // Accedi al dispatch e allo stato di Redux usando gli hooks useDispatch e useSelector
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const today = useSelector((state) => state.today);
  const forecast = useSelector((state) => state.forecast);

  //  URL delle API basati sulla posizione corrente
 // const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;
 // const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;

  // Gestore di eventi per la ricerca della posizione alla pressione del tasto "Enter"
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      // Dispaccia azioni Redux per aggiornare lo stato e recuperare i dati meteorologici
      dispatch(setSearchLocation(location));
      dispatch(fetchTodayWeather(location));
      dispatch(fetchForecast(location));

    }
  };

  // Rendering per il componente InputForm
  return (
    <Container fluid>
      <Row className="flex-column">
        <Col className="mt-5 text-center">
          <p className="display-6">Pioverà?</p>
          {/* Form di input per la ricerca della posizione */}
          <div className="search">
            <input
              value={location}
              onChange={(event) => dispatch(setSearchLocation(event.target.value))}
              onKeyDown={searchLocation}
              placeholder="Inserisci la posizione"
              type="text"
            />
          </div>
        </Col>
      </Row>
      {/* Visualizza i dati meteorologici se disponibili */}
      {today.main !== undefined && (
        <Row className="justify-content-center">
          {/* Meteo di oggi */}
          <Col xs={3} className="bg-today ms-2 mt-5 text-center">
            <div>
              {/* Visualizza le informazioni sul meteo di oggi */}
              <p className="text-center">Meteo di Oggi</p>
              <div className="fw-bold mt-3 display-6">
                <p>{today.name}</p>
              </div>
              <div>
                {/* Visualizza la temperatura corrente */}
                {today.main ? <p className="display-6"> {today.main.temp.toFixed()}°</p> : null}
              </div>
              <div>
                {/* Visualizza le condizioni meteorologiche */}
                {today.weather ? <p>{today.weather[0].main}</p> : null}
              </div>
            </div>
            {today.name !== undefined && (
              <div>
                <div>
                  {/* Visualizza la temperatura percepita */}
                  {today.main ? <p className="fw-bold">{today.main.feels_like.toFixed()}°</p> : null}
                  <p>Percepita</p>
                </div>
                <div>
                  {/* Visualizza l'umidità */}
                  {today.main ? <p className="fw-bold">{today.main.humidity}%</p> : null}
                  <p>Umidità</p>
                </div>
              </div>
            )}
          </Col>

          {/* Previsioni per domani */}
          <Col xs={5} className="bg-forecast mt-5 ms-4">
            <div className="text-center">
              {/* Visualizza le informazioni sulle previsioni per domani */}
              <p>Previsioni per Domani</p>
              <div className="fw-bold mt-3 display-6">
                <p>{today.name}</p>
              </div>
              <p className="display-6">{forecast.temp?.toFixed()}°</p>
              <p>
                Min <span className="fw-bold">{forecast.temp_min?.toFixed()}°</span> - Max{" "}
                <span className="fw-bold">{forecast.temp_max?.toFixed()}°</span>
              </p>
              <p className="fw-bold">{forecast.feels_like?.toFixed()}°</p>
              <p>Percepita</p>
              <p className="fw-bold">{forecast.humidity} %</p>
              <p>Umidità</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default InputForm;
