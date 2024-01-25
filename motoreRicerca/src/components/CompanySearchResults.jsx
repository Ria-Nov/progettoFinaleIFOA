import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job"; 
import { useParams } from "react-router-dom"; 

// Definizione della componente CompanySearchResults
const CompanySearchResults = () => {
  // Dichiarazione dello stato per gestire l'array di lavori
  const [jobs, setJobs] = useState([]);
  // Estrae i parametri dall'URL tramite React Router
  const params = useParams();

  // URL di base per la richiesta di lavori filtrati per azienda
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  // Effetto che si attiva al caricamento della componente
  useEffect(() => {
    getJobs(); 
  }, []);

  // Funzione asincrona per ottenere i lavori filtrati per azienda
  const getJobs = async () => {
    try {
      // Effettua una richiesta GET all'API con l'URL costruito
      const response = await fetch(baseEndpoint + params.company);
      // Verifica se la risposta è positiva (status code 200)
      if (response.ok) {
        // Estrae i dati dalla risposta JSON
        const { data } = await response.json();
        // Aggiorna lo stato con i dati ottenuti
        setJobs(data);
      } else {
        // Mostra un alert in caso di errore nella richiesta
        alert("Errore nel recupero dei risultati");
      }
    } catch (error) {
      // Gestisce gli errori eventuali stampandoli nella console
      console.log(error);
    }
  };

  // Ritorno della UI del componente
  return (
    <Container className="bg-dark">
      <Row>
        <Col className="my-3">
          {/* Intestazione con il nome dell'azienda ottenuto dai parametri */}
          <h1 className="display-4 text-white">Offerte di lavoro per: {params.company}</h1>
          {/* Mappa e rendi un componente Job per ogni lavoro nei dati */}
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
