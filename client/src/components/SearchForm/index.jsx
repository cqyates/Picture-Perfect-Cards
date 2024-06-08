import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");
  }

  return (
    <Form style={{ display: 'flex' }}>
      <Form.Group>
        <Form.Control
          name="searchInput"
          value={searchInput}
          onChange={(e) => handleInputChange(e)}
          type="text"
          size="lg"
          placeholder="Enter Search Term"
        />
        <Button onClick={handleFormSubmit}>Search</Button>
      </Form.Group>
    </Form>
  );
};
export default SearchForm;
