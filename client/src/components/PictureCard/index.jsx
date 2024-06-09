import {Card} from 'react-bootstrap';
import {useMutation} from "@apollo/client"
import {SAVE_PHOTO} from "../../utils/mutations"
import Auth from "../../utils/auth"

const PictureCard = ({ id, imgSrc }) => {
  const [savePhoto, { error }] = useMutation(SAVE_PHOTO);

  const handleImageSelect = async (event) => {
    const pexelID=event.target.getAttribute("id")
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const { data } = await savePhoto({
        variables: { photoData: { photoId: pexelID } },
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
        src={imgSrc.small}
        id={id}
      />
    </Card>
  );
};

export default PictureCard;
