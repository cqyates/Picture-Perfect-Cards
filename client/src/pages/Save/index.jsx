import {useState} from "react"
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../../utils/queries';
import { REMOVE_PHOTO } from "../../utils/mutations";
import Auth from "../../utils/auth";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import SavedPictureCard from '../../components/SavedPictureCard';
import LargeImageViewer from '../../components/LargeImageViewer';

const Save = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [removePhoto, { error }] = useMutation(REMOVE_PHOTO);

  const photoArray = data?.me.savedPhotos || [];

  const [featuredImage, setFeaturedImage] = useState({})

  const handleImageSelect = (event) => {
    const largeSrc = event.target.getAttribute("value");
    console.log(largeSrc)
    const photoId = event.target.getAttribute("id");
    console.log(photoId)
    setFeaturedImage({largeSrc: largeSrc, photoId: photoId})
    console.log(featuredImage)
  }
  const handleImageDelete = async (photoId) => {
    console.log(photoId)
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removePhoto({
        variables: { photoId },
      });
      console.log(data)
      // upon success, remove book's id from localStorage
      
    } catch (err) {
      console.error(err);
    }
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
          <LargeImageViewer id={featuredImage.photoId} largeImage={featuredImage.largeSrc} handleImageDelete={handleImageDelete} handleImageEdit={handleImageEdit} handleImageSend={handleImageSend}/>
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
