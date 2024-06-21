import { useState, useEffect } from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { SAVE_PHOTO } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js';

import { Row, Col, Container, Form, Button } from 'react-bootstrap';

import PictureGrid from "../../components/PictureGrid/index.jsx"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [pictureArray, setPictureArray] = useState([]);
  const [savePhoto, { error }] = useMutation(SAVE_PHOTO);
  const [savedImages, setSavedImages] = useState([]);

  const [page, setPage] = useState(1);
  const [active, setActive] = useState();

  const { loading, data } = useQuery(QUERY_ME);

  // const savedPhotoArray = data?.me.savedPhotos || [];
  //Handles the Pagination Click - Works
  const handlePageClick = (event) => {
    const targetPage = parseInt(event.target.innerText);
    handlePageChange(targetPage);
    setActive(targetPage);
  };
  //Changes the page and reruns the pexel search.
  const handlePageChange = (page) => {
    setPage(page);
    handleSearch(page)
  };
  //runs the pexel search, returns page 1 with 6 items and sets the pictureArray useState hook.
  const handleSearch = (page) => {
    fetch(`/api/images/${searchInput}/${page}`).then(response => response.json()).then(data => {
     setPictureArray(data.photos)
    })
  };
  //sets the search input as you type each character
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleImageSelect = async (event) => {
    const pexelID = event.target.getAttribute('id');
    

    const token = Auth.loggedIn() ? Auth.getToken() : null;
   
  
    if (!token) {
      return false;
    }
    try {
      const apiRes = await fetch(`/api/images/${pexelID}`);
      const pData = await apiRes.json();
      const photoObject = {
        photoId: pData.id,
        alt: pData.alt,
        photographer: pData.photographer,
        smSrc: pData.src.small,
        medSrc: pData.src.medium,
        orgSrc: pData.src.original,
        lgSrc: pData.src.large,
        xlSrc: pData.src.large2x,
        url: pData.url,
      };
      
      const { data } = await savePhoto({
        variables: { photoData: photoObject },
      });
      console.log(data, "from Home Component after savePhoto Mutation")
      
    } catch (err) {
      console.log('mutation failed', err);
    }
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
        <Col xxl={9}>
          <PictureGrid 
          pictureArray={pictureArray} 
          page={page}
          handlePageClick={handlePageClick}
          handleImageSelect={handleImageSelect}
          active={active}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
