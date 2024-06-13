import {useState} from "react"
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { Container, Row } from 'react-bootstrap';
import SavedPictureCard from '../../components/SavedPictureCard';
import LargeImageViewer from '../../components/LargeImageViewer';

const Save = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const photoArray = data?.me.savedPhotos || [];
  const [featuredImage, setFeaturedImage] = useState("")
  const handleImageSelect = (event) => {
    console.log(event.target.getAttribute("value"))
    setFeaturedImage(event.target.getAttribute("value"))
  }
  return (
    <div>
      <Container>
        <Row>
          <LargeImageViewer largeImage={featuredImage} />
        </Row>
        <Row>
        {photoArray.map((photo) => (
          <SavedPictureCard 
          key={photo.photoId}
          id={photo.photoId}
          smSrc={photo.smSrc}
          lgSrc={photo.lgSrc}
          handleImageSelect={handleImageSelect}
         
          />
        ))}
        </Row>
      </Container>
    </div>
  );
};

export default Save;
