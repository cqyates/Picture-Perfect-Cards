import Card from "react-bootstrap/Card"

const LargeImageViewer = ({largeImage}) => {
return (
  <Card style={{border:"3px solid black"}}>
    <Card.Img src={largeImage}>

    </Card.Img>
    <Card.Title></Card.Title>
  </Card>
)
}

export default LargeImageViewer