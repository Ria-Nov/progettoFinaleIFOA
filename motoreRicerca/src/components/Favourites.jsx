import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  // Utilizzo del hook useSelector per ottenere lo stato degli elementi preferiti dallo store Redux
  const favourites = useSelector(state => state.favourite.list);
  // Utilizzo del hook useDispatch per ottenere la funzione dispatch per inviare azioni allo store Redux
  const dispatch = useDispatch();

  // Utilizzo del hook useNavigate per ottenere la funzione di navigazione da React Router
  const navigate = useNavigate();

  // Ritorno del rendering del componente
  return (
    <Container className="bg-black text-white">
      <Row>
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4 me-auto text-primary">Favourites</h1>
          {/* Pulsante per tornare alla homepage */}
          <Button className="customButton" onClick={() => navigate("/")}>
            🏠
          </Button>
        </Col>
        
        {/* Lista degli elementi preferiti */}
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.length > 0 ? (
              // Mappatura degli elementi preferiti per la visualizzazione
              favourites.map((fav, i) => (
                <ListGroup.Item key={i} className="text-white bg-dark">
                  {/* Icona del cestino per rimuovere l'elemento preferito */}
                  <Trash
                    color="red"
                    className="me-2"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: fav
                      })
                    }
                  />
                  {/* Link all'elemento preferito */}
                  <Link to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
              // Messaggio se non ci sono elementi preferiti
              <ListGroup.Item className="bg-dark text-white">
                No favourites yet, go <Link to="/">back to Homepage</Link> to select some
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
