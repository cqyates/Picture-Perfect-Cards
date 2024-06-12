import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { Container, Card } from 'react-bootstrap';
import SavedPictureCard from '../../components/SavedPictureCard';

const Save = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const photoArray = data?.me.savedPhotos || []
  console.log(photoArray)
  return (
    <div>
      <Container style={{ border: '1px solid green', display: 'flex', flexWrap: "wrap"}}>
        {photoArray.map((photo) => (
          <SavedPictureCard key={photo.photoId} photo={photo}/>
        ))}
        {/* <Card
          style={{
            width: '16em',
            padding: '12px 12px 24px 12px',
            margin: '10px 0',
            boxShadow: '1px 1px 5px grey',
          }}
        >
          <Card.Img src={} id={} />
        </Card> */}
      </Container>
    </div>
  );
};

export default Save;
