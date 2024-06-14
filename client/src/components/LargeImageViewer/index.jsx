import Card from "react-bootstrap/Card"
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LargeImageViewer = ({largeImage, id, handleImageEdit, handleImageDelete, handleImageSend }) => {
return (
  <Card style={{display: "flex", flexDirection: "row-reverse"}}>
    <Card.Img src={largeImage}>
    </Card.Img>
    <ButtonGroup style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
     <FontAwesomeIcon size="4x" type="button" onClick={handleImageEdit} icon={faEdit}/>
     <FontAwesomeIcon size="4x" type="button" onClick={()=>handleImageDelete(id)} icon={faTrash}/>
     <FontAwesomeIcon size="4x" type="button" onClick={handleImageSend} icon={faEnvelope}/>
    </ButtonGroup>
    <Card.Title></Card.Title>
  </Card>
)
}

export default LargeImageViewer