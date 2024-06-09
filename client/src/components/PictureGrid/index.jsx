
import PictureCard from "../PictureCard"
import Pagination from "react-bootstrap/Pagination";
const PictureGrid = ({pictureArray, active, handlePageClick}) => {

  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} value={number} active={number === active} >
        {number}
      </Pagination.Item>
    );
  }
 
  return (
    <div>
      {pictureArray.length == 0 ? <></>: 
      <section style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {pictureArray.map(({id, src}) => (
       <PictureCard key={id} id={id} imgSrc={src} />
      ))}
      <Pagination onClick={handlePageClick}>{items}</Pagination>
      </section>
}
    </div>
  )
}

export default PictureGrid