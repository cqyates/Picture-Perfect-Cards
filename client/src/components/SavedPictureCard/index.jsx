import {Card} from 'react-bootstrap';

const SavedPictureCard = ({ id, imgSrc }) => {

  return (
    <Card
      style={{
        width: '16em',
        padding: '12px 12px 24px 12px',
        margin: '10px 0',
        boxShadow: '1px 1px 5px grey',
      }}
       
      >
      <Card.Img
        src={imgSrc}
        id={id}
      />
    </Card>
  );
};

export default SavedPictureCard;
