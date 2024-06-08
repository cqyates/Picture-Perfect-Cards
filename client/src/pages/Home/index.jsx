import { useState } from 'react';

import { Row, Col, Container, Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = () => {
    console.log(searchInput);
    // run pexel fetch through the backend
  };
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  return (
    <Container>
      <Row>
        <Col lg={3} sm={6}>
          <Form.Group style={{display: "flex"}}>
            <Form.Control
              type="text"
              value={searchInput}
              onChange={handleInputChange}
              name="search-input"
            />
            <Button onClick={handleSearch} type="button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
