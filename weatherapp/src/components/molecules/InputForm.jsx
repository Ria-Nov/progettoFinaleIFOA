// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from 'react-bootstrap/Container';
// import axios from "axios";
// import { useState } from "react";
// import "./inputForm.css";

// const InputForm = () => {
//   // useState per le previsioni giornaliere
//   const [today, setToday] = useState({});
//   // useState per le previsioni future
//   const [forecast, setForecast] = useState({});
//   // useState per la location nella barra di ricerca
//   const [location, setLocation] = useState("");

//   // // url delle api
//   const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;
//   const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;

//   // // handler fetch
//   const searchLocation = (event) => {
//     if (event.key === "Enter") {
//       // prima fetch con axios per recuperare i dati giornalieri da una località
//       axios.get(urlToday).then((response) => {
//         setToday(response.data);
//       });
  
//     // seconda fetch per recuperare i dati delle previsioni del giorno dopo
//     fetch(urlForecast)
//     .then((response) => response.json())
//     .then((data) => {
//     setForecast(data.list[1].main);
//   });

//   // svuotamento barra ricerca
//   setLocation('')
//     }
//   };


//   return (
//     <Container fluid>
//       <Row className="flex-column">
//         <Col className="mt-5 text-center">
//           <p className="display-6">Will it Rain?</p>
//           {/* start barra ricerca */}
//           <div className="search">
//             <input
//               value={location}
//               onChange={(event) => setLocation(event.target.value)}
//               onKeyDown={searchLocation}
//               placeholder="Enter Location"
//               type="text"
//             />
//           </div>

//           {/* fine barra ricerca */}
//         </Col>
//       </Row>
//       {/* sezione today's weather, solo se non undefined */}
//       {today.main !== undefined && <Row className="justify-content-center">
//         <Col xs={3} className="bg-today ms-2 mt-5 text-center">
//           <div>
//             <p className="text-center">Today's Weather</p>
//             <div className="fw-bold mt-3 display-6">
//               <p>{today.name}</p>
//             </div>
//             <div>
//               {today.main ? <p className="display-6"> {today.main.temp.toFixed()}°</p> : null}
//             </div>
//             <div>
//               {today.weather ? <p>{today.weather[0].main}</p> : null}
//             </div>
//           </div>

//           {today.name !== undefined && (
//             <div>
//               <div>
//                 {today.main ? (
//                   <p className="fw-bold">{today.main.feels_like.toFixed()}°</p>
//                 ) : null}
//                 <p>Feels Like</p>
//               </div>
//               <div>
//                 {today.main ? (
//                   <p className="fw-bold">{today.main.humidity}%</p>
//                 ) : null}
//                 <p>Humidity</p>
//               </div>
//             </div>
//           )}
//         </Col>
//         {/* fine today's weather */}
//         {/* sezione tomorrow's forecast */}
//         <Col xs={5} className="bg-forecast mt-5 ms-4">
//                     <div className="text-center">
//                         <p>Tomorrow's Forecast</p>
//                         <div className="fw-bold mt-3 display-6">
//               <p>{today.name}</p>
//             </div>
//                         <p className="display-6">{forecast.temp?.toFixed()}°</p>
//                         <p>Min <span className="fw-bold">{forecast.temp_min?.toFixed()}°</span> -  Max <span className="fw-bold">{forecast.temp_max?.toFixed()}°</span></p>
//                         <p className="fw-bold">{forecast.feels_like?.toFixed()}°</p>
//                         <p>Feels Like</p>
//                        <p className="fw-bold">{forecast.humidity} %</p>
//                        <p>Humidity</p>
//                     </div>
//         </Col>
//         {/* fine tomorrow's forecast */}
//       </Row>}
//     </Container>
//   );
// };

// export default InputForm;