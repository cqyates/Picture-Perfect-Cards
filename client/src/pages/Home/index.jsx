import { useState } from 'react';

import { Row, Col, Container, Form, Button } from 'react-bootstrap';

import PictureGrid from "../../components/PictureGrid"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [pictureArray, setPictureArray] = useState([])
  const [page, setPage] = useState(1);
  const [active, setActive] = useState()
  const handlePageClick = (event) => {
    const targetPage = parseInt(event.target.innerText);
    handlePageChange(targetPage);
    setActive(targetPage);
  };
  const handlePageChange = (page) => {
    setPage(page);
    handleSearch(page)
  };
  const handleSearch = (page) => {
    console.log(searchInput);
    fetch(`/api/images/${searchInput}/${page}`).then(response => response.json()).then(data => {
      console.log(data.photos)
      setPictureArray(data.photos)
    })
  };
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  return (
    <Container>
      <Row>
        <Col xl={3} sm={6}>
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
        <Col xxl={9} style={{border: "1px solid red"}}>
          <PictureGrid 
          pictureArray={pictureArray} 
          page={page}
          handlePageClick={handlePageClick}
          active={active}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
