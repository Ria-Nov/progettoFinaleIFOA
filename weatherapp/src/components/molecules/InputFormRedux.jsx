import { connect } from "react-redux";
import { setSearchLocation, fetchTodayWeather, fetchForecast } from "../../redux/actions/locationActions"; // Importazione delle azioni Redux
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./inputForm.css";

// Componente InputForm che ora riceve alcuni dati dallo stato globale grazie a Redux
const InputForm = ({
  location,
  today,
  forecast,
  setSearchLocation,
  fetchTodayWeather,
  fetchForecast,
}) => {
  // URL per le chiamate API basato sulla posizione
  const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;

  // Gestore per la ricerca della posizione
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      // Azione Redux per impostare la posizione di ricerca
      setSearchLocation(location);

      // Azioni Redux per effettuare le chiamate API e aggiornare lo stato globale
      fetchTodayWeather(location);
      fetchForecast(location);

      // Svuota la barra di ricerca
      setSearchLocation("");
    }
  };

  return (
    <Container fluid>
      <Row className="flex-column">
        <Col className="mt-5 text-center">
          <p className="display-6">Will it Rain?</p>
          {/* Barra di ricerca */}
          <div className="search">
            <input
              value={location}
              onChange={(event) => setSearchLocation(event.target.value)}
              onKeyDown={searchLocation}
              placeholder="Enter Location"
              type="text"
            />
          </div>
        </Col>
      </Row>
      {/* Sezione di visualizzazione dei dati meteorologici */}
      {today.main !== undefined && (
        <Row className="justify-content-center">
          {/* Today's Weather */}
          <Col xs={3} className="bg-today ms-2 mt-5 text-center">
            <div>
              <p className="text-center">Today's Weather</p>
              <div className="fw-bold mt-3 display-6">
                <p>{today.name}</p>
              </div>
              <div>
                {today.main ? (
                  <p className="display-6"> {today.main.temp.toFixed()}°</p>
                ) : null}
              </div>
              <div>
                {today.weather ? <p>{today.weather[0].main}</p> : null}
              </div>
            </div>

            {today.name !== undefined && (
              <div>
                <div>
                  {today.main ? (
                    <p className="fw-bold">{today.main.feels_like.toFixed()}°</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div>
                  {today.main ? (
                    <p className="fw-bold">{today.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
              </div>
            )}
          </Col>

          {/* Tomorrow's Forecast */}
          <Col xs={5} className="bg-forecast mt-5 ms-4">
            <div className="text-center">
              <p>Tomorrow's Forecast</p>
              <div className="fw-bold mt-3 display-6">
                <p>{today.name}</p>
              </div>
              <p className="display-6">{forecast.temp?.toFixed()}°</p>
              <p>
                Min <span className="fw-bold">{forecast.temp_min?.toFixed()}°</span> - Max{" "}
                <span className="fw-bold">{forecast.temp_max?.toFixed()}°</span>
              </p>
              <p className="fw-bold">{forecast.feels_like?.toFixed()}°</p>
              <p>Feels Like</p>
              <p className="fw-bold">{forecast.humidity} %</p>
              <p>Humidity</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

// Funzione per mappare lo stato Redux alle proprietà del componente
const mapStateToProps = (state) => ({
  location: state.location,
  today: state.today,
  forecast: state.forecast,
});

// Connette il componente a Redux e mappa le azioni alle proprietà
export default connect(mapStateToProps, {
  setSearchLocation,
  fetchTodayWeather,
  fetchForecast,
})(InputForm);
