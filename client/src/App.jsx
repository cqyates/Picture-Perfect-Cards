
import './App.css';
// import Header from "./components/Header/index.jsx";
// import Footer from "./components/Footer/index.jsx";
import {Outlet} from "react-router-dom"
function App() {
  return (
    <>

    <main>
    <Outlet/>
    </main>
   
    </>
  );
}

export default App;
