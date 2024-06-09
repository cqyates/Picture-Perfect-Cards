import PictureCard from "../PictureCard"
const PictureGrid = ({pictureArray}) => {
  console.log(pictureArray)
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {pictureArray.map(({id, src}) => (
       <PictureCard key={id} imgSrc={src} />
      ))}
    </div>
  )
}

export default PictureGrid