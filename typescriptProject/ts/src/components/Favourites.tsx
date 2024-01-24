import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/reducers/index"; // Replace with the actual path to your root reducer file

const Favourites: React.FC = () => {
  const favourites = useSelector((state: RootState) => state.favourite.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container className="bg-black text-white">
      <Row>
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4 me-auto text-primary">Favourites</h1>
          <Button className="customButton" onClick={() => navigate("/")}>
            🏠
          </Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.length > 0 ? (
              favourites.map((fav: string, i: number) => (
                <ListGroup.Item key={i} className="text-white bg-dark">
                  <Trash
                    color="red"
                    className="me-2"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: fav,
                      })
                    }
                  />
                  <Link to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
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
