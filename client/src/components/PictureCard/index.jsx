import {Card} from 'react-bootstrap';
import {useMutation} from "@apollo/client"
import {SAVE_PHOTO} from "../../utils/mutations.js"
import Auth from "../../utils/auth.js"

const PictureCard = ({ id, imgSrc }) => {
  const [savePhoto, { error }] = useMutation(SAVE_PHOTO);

  const handleImageSelect = async (event) => {
    const pexelID=event.target.getAttribute("id")
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const apiRes = await fetch(`/api/images/${pexelID}`)
      const pData= await apiRes.json()
      const photoObject = {
        photoId: pData.id,
        alt: pData.alt,
        photographer: pData.photographer,
        smSrc: pData.src.small,
        medSrc: pData.src.medium,
        orgSrc: pData.src.original,
        lgSrc: pData.src.large,
        xlSrc: pData.src.large2x,
        url: pData.url
      }
      console.log(photoObject)
      const { data } = await savePhoto({
        variables: { photoData: photoObject },
      });
      console.log(data);
    }
    catch (err) {
      console.log("mutation failed", err)
    }
  };

  return (
    <Card
      style={{
        width: '16em',
        padding: '12px 12px 24px 12px',
        margin: '10px 0',
        boxShadow: '1px 1px 5px grey',
      }}
        onClick={handleImageSelect}
       
      >
      <Card.Img
        src={imgSrc}
        id={id}
      />
    </Card>
  );
};

export default PictureCard;
