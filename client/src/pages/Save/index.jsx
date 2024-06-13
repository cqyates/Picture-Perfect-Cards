import {useState} from "react"
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { Container, Row } from 'react-bootstrap';
import SavedPictureCard from '../../components/SavedPictureCard';
import LargeImageViewer from '../../components/LargeImageViewer';

const Save = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const photoArray = data?.me.savedPhotos || [];
  const [featuredImage, setFeaturedImage] = useState(photoArray[0].lgSrc)
  const handleImageSelect = (event) => {
    console.log(event.target.getAttribute("value"))
    setFeaturedImage(event.target.getAttribute("value"))
  }
  const handleImageDelete = () => {
    console.log(`delete image`)
  }
  const handleImageEdit = () => {
    console.log(`edit image`)
  }
  const handleImageSend = () => {
    console.log(`send image`)
  }
  return (
    <div>
      <Container>
        <Row>
          <LargeImageViewer largeImage={featuredImage} handleImageDelete={handleImageDelete} handleImageEdit={handleImageEdit} handleImageSend={handleImageSend}/>
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
