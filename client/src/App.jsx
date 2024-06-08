import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import './App.css';
// import Footer from "./components/Footer";
function App() {
  return (
    <div style={{ border: '1px solid black', height: '100%' }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
