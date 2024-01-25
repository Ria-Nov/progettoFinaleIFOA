import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

const MainSearch = () => {
  // Utilizzo del hook useState per gestire lo stato della query di ricerca e dei risultati dei lavori
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  // Utilizzo del hook useNavigate per ottenere la funzione di navigazione da React Router
  const navigate = useNavigate();

  // URL dell'endpoint API per la ricerca dei lavori
  const endpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // Gestione del cambiamento del valore nell'input di ricerca
  const handleChange = e => {
    setQuery(e.target.value);
  };

  // Gestione dell'invio del modulo di ricerca
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Chiamata API per ottenere i risultati della ricerca
      const response = await fetch(endpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="bg-dark text-white">
      <Row>
        <Col xs={10} className="d-flex flex-wrap align-items-center my-3">
          <h3 className="display-1 ms-2 me-auto text-primary">Job Search</h3>
          {/* Pulsante per navigare alla pagina dei preferiti */}
          <Button className="customButton" onClick={() => navigate("/favourites")}>
            ❤
          </Button>
        </Col>
        {/* Form di ricerca */}
        <Col xs={3} className="ms-5 ps-5">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        {/* Elenco dei lavori risultanti dalla ricerca */}
        <Col xs={6} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
