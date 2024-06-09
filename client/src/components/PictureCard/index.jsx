import {Card} from 'react-bootstrap';
const PictureCard = ({ id, imgSrc }) => {
  const handleImageSelect = (event) => {
    console.log(event)
    // const pexelID = event.target.getAttribute('data-pid');
    // localStorage.setItem('currentImage', pexelID);
    // document.location.href = "/build"
  };

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
        src={imgSrc.small}
        onClick={handleImageSelect}
        data-pid={id}
      />
    </Card>
  );
};

export default PictureCard;
