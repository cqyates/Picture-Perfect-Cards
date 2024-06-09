
import SavedPictureCard from "../SavedPictureCard"
const SavedPictureGrid = ({photoArray}) => {
console.log(photoArray)
 
  return (
    <div>
      {photoArray.length == 0 ? <></>: 
      <section style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {photoArray.map(({id, medSrc}) => (
       <SavedPictureCard key={id} id={id} imgSrc={medSrc} />
      ))}
      
      </section>
}
    </div>
  )
}

export default SavedPictureGrid