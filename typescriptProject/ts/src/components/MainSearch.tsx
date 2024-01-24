import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

interface JobData {
  _id: string;
  company_name: string;
  url: string;
  title: string;
}

const MainSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [jobs, setJobs] = useState<JobData[]>([]);

  const navigate = useNavigate();

  const endpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
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
          <Button className="customButton" onClick={() => navigate("/favourites")}>
            ❤
          </Button>
        </Col>
        <Col xs={3} className="ms-5 ps-5">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={6} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
