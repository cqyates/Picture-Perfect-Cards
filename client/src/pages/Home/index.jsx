import {useState} from "react"

import { Row, Col, Container, Form, Button } from 'react-bootstrap';


const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const handleSearch = () => {
   console.log(searchInput)
   // run pexel fetch through the backend 
  };
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setSearchInput(event.target.value)
  }
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
             type="text"
             value={searchInput}
             onChange={handleInputChange}
             name="search-input"
             />
            <Button onClick={handleSearch} type="button">
              Search
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
