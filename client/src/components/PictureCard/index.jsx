import {Card} from 'react-bootstrap';
const PictureCard = ({ id, imgSrc }) => {
  const handleImageSelect = (event) => {
    const pexelID=event.target.getAttribute("id")
    console.log(pexelID)
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
