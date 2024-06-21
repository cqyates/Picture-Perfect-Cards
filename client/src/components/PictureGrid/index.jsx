// import {useState, useEffect} from "react";
import PictureCard from "../PictureCard/index.jsx";
import Pagination from "react-bootstrap/Pagination";


const PictureGrid = ({pictureArray, active, handlePageClick, handleImageSelect}) => {
    console.log(pictureArray, "comes from the top of the picture grid component")
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
      {pictureArray.map(({id, src, liked}) => (
       <PictureCard key={id} id={id} imgSrc={src.small} liked={liked} handleImageSelect={handleImageSelect}/>
      ))}
      <Pagination onClick={handlePageClick}>{items}</Pagination>
      </section>
}
    </div>
  )
}

export default PictureGrid