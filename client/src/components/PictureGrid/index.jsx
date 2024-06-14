// import {useState, useEffect} from "react";
import PictureCard from "../PictureCard/index.jsx";
import Pagination from "react-bootstrap/Pagination";
// import { savePhotoIds,getSavedPhotoIds } from "../../utils/localStorage.js";

const PictureGrid = ({pictureArray, active, handlePageClick}) => {
  // const [savedPhotoIds, setSavedPhotoIds] = useState(getSavedPhotoIds())
  // console.log(savedPhotoIds)
  // console.log(getSavedPhotoIds())
  // useEffect(() => {
  //   return () => savePhotoIds(savedPhotoIds);
  // });
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
       <PictureCard key={id} id={id} imgSrc={src.small} />
      ))}
      <Pagination onClick={handlePageClick}>{items}</Pagination>
      </section>
}
    </div>
  )
}

export default PictureGrid