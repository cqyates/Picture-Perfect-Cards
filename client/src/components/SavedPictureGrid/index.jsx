import Pagination from "react-bootstrap/Pagination";
import PictureCard from "../PictureCard"
const SavedPictureGrid = ({photoArray}) => {

 
  return (
    <div>
      {photoArray.length == 0 ? <></>: 
      <section style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {photoArray.map(({id, medSrc}) => (
       <PictureCard key={id} id={id} imgSrc={medSrc} />
      ))}
      
      </section>
}
    </div>
  )
}

export default SavedPictureGrid