import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ data }) => {
  // Utilizzo del hook useSelector per ottenere lo stato degli elementi preferiti dallo store Redux
  const favourites = useSelector(state => state.favourite.list);
  // Utilizzo del hook useDispatch per ottenere la funzione dispatch per inviare azioni allo store Redux
  const dispatch = useDispatch();

  // Verifica se l'elemento corrente è tra quelli preferiti
  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      {/* Colonna per l'icona della stella e il nome dell'azienda */}
      <Col xs="auto" className="d-flex align-items-center">
        {/* Icona della stella piena se l'elemento è tra quelli preferiti, altrimenti stella vuota */}
        {isFav ? (
          <StarFill
            color="gold"
            size={22}
            className="me-2 my-auto"
            // Azione per rimuovere l'elemento dai preferiti
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={22}
            className="me-2 my-auto"
            // Azione per aggiungere l'elemento ai preferiti
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name
              })
            }
          />
        )}

        {/* Link al dettaglio dell'azienda */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      {/* Colonna per il titolo del lavoro con link esterno */}
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
