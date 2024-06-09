import SavedPictureGrid from "../../components/savedPictureGrid/index.jsx"
//add ME query to this page
import {useQuery} from "@apollo/client";
import { QUERY_ME } from '../../utils/queries';


const Save = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
 
  const photoArray = userData.savedPhotos;
  
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h1>Save Page</h1>
      <SavedPictureGrid photoArray={photoArray}/>
    </div>
  )
}

export default Save