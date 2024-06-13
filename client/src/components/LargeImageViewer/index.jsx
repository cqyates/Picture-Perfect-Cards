import Card from "react-bootstrap/Card"
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LargeImageViewer = ({largeImage, handleImageEdit, handleImageDelete, handleImageSend }) => {
return (
  <Card style={{border:"3px solid black", display: "flex", flexDirection: "row-reverse"}}>
    <Card.Img src={largeImage}>
    </Card.Img>
    <ButtonGroup style={{display: "flex", flexDirection: "column", border: "3px solid purple", justifyContent: "space-around"}}>
     <FontAwesomeIcon size="4x" type="button" onClick={handleImageEdit} icon={faEdit}/>
     <FontAwesomeIcon size="4x" type="button" onClick={handleImageDelete} icon={faTrash}/>
     <FontAwesomeIcon size="4x" type="button" onClick={handleImageSend} icon={faEnvelope}/>
    </ButtonGroup>
    <Card.Title></Card.Title>
  </Card>
)
}

export default LargeImageViewer